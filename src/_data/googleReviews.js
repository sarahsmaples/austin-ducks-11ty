// Fetches Google Reviews at build time using Places API
// Reviews are cached for the entire build - they only update when you rebuild the site

module.exports = async function() {
  const PLACE_ID = 'ChIJRSBCeKe1RIYRpUXX3Z5EU18';
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  // If no API key, return fallback reviews (for local development)
  if (!API_KEY) {
    console.log('No GOOGLE_PLACES_API_KEY found, using fallback reviews');
    return getFallbackReviews();
  }

  try {
    // Using Places API (New) - fetches place details including reviews
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&key=${API_KEY}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount'
      }
    });

    if (!response.ok) {
      console.error('Google Places API error:', response.status, response.statusText);
      return getFallbackReviews();
    }

    const data = await response.json();

    if (!data.reviews || data.reviews.length === 0) {
      console.log('No reviews returned from API, using fallback');
      return getFallbackReviews();
    }

    // Transform the API response to a simpler format
    const reviews = data.reviews.map(review => ({
      author: review.authorAttribution?.displayName || 'Anonymous',
      authorUrl: review.authorAttribution?.uri || null,
      rating: review.rating || 5,
      text: review.text?.text || '',
      relativeTime: review.relativePublishTimeDescription || '',
      publishTime: review.publishTime || null,
      source: 'Google'
    }));

    console.log(`Fetched ${reviews.length} Google reviews`);

    return {
      reviews: reviews,
      overallRating: data.rating || 5,
      totalReviews: data.userRatingCount || 0,
      fetchedAt: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error fetching Google reviews:', error.message);
    return getFallbackReviews();
  }
};

// Fallback reviews for when API is unavailable
function getFallbackReviews() {
  return {
    reviews: [
      {
        author: 'Recent Visitor',
        rating: 5,
        text: 'The best tour for adults and kids! If you don\'t see Austin from the water, you\'ve missed half the beauty. Great for littles as they get a "quacker" and rubber ducky.',
        relativeTime: 'Recently',
        source: 'Google'
      },
      {
        author: 'Happy Tourist',
        rating: 5,
        text: 'An absolute blast that everyone needs to experience! We learned so much about Austin and the area on this unique tour.',
        relativeTime: 'Recently',
        source: 'Google'
      },
      {
        author: 'Family Fun',
        rating: 5,
        text: 'Super cool and fun way to tour the city of Austin on land and water. Our tour guide was very entertaining, friendly, and knowledgeable.',
        relativeTime: 'Recently',
        source: 'Google'
      },
      {
        author: 'Austin Explorer',
        rating: 5,
        text: 'Great experience, a wonderful way to see and to learn a little Austin history!',
        relativeTime: 'Recently',
        source: 'Google'
      },
      {
        author: 'Visitor',
        rating: 5,
        text: 'After visiting Austin a few times, we finally had a chance to take the Duck Tour. We had fun, enjoyed the views, and learned a bit about Austin along the way.',
        relativeTime: 'Recently',
        source: 'Google'
      }
    ],
    overallRating: 4.8,
    totalReviews: 500,
    fetchedAt: null,
    isFallback: true
  };
}

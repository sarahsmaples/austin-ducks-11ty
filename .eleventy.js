module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/*.png");

  // Add global data for path prefix (for GitHub Pages subdirectory)
  // Change to "" for custom domain or root deployment
  const pathPrefix = process.env.ELEVENTY_ENV === 'production' ? "/austin-ducks-11ty" : "";
  eleventyConfig.addGlobalData("baseUrl", pathPrefix);

  // Set directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    pathPrefix: pathPrefix
  };
};

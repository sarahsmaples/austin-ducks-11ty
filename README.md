# Austin Duck Adventures - 11ty Site

This is the Austin Duck Adventures website rebuilt with 11ty (Eleventy) static site generator.

## Getting Started

### Installation

```bash
npm install
```

### Development

To run the development server with live reload:

```bash
npm start
```

This will start a local server at `http://localhost:8080` (by default) and watch for file changes.

### Build

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
austin-ducks-11ty/
├── src/                                  # Source files
│   ├── _layouts/                        # Layout templates
│   │   └── base.njk                     # Base layout template
│   ├── _includes/                       # Reusable components
│   │   ├── header.njk                   # Site header
│   │   ├── footer.njk                   # Site footer
│   │   └── scripts.njk                  # Common scripts
│   ├── assets/                          # Static assets (CSS, JS, images)
│   ├── index.njk                        # Homepage
│   ├── tours/                           # Tours page
│   ├── parties/                         # Parties page
│   ├── gallery/                         # Gallery page
│   ├── safety/                          # Safety page
│   └── privacy-policy-and-terms-and-conditions/  # Privacy policy
├── _site/                               # Built site (generated)
├── .eleventy.js                         # 11ty configuration
└── package.json                         # Project dependencies

```

## Features

- **Static Site Generation**: Fast, secure static HTML pages
- **Templating**: Uses Nunjucks templating for DRY code
- **Automatic Building**: 11ty watches for changes and rebuilds automatically
- **Asset Management**: All CSS, JS, and images are copied to the output
- **SEO-Friendly**: Proper meta tags and structure

## Pages

- **Homepage** (`/`) - Main landing page with hero slider, about section, videos, reviews, and contact
- **Tours** (`/tours/`) - Tour schedule and pricing information
- **Parties** (`/parties/`) - Group and private tour information
- **Gallery** (`/gallery/`) - Photo gallery with PhotoSwipe integration
- **Safety** (`/safety/`) - Safety information about the Hydra-Terra vehicles
- **Privacy Policy** (`/privacy-policy-and-terms-and-conditions/`) - Terms and privacy policy

## Customization

### Editing Content

Content can be edited in the respective `.njk` files in the `src` directory. The front matter at the top of each file controls page-specific settings like title and description.

### Modifying Layouts

The base layout is in `src/_layouts/base.njk`. Header, footer, and scripts are separated into includes for easier maintenance.

### Adding New Pages

1. Create a new folder in `src/` (e.g., `src/new-page/`)
2. Add an `index.njk` file with front matter:
   ```njk
   ---
   layout: base.njk
   title: Your Page Title
   description: Page description for SEO
   ---

   <your content here>
   ```

## Deployment

The `_site` directory contains the production-ready static files that can be deployed to any web host:
- Upload to FTP/SFTP
- Deploy to Netlify, Vercel, or GitHub Pages
- Use any static hosting service

## Technologies Used

- [11ty (Eleventy)](https://www.11ty.dev/) - Static site generator
- Nunjucks - Templating engine
- Existing CSS/JS from original site

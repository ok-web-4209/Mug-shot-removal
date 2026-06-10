# Mug-shot-removal

Static site for Hoffman Legal — mugshot removal attorney.

## CSS build

Tailwind is pre-built into `css/tailwind.css` (committed) instead of loading the
CDN runtime, for page-speed/SEO. After adding or changing Tailwind classes in
`index.html` or `js/`, rebuild it:

```sh
npm install
npm run build:css
```

Then commit the updated `css/tailwind.css` along with your changes.

## Content hub pages

SEO content pages (e.g. `/florida-mugshot-removal/`) are generated from
`scripts/build-pages.js`, which holds each page's content and stamps out
HTML using the site's shared design system. To add or edit a page:

1. Add/edit the page object in `PAGES` (and `RESOURCES` for footer links)
   in `scripts/build-pages.js`
2. Run `node scripts/build-pages.js`
3. Run `npm run build:css`
4. Add the new URL to `sitemap.xml` and to the homepage footer "Resources"
   list in `index.html`
5. Commit the generated `<slug>/index.html` along with the script

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

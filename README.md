# Yaqiu's Blog

Hexo 8 with the Butterfly theme.

## Local development

```sh
npm ci
npm run server
```

Open <http://localhost:4000> to preview the site. Build the static files with `npm run build`; Hexo writes them to `public/`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the site on pushes to `main` and deploys the `public/` artifact. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source.

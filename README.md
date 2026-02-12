# Saul Schaffer - Personal Website

A brutalist design personal website built with Next.js and Tailwind CSS.

## Features

- **Brutalist Design**: Bold typography, stark black and white contrast, heavy borders, and raw aesthetic
- **Next.js 16**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type-safe development
- **Static Export**: Fully static site for GitHub Pages
- **Responsive**: Works on all devices

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build

Build for production:

```bash
npm run build
```

This generates a static site in the `out/` directory.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Setup

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Under "Build and deployment":
   - Source: GitHub Actions
4. The GitHub Actions workflow will automatically build and deploy

### Custom Domain

The site is configured for **saulschaffer.com**. Make sure your DNS is set up:

```
Type: A Records
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: saultshaker.github.io
```

## Customization

### Update Links

Edit `app/page.tsx` to update:
- Google Scholar ID
- LLNL lab page URL
- Project details and links

### Style Changes

- `app/globals.css`: Brutalist styles and custom CSS
- `tailwind.config.ts`: Tailwind configuration
- `app/page.tsx`: Layout and component styling

### Colors

The brutalist design uses pure black (#000000) and white (#ffffff) for maximum contrast.

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- GitHub Pages for hosting

## License

© 2026 Saul Schaffer. All rights reserved.

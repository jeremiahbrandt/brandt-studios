# Brandt Studios

## Links
- [GitHub](https://github.com/jeremiahbrandt/brandt-studios)
- [Local Site](http://localhost:3000/)
- [Local CMS](http://localhost:3000/studio)
- [Deployed Site](https://brandt-studios.vercel.app/)
- [Deployed CMS](https://brandt-studios.vercel.app/studio)
- [Vercel Management](https://vercel.com/jeremiahbrandt/brandt-studios)
- [Sanity Management](https://www.sanity.io/manage/personal/project/xn2t3gzy)
- [Namecheap Domain Name Management](https://namecheap.com/): TODO: buy domain name

## Environment Variables
1. Rename `.env.test` to `.env`
2. Change dataset to either `production` or `development` in files: `.env` and `studio/sanity.json`.

You can also do `vercel env pull` to copy environment variables to your development environment.

## Running Locally
First time install vercel globally:
```bash
npm i -g vercel
```

To install dependencies after every pull:
```bash
npm i
```

To start the development server in production mode:
```bash
npm start
```

To start the development server in development mode (hot reload):
```bash
npm run dev
```
> Note: You must run in development mode to access http://localhost:3000/studio/

This will run the frontend at http://localhost:3000 and the Sanity Studio at http://localhost:3000/studio

## Enabling live preview

You can append `?preview` to the landing pages, product pages and the products overview to enable preview mode when you are logged into your Sanity project. For example:

`https://<your-project>.vercel.app/products/roji?preview`

You can find the code for the in-studio preview over in `/studio/src/components/product`.


# Created using Sanity.io and Next.js Ecommerce Starter

This is an e-commerce *starter* that features a studio with a simple [Next.js toolkit for Sanity.io](https://github.com/sanity-io/next-sanity) frontend.

**Starter Features:**

* Live previews, including website preview for products
* Frontend with product pages styled using Tailwind.css
* Content types for products, ads, pages, routes, popup shops, social media


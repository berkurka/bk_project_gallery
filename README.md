# Project gallery

A one-page gallery of Bernardo's live projects. Each card shows the name, a short description, an optional screenshot, a button to the live site, and a smaller Code link to the public GitHub repo.

The list lives in one file: [`data/projects.js`](data/projects.js).

## Add a project

Append one line to the `projects` array:

```js
{ name: "Name", description: "One or two sentences from the project's own README or page.", url: "https://the-live-site.example", repo: "https://github.com/berkurka/repo", image: "/thumbnails/name.jpg" },
```

- `url` is the live project. The **Open live site** button uses it and opens a new tab.
- `repo` is the public GitHub repository. It appears as the smaller **Code** link. Leave `repo` out when the code is not public.
- `image` is optional. Save a screenshot under `public/thumbnails/` and point `image` at it, for example `"/thumbnails/name.jpg"`. Leave it out for a card with no picture.
- If you cannot confirm a live URL, set `url` to the GitHub repo. The card still has a working link, labeled **View repository**, and it does not repeat a second Code link to the same place.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

This is a Next.js app. Vercel detects the framework, build command, and output with no extra config file.

1. Push this repository to GitHub.
2. In the Vercel dashboard, choose **Add New → Project** and import `berkurka/bk_project_gallery`.
3. Leave the preset as **Next.js**. The build command stays `next build`. No environment variables are required.
4. Deploy. Pushes to the production branch deploy on their own after that.

From a machine with the [Vercel CLI](https://vercel.com/docs/cli), `npx vercel` in this folder also works. Accept the defaults when it asks.

## Build

```bash
npm run build
```

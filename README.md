# Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure
This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment
Use the `npm run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development
Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview
The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production
The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## Static Site Generator (Node.js)
```shell
npm run build.server
```

# Setting up this project for Github Pages
## Add the static site adapter
  ```bash
  npm run qwik add static
  ```
* Running the above command will make the following changes to your project:
  - A `build.server` script will be automatically added to your `package.json` file.
  - An `adapters/static/vite.config.ts` file will be created for the static site specific config.
* To build the static site:
  ```bash
  npm run build.server
  ```
  Your build files will be generated into the `dist` folder by default.

## Configure the static site adapter for Github Pages
* Update `staticAdapter({origin: )` in `adapters/static/vite.config.ts` to the **full Github URL**:
  ```ts
  plugins: [
    staticAdapter({
      origin: "https://davidde.github.io/qwik-jokes-tutorial",
    }),
  ],
  ```
* Add `base: '/qwik-jokes-tutorial/',` in the **root** `vite.config.ts`:
  ```ts
  base: '/qwik-jokes-tutorial/',
  plugins: [
    qwikCity(),
    qwikVite(),
    tsconfigPaths()
  ],
  ```
* Use `npm run build.full` for the build step in the `.github/workflows/main.yml` Github Action workflow:
  ```yml
  - name: Build Qwik app
    run: npm run build.full
  ```
  The `scripts` section of `package.json` should contain:
  ```json
  "scripts": {
    "build": "qwik build",
    "build.client": "vite build",
    "build.full": "npm run build && npm run build.server",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/static/vite.config.ts",
  ...
  }
  ```
* Make sure to upload `dist/qwik-jokes-tutorial` in the upload step of the `.github/workflows/main.yml` Github Action workflow:
  ```yml
  - name: Upload build output as an artifact for GitHub Pages
    uses: actions/upload-pages-artifact@v3
    with:
      path: ./dist/qwik-jokes-tutorial
  ```
* The original joke fetches from `https://icanhazdadjoke.com` at runtime will have to be updated to use client-side fetching. Fetching cannot be done in `routeLoader$()` like in the original tutorial, because it runs on the server!

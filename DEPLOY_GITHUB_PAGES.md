# Publish the engineering flight deck on GitHub Pages

## Use the source package (recommended)

1. Extract `spacex-flight-deck-source.zip` into an empty folder. `package.json`, `src/`, `public/`, and `.github/` must be at the repository root, not inside an extra `program02/` folder.
2. Create an empty repository on GitHub. For GitHub Free, use a public repository for Pages. You can choose any repository name, such as `spacex-flight-deck`.
3. Push the extracted source to its `main` branch. If using GitHub Desktop, add the extracted folder as a local repository and publish it. Keep the included `.github` folder.
4. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy engineering flight deck to GitHub Pages**. If the first push ran before Pages was enabled, choose **Run workflow** after step 4.
6. When the workflow succeeds, use the URL shown in the deployment or Settings → Pages. The workflow installs dependencies, tests full mission logic, attitude controls, and orbital calculations, builds `dist/`, and deploys it.

No repository name needs to be entered into the code. Vite uses relative asset URLs, and HashRouter keeps navigation on the published HTML document. A project site will look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/#/mission
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/#/landing
```

The same build supports a root user site (`YOUR-USERNAME.github.io`) or a custom domain. Domain configuration itself is managed separately in GitHub Pages.

## Push using the terminal

Run these commands from the extracted source folder. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your real values before running the remote command:

```powershell
git init
git add .
git commit -m "Add SpaceX-inspired engineering flight deck"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If your folder is already a Git repository, retain its history and existing remote instead of repeating the initialization and remote-add commands. Sign in to GitHub when your Git client asks you to.

## Use the prebuilt static package

`spacex-flight-deck-site.zip` contains only the built website. It has `index.html`, `assets/`, `images/`, and `.nojekyll` at its root. It requires an HTTP server; double-clicking `index.html` is not a supported preview for module scripts.

For a branch-based Pages deployment, extract its contents into the root of a dedicated deployment branch and select that branch under **Settings → Pages → Deploy from a branch**, with **/(root)** as the folder. This is an alternative to the source workflow; the source package is easier to maintain because GitHub rebuilds it after each push.

## Local development and packaging

Use Node.js 24 and npm. After installing dependencies:

```powershell
npm ci
npm run dev
npm test
npm run build
npm run preview
```

To rebuild both ZIPs, install Python 3 as well and run:

```powershell
npm run package
```

The packager runs all 18 simulation and calculation tests and production build, then writes both ZIPs and their SHA-256 manifest to `release/`. Source archives include the workflow, app source, supplied artwork, helper scripts, lockfile, and documentation. They exclude generated dependencies, caches, local environment files, Git metadata, and browser training data.

## What to expect

- Learning notes and progress stay in the browser. They do not automatically transfer from localhost to the GitHub Pages origin, or between devices.
- The current labs run in the browser without a backend or API key.
- A local `127.0.0.1` URL works on the computer hosting the server. Use the published Pages URL on your phone.
- The code and workflow are prepared locally; a hosted deployment is only verified after the workflow runs in your repository.

Official references: [Vite static deployment](https://vite.dev/guide/static-deploy.html#github-pages) and [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Updating an existing upload

Both ZIPs are regenerated together after each update. For a source-based deployment, extract the latest **source** ZIP over your existing project, review the changes, and push them to `main`; keep your repository history and remote. For a branch-based prebuilt deployment, replace the previous site files with the latest **site** ZIP contents. Do not mix the new `index.html` with assets from an older build. The SHA-256 values in `release/manifest.json` identify this package pair.

# SpaceX Engineering Flight Deck

A SpaceX-inspired engineering training site with ten browser-based labs, guided experiments, a field guide, and a notebook that saves on your device. The design uses a monochrome mission-console theme with the three supplied concept artworks.

## Publish on GitHub Pages

Follow [DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md). The included GitHub Actions workflow tests, builds, and deploys the site when you push to `main`.

The app uses relative asset paths and hash routing, so it works with any repository name:

```text
https://USERNAME.github.io/REPOSITORY/#/mission
```

Select **Settings → Pages → Source → GitHub Actions** in your repository. No hosting backend or API key is required for the current labs.

## Develop locally

Use Node.js 24 and npm:

```powershell
npm ci
npm run dev
```

Vite prints the local address. To use the separate preview port:

```powershell
npm run dev -- --port 5174
```

```powershell
npm test
npm run build
npm run preview
```

`npm test` runs 18 checks covering full mission branches, preflight interlocks, fault recovery, pause/reset, telemetry, fine attitude control, and orbital calculations. `npm run build` writes a static site to `dist/`. Run an HTTP server to preview the build; double-clicking `index.html` is not supported for JavaScript modules.

## Create the push package

With Python 3 installed:

```powershell
npm run package
```

The packager tests and builds the application, then writes:

- `release/spacex-flight-deck-source.zip`: source files ready to extract into a GitHub repository, including the `.github` workflow.
- `release/spacex-flight-deck-site.zip`: compiled static website for a branch-based Pages deployment or another static host.
- `release/manifest.json`: archive sizes, file counts, and SHA-256 checksums.

Generated dependencies, caches, Git metadata, environment files, and browser training data are excluded. Keep `release/` out of your repository; push the source files instead of the ZIP itself.

## Workstations

| Hash route | Experience |
| --- | --- |
| `#/` | Engineering rotations, workstation directory, and training practice loop |
| `#/blueprint` | Vehicle subsystem anatomy |
| `#/arena` | Engineering design decisions |
| `#/propulsion` | Engine test stand and telemetry |
| `#/landing` | Manual booster landing and demonstration autopilot |
| `#/structures` | Material trade-offs and cryogenic proof tests |
| `#/avionics` | Fault injection and three-channel voting |
| `#/mars` | Propellant budgets and ideal delta-v |
| `#/starlink` | Illustrative optical-link and fiber latency comparisons |
| `#/mission` | Complete preflight-to-orbit/deep-space mission, faults, guided playback, trajectory views, and downloadable reports |
| `#/interview` | Engineering practice questions and a rocket-equation calculator |
| `#/guide` | Seven interactive flight briefings, circular-orbit calculator, worked equations, 25 glossary terms, and primary references |

## Full mission demo

1. Choose **Beyond Earth** or **Orbital delivery**. Read and acknowledge all six preflight reviews.
2. Poll the seven readiness stations, arm the sequence, and start the countdown. A NO-GO triggers a hold; restore the station, re-poll, re-arm, and resume.
3. Follow atmospheric ascent through Max Q and first-stage cutoff. Authorize separation, watch booster recovery, and confirm orbit insertion.
4. Deploy the payload. Orbital delivery ends in a debrief; Beyond Earth continues through transfer preparation, departure, antenna pointing, and science downlink.
5. Use **1×**, **5×**, or **20×** training time. Optional **Auto-advance flight checkpoints** plays the flight after manual preflight. Faults still require your response.
6. Inject a navigation fault during ascent or upper-stage flight, or a communications fault later. Choose the corresponding backup channel. Pause/resume and alternate vehicle/trajectory views are available in flight.
7. Download the final JSON flight report, or export the current event log mid-flight. **New mission** resets the simulation; an active flight asks before clearing its log.

Flight state is session-only: refreshing or leaving this lab starts over. In-flight learning links open a separate tab so the flight stays available. The training clock stops at decision gates and during faults. This is a compressed fictional mission with authored telemetry, recovery and departure, not a numerical trajectory solver or real SpaceX procedure. Propellant readout switches from booster reserve to upper-stage reserve at separation.

## Fine booster attitude control

The Booster Catch lab now includes independent cold-gas-style attitude assistance:

- **Q / E** or the on-screen nudge buttons move the target by **0.25°**, **1°**, or **2°**. The slider sets any target between −15° and +15° in quarter-degree steps.
- **Z / Center 0°** requests upright attitude. **Hold target angle** damps angular motion toward the target.
- **A / D** or the hold buttons provide coarse rotation and update the held target. **W / Up / Space** controls the engine separately.
- Read actual angle, target angle, angular rate, and a separate RCS gas reserve. The canvas shows gas-jet puffs during correction.
- Demo autopilot owns attitude while active; disengage it to use trim. Controls work with touch and keyboard, and input fields do not trigger flight shortcuts.

The pneumatic assist is an educational control model, not a claim about specific SpaceX vehicle hardware. Its torque, gas consumption, and damping are authored game values.

## Learning state and devices

Three suggested rotations connect four labs each. All ten labs have a briefing, model explanation, three practical tasks, a knowledge check, and a notebook. Completion requires checking all three tasks and answering the knowledge check correctly; tasks are self-reported.

Training state is stored under `spacex-training-v1` in browser local storage. It is specific to the origin, browser, and device, and does not sync from localhost to GitHub Pages or from Windows to your phone. If storage is blocked, the interface reports session-only saving. The development server's `127.0.0.1` address works only on its own computer; use your published Pages URL from a phone.

Desktop navigation has a separate workstation row; phones and tablets have a collapsible menu. Simulator panels stack on phones, and hold controls release on pointer cancellation or lost focus. The landing scenario waits for explicit input and uses elapsed-time scaling. Notes do not activate flight controls.

## Project layout

- `src/pages/`: the workstation screens, overview, and field guide. Earlier career/coding pages are preserved but not currently routed.
- `src/components/`: shared navigation, guided lab content, and learning state.
- `src/services/missionSequence.js`: full mission state machine and report generation; `attitudeControl.js` provides the fine attitude controller. Regression tests are alongside both.
- `src/services/assets.js`: deployment-relative asset paths.
- `src/training.css`, `src/flight-deck.css`, `src/mission.css`, `src/academy.css`, and `src/landing-controls.css`: responsive base, flight console, learning tools, and touch controls.
- `public/images/`: the three supplied PNG artworks. Below-fold homepage images load lazily.
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deployment workflow.
- `scripts/`: release packager and repository-subpath preview server.
- `scratch/`: original data authoring helpers. Running `assemble_workflow_data.py` overwrites the earlier workflow dataset; it is not needed for the current labs.

This project was migrated from `program01`; that folder was preserved. The optional legacy Gemini service is not used by the current routed labs. Artwork is conceptual, and the project is independent of SpaceX. Equations and further reading link to NASA, SpaceX, and Starlink primary sources; the simulation constants and outcomes should not be read as current vehicle specifications.

## Release verification

This release passes 18 automated checks and a production build. Browser verification covers the full deep-space branch, countdown hold and reauthorization, navigation-fault recovery, report export, fine attitude adjustment, and the field guide. The production site is checked below `/pages-check/` to exercise repository-relative assets and hash routes, including 320px phone layouts. Both release ZIPs are rebuilt from the current source and output, then checked for archive integrity and matching bytes.

The GitHub-hosted workflow must still run after the source is pushed to your repository.

# Apex Training

A premium, minimal personal calisthenics and fitness tracker — inspired by Notion, Linear, and Apple Fitness. Dark by default, fully local, zero backend.

![Apex Training](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20Vanilla%20JS-5b8def)

## Features

- **Dashboard** — current weight, Pull-Up / Push-Up / Dips PRs, sessions this month, last workout date, recent activity feed, and a 7-day session overview.
- **Pull Day / Push Day / Leg Day / Endurance / Upper Body** — log exercises with sets, reps, optional weight, and notes. Add, edit, and delete instantly.
- **EMOM** — build Every-Minute-On-the-Minute sessions with duration, exercise list, and target reps, then log completed rounds and notes.
- **AMRAP** — build As-Many-Rounds-As-Possible sessions with duration and exercise list, then log total rounds and notes.
- **Progress** — Chart.js visualizations for Pull-Up, Push-Up, Dips, body weight, and weekly workout frequency.
- **Settings** — export all data as JSON, import a backup, reset the app, switch weight units.
- **No backend, no login** — everything is stored in your browser's `localStorage` and autosaves instantly.
- Command palette (`⌘K` / `Ctrl+K`), number-key navigation (`1`–`0`), responsive layout with a mobile drawer + bottom nav, smooth page transitions, and thoughtful empty states.

## Tech Stack

- HTML5, CSS3 (custom design system, no framework)
- Vanilla JavaScript (ES modules)
- [Chart.js](https://www.chartjs.org/) via CDN for the Progress page
- `localStorage` for persistence — no build step, no dependencies to install

## Project Structure

```
apex-training/
├── index.html                 # App shell, sidebar, mobile nav, modal & toast containers
├── css/
│   └── styles.css             # Full design system (dark theme, components, responsive rules)
├── js/
│   ├── app.js                 # Entry point
│   ├── router.js              # Client-side routing + sidebar/mobile nav rendering
│   ├── store.js                # LocalStorage data layer (CRUD + derived stats)
│   ├── ui.js                   # Toast, modal, formatting helpers
│   ├── icons.js                 # Minimal inline SVG icon set
│   ├── commandPalette.js       # ⌘K quick navigation
│   ├── components/
│   │   └── tagInput.js         # Reusable exercise-list tag input (EMOM/AMRAP)
│   └── pages/
│       ├── dashboard.js
│       ├── workoutDay.js       # Shared page for Pull/Push/Leg/Endurance/Upper
│       ├── emom.js
│       ├── amrap.js
│       ├── progress.js
│       └── settings.js
└── README.md
```

## Running Locally

No build step is required. Because the app uses ES modules, open it via a local server rather than the `file://` protocol:

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node
npx serve .

# Option 3: VS Code "Live Server" extension
```

Then visit `http://localhost:8080`.

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `apex-training`).
2. **Push this project** to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Apex Training"
   git branch -M main
   git remote add origin https://github.com/<your-username>/apex-training.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to `Deploy from a branch`.
   - Set **Branch** to `main` and folder to `/ (root)`.
   - Click **Save**.
4. Your app will be live at:
   ```
   https://<your-username>.github.io/apex-training/
   ```
   (GitHub Pages builds usually take under a minute.)

> The included `.nojekyll` file disables Jekyll processing so all files (including anything starting with `_`) are served as-is.

## Data & Privacy

Apex Training never sends your data anywhere. All workouts, sessions, and settings live in your browser's `localStorage` under a single key. Use **Settings → Export JSON** to back up your data, and **Import JSON** to restore it on another device or browser.

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Open quick navigation |
| `1`–`9`, `0` | Jump directly to a page |
| `Esc` | Close modal / command palette |
| `Enter` | Submit the open form |

## License

MIT — do whatever you'd like with it.

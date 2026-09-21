# Deena Dhayalan — Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🌐 Live Site

> Deploy to GitHub Pages and update this URL:
> `https://YOUR_USERNAME.github.io/portfolio/`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Scroll animations & micro-interactions |
| Lucide React | Icons |
| GitHub Actions | CI/CD auto-deploy |
| GitHub Pages | Hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Opens at: **http://localhost:5173**

### Build for production

```bash
npm run build
```

Output goes to the `dist/` directory.

### Preview production build

```bash
npm run preview
```

---

## 📦 Deployment

### Option A — Manual deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch.

### Option B — Automatic (GitHub Actions)

Every push to the `main` branch automatically builds and deploys the site via GitHub Actions.

**Setup steps:**
1. Create a GitHub repository
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push your code to `main`

---

## ✏️ Updating Content

All portfolio content lives in **one file**:

```
src/data/resume.ts
```

Update these fields:

| Field | Description |
|-------|-------------|
| `personalInfo.email` | Your email address |
| `personalInfo.github` | Your GitHub URL |
| `personalInfo.linkedin` | Your LinkedIn URL |
| `personalInfo.name` | Your name |
| `skills` | Your technical skills |
| `experiences` | Work experience |
| `projects` | Projects |

### Changing the GitHub Pages base path

In `vite.config.ts`, update:

```ts
const repoName = 'portfolio' // change to your actual repo name
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Deena_Dhayalan_Resume.pdf   ← downloadable resume
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── resume.ts           ← all content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/deploy.yml
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🔧 Git Commands

### First time — create & push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## 📄 License

MIT © Deena Dhayalan

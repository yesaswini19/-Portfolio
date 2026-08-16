# Pamidi Yesaswini — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS, generated
from your resume content only (no invented projects, stats, or experience).

## Folder structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← your uploaded resume, already placed here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Experience.jsx
    │   ├── Certifications.jsx
    │   ├── Education.jsx
    │   ├── Achievements.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── SectionHeading.jsx
    └── data/
        ├── skills.js
        ├── projects.js
        ├── certifications.js
        └── experience.js    (also exports education, achievements)
```

## Run locally

Requires Node.js 18+.

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 1. Social links

Already wired up to your real profiles in `Hero.jsx`, `Contact.jsx`, and
`Footer.jsx`:

```
GitHub:   https://github.com/yesaswini19
LinkedIn: https://www.linkedin.com/in/pamidi-yesaswini-5298a6361/
CodeChef: https://www.codechef.com/users/vvit23bq1a4763
```

## 2. Resume PDF

Your uploaded resume has already been placed at `public/resume.pdf`, so the
"Download Resume" button works immediately. To update it later, just
replace that file (keep the same filename, or update the `href` in
`src/components/Hero.jsx`).

## 3. Add GitHub / live-demo links per project

Edit `src/data/projects.js` — each project object has `github` and `demo`
fields currently set to placeholder URLs:

```js
github: "https://github.com/yesaswini19/college-event-system",
demo: "https://your-live-demo-link.com",
```

Update these for all three projects (College Event System, MealPrepPro,
Smart-Agri-Assistant).

## 4. Contact form

The contact form does client-side validation only — it does **not** send
real emails yet (no backend is wired up). Before relying on it:
- Connect a service like Formspree, EmailJS, or Getform, **or**
- Write a small serverless function (Vercel supports this) that emails you

The exact spot to wire this up is marked with a comment in
`src/components/Contact.jsx`.

## 5. Full placeholder checklist

| Placeholder | File(s) | Status |
|---|---|---|
| GitHub profile URL | Hero.jsx, Contact.jsx, Footer.jsx | ✅ set to `github.com/yesaswini19` |
| LinkedIn URL | Hero.jsx, Contact.jsx, Footer.jsx | ✅ set |
| CodeChef URL | Hero.jsx, Contact.jsx, Footer.jsx | ✅ set |
| Per-project GitHub links | data/projects.js | ✅ MealPrep-Pro, Smart-Agri-Assistant confirmed. ⚠ College Event System repo name is a guess (`college-event-system`) — verify the real GitHub URL |
| Per-project live demo links | data/projects.js | ✅ set (Vercel + GitHub Pages links) |
| Certificate links ("add certificate link →") | Certifications.jsx (currently `href="#"`) |
| Contact form backend | Contact.jsx |
| Open Graph image (`/og-image.png`) | index.html — add a real image to `public/` or remove the tag |

## 6. Deploy with GitHub + Vercel

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yesaswini19/your-repo.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click
   **Add New → Project**.
3. Import the repo. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live `*.vercel.app` URL.
5. Every future `git push` to `main` auto-redeploys.

## Notes on content accuracy

Every data point (education, projects, certifications, internships,
achievements, skills) is taken directly from your resume. No projects,
metrics, or claims were invented. Wherever information wasn't in your
resume (project links, social URLs, certificate links), a clearly marked
placeholder was used instead.

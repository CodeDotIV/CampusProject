# Campus Projects

A responsive, single-page website for **Campus Project** — your one-stop solution for mini and major academic projects for 3rd-year and final-year engineering and degree students.

## Features

- **Sticky navigation** with smooth scroll and mobile hamburger menu
- **Hero section** explaining the platform and domains (Web, ML, AI, IoT, Android, Data Science)
- **Services section** with cards (Mini/Major/Customized projects, Documentation, PPT & Viva, Code explanation, IEEE)
- **Project categories** by Year (3rd / Final) and Department (CSE, ECE, EEE, Mechanical)
- **How It Works** step-by-step timeline
- **FAQ** accordion
- **Contact form** with validation (Name, Email, Phone, Project requirement) and success message
- **Footer** with quick links and social placeholders

## Tech Stack

- **HTML5** — semantic structure, SEO-friendly
- **CSS3** — custom design, Blue/Purple/White theme, responsive layout, scroll animations
- **JavaScript** — smooth scroll, mobile menu, tabs, FAQ accordion, form validation

No build step required. Optional backend (Node/Express or PHP + MongoDB/MySQL) can be added later for storing contact form submissions.

## Setup & Run

1. Clone or download this folder.
2. Open `index.html` in a browser, or serve the folder with any static server:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node (npx)
   npx serve .
   ```

3. Visit `http://localhost:8000` (or the port shown).

## Deployment

- Upload the project (e.g. `index.html`, `css/`, `js/`) to any static hosting: **Netlify**, **Vercel**, **GitHub Pages**, or traditional web hosting.
- Replace placeholder contact details in `index.html` (phone, WhatsApp, email) with your real ones.
- For live form handling, add a serverless function (Netlify/Vercel) or your own backend and point the form to it.

## File Structure

```
CampusProject/
├── index.html      # Single-page structure
├── css/
│   └── styles.css  # All styles
├── js/
│   └── main.js     # Nav, tabs, FAQ, form
└── README.md
```

## Target Users

- 3rd year engineering students  
- Final year engineering students  
- Degree / diploma students  
- Project coordinators  

---

**Made for Students** — Campus Projects

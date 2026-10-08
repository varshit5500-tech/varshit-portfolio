# Varshit Dholawala - Personal Portfolio

A modern, responsive single-page personal portfolio website tailored for **Varshit Dholawala**, B.Tech Electronics and Communication Engineering (ECE) student at **JECRC University, Jaipur**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Zero-config ready for deployment on **Vercel**.

---

## 🚀 Getting Started Locally

### 1. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
This compiles a static build to the `dist/` directory ready for deployment.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Details

All personal details, project cards, certifications, and links are centralized in a single file:
👉 **`src/data/portfolioData.js`**

### 1. Update LinkedIn & GitHub URLs
Open `src/data/portfolioData.js` and edit:
```javascript
export const personalInfo = {
  ...
  linkedin: "https://linkedin.com/in/your-actual-profile",
  github: "https://github.com/your-actual-username",
};
```

### 2. Update or Add Projects
In the `projectsData` array in `src/data/portfolioData.js`, modify the placeholders or add your real projects:
```javascript
{
  id: 2,
  title: "Your Project Title",
  tagline: "Short 1-line summary",
  description: "Detailed description of what you built and the problems it solves.",
  tech: ["Python", "React", "ESP32", "Tailwind CSS"],
  category: "ECE / IoT",
  liveUrl: "https://your-demo-url.com", // or "#"
  githubUrl: "https://github.com/your-username/repo",
  isPlaceholder: false
}
```

### 3. Add More Certifications or Hackathons
In the `achievementsData` array, easily add more entries:
```javascript
{
  id: 5,
  title: "Hackathon / Course Name",
  issuer: "Organizer / Platform",
  year: "2024",
  description: "Brief summary of what you accomplished or learned.",
  type: "Certification", // or "Hackathon", "Award", "Coursework"
  verified: true
}
```

---

## 🌐 Deploying to Vercel (Zero Configuration)

1. Push this project folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite** and uses:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy** — your portfolio is live!

---

## 📁 File Structure

```
portfolio/
├── index.html                   # HTML entry with SEO meta & fonts
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite config (port 3000, React plugin)
├── tailwind.config.js           # Custom dark theme & glowing palettes
├── postcss.config.js            # PostCSS plugins
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Single-page layout assembly
│   ├── index.css                # Tailwind directives & glassmorphism styles
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all portfolio data
│   └── components/
│       ├── Navbar.jsx           # Responsive sticky header & mobile drawer
│       ├── Hero.jsx             # Intro pitch, status pill & CTA buttons
│       ├── About.jsx            # Student bio, core values & highlights
│       ├── Education.jsx        # B.Tech ECE, JECRC University & coursework
│       ├── Skills.jsx           # 8 requested skill cards
│       ├── Projects.jsx         # Live & starter project cards with tech tags
│       ├── Achievements.jsx     # Curated certifications & expansion card
│       ├── Contact.jsx          # Interactive email copy, LinkedIn & GitHub
│       └── Footer.jsx           # Clean copyright & attribution
```

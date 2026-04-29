# Aryan Srivastava's Personal Portfolio

A modern, highly animated personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. 

## Features
- **Smooth Animations:** Powered by Framer Motion for scroll reveals, page transitions, and interactive elements.
- **Glassmorphism UI:** Modern, aesthetic design with background blur effects and elegant gradients.
- **Dark/Light Mode:** Seamless theme toggling with `next-themes`.
- **Particle Background:** Interactive particle background using `react-tsparticles`.
- **Custom Cursor:** Animated custom cursor trailing mouse movements.
- **Contact Form:** Fully functional contact form using EmailJS.

## Tech Stack
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React tsParticles
- EmailJS
- Lucide React / React Icons

## Getting Started

### Prerequisites
- Node.js installed

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd portfolioaryan
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

```bash
npm run dev
```

### Deployment

To build for production, run:
```bash
npm run build
```
You can deploy the resulting `dist` folder to Vercel, Netlify, or any static hosting service.

## Customization Guide

1. **EmailJS:** To make the contact form work, sign up at [EmailJS](https://www.emailjs.com/), create a service and template, and update the credentials in `src/sections/Contact.jsx`.
2. **Projects:** Update the `projects` array in `src/sections/Projects.jsx` with your actual project data.
3. **Skills:** Modify the `skills` array in `src/sections/Skills.jsx`.
4. **Colors:** The primary and secondary colors are defined in `tailwind.config.js`. You can change them there to update the whole site's theme.

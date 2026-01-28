# 🎨 Modern Portfolio Website

A stunning, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## ✨ Features

- **🎯 Smooth Animations** - Powered by Framer Motion for buttery-smooth page transitions
- **🎨 Modern Design** - Premium dark mode with glassmorphism effects
- **📱 Fully Responsive** - Looks great on all devices
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **🔍 SEO Optimized** - Proper meta tags and semantic HTML
- **💫 Interactive** - Engaging hover effects and micro-animations

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **PostCSS** - CSS processing

## 📦 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5174
   ```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Update your name
   - Change the tagline
   - Update social media links

2. **About Section** (`src/components/About.tsx`)
   - Add your bio
   - Update the avatar/image
   - Modify statistics

3. **Skills Section** (`src/components/Skills.tsx`)
   - Add/remove skill categories
   - Update skill levels
   - Customize technologies

4. **Projects Section** (`src/components/Projects.tsx`)
   - Add your projects
   - Update project images
   - Add demo and GitHub links

5. **Experience Section** (`src/components/Experience.tsx`)
   - Add your work experience
   - Update job titles and descriptions
   - Modify timeline

6. **Contact Section** (`src/components/Contact.tsx`)
   - Update contact information
   - Configure form submission
   - Add social media links

### Color Scheme

Colors are defined in `tailwind.config.js`:
- **Primary**: Indigo shades
- **Accent**: Pink shades

Modify these to match your personal brand!

### Fonts

Fonts are imported from Google Fonts in `src/index.css`:
- **Body**: Inter
- **Headings**: Poppins

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Projects.tsx    # Project portfolio
│   │   ├── Experience.tsx  # Work experience timeline
│   │   └── Contact.tsx     # Contact form & info
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🛠️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy!

## 🚀 Deployment

You can deploy this portfolio to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 License

Feel free to use this template for your personal portfolio!

## 🙏 Credits

Built with ❤️ using React, Vite, TailwindCSS, and Framer Motion

---

**Need help?** Feel free to reach out or open an issue!

# Sunshine Studio Website

A beautiful, responsive website for Sunshine Studio's January theater event. Built with React and featuring a stunning black and yellow color scheme.

## Features

- 🎭 **Home Page** - Hero section with event highlights and call-to-action
- 🎫 **Tickets Page** - Ticket selection and payment form
- 📋 **Information Page** - Comprehensive event details
- 👥 **About Us Page** - Studio mission, values, and achievements
- 🎪 **Actors Page** - Meet the talented cast members
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Modern Design** - Black and yellow theme with smooth animations

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3 with custom properties
- Responsive design principles

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tickets.jsx
│   │   ├── Information.jsx
│   │   ├── About.jsx
│   │   ├── Actors.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

You can easily customize:
- Colors in `src/index.css` (CSS variables)
- Content in each page component
- Actor information in `src/pages/Actors.jsx`
- Ticket types and pricing in `src/pages/Tickets.jsx`

## Deployment & Hosting

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, but recommended):
```bash
npm install -g vercel
```

2. **Initialize Git Repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

4. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in minutes!

**Or use Vercel CLI**:
```bash
vercel
```

### Option 2: Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the `dist` folder, OR
   - Connect your GitHub repository
   - Netlify will auto-detect settings
   - Your site will be live!

**Or use Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts**:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Build Configuration

The project includes:
- `vercel.json` - Configuration for Vercel (SPA routing)
- `netlify.toml` - Configuration for Netlify (SPA routing)

Both files ensure React Router works correctly on all routes.

## License

This project is created for Sunshine Studio.


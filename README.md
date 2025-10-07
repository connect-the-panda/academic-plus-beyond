# Academic + Beyond

A modern, professional landing page for an academic writing mentorship business built with React and Tailwind CSS.

## Features

- 🎨 Clean, minimalist design with deep blues/purples color scheme
- ✨ Smooth scroll animations and transitions
- 📱 Fully mobile-responsive
- 🎯 Clear visual hierarchy for service tiers
- 💫 Professional yet warm and approachable feel
- ⚡ Fast performance with Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd academic-plus-beyond
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
academic-plus-beyond/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind directives
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Key Sections

1. **Hero Section** - Compelling introduction with call-to-action buttons
2. **Value Propositions** - Three key benefits (Metacognition, Flow States, Transferable Skills)
3. **About Section** - Personal introduction and credentials
4. **Problem/Solution** - Addresses pain points and unique approach
5. **Services** - Three service tiers with clear pricing and features
6. **How It Works** - 4-step journey visualization
7. **CTA Section** - Free consultation booking with benefits
8. **Footer** - Contact information and closing

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing

## Customization

### Colors

The color scheme uses deep blues and purples. To customize, edit the gradient colors in `src/App.jsx`:
- `from-indigo-900 via-purple-900 to-blue-900`
- `from-indigo-500 to-purple-600`

### Animations

Scroll animations are configured in `tailwind.config.js`. The `IntersectionObserver` in `App.jsx` triggers animations when elements come into view.

### Content

All content is in `src/App.jsx`. Update text, pricing, and service details directly in the component.

## Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Academic + Beyond

## Contact

For questions or support, contact: sanaphay@gmail.com

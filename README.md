# AskPorsche – Interactive 3D Automotive Showroom

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-r128+-black?logo=javascript)](https://threejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://askporsche.netlify.app)

[Live Demo](https://askporsche.netlify.app) • [GitHub](https://github.com/askoti/porsche) • [Portfolio](https://kastriotaliu.com)

</div>

---

## Project Overview

**AskPorsche** is a next-generation automotive showroom experience built with **Three.js** and **Next.js**. It showcases an interactive 3D Porsche 911 that responds to user scroll input in real-time, creating an immersive, scroll-driven cinematic experience.

This project demonstrates advanced 3D graphics capabilities, performance optimization, and creative interaction design—perfect for luxury brands and premium product showcases.

---

## Key Features

### Scroll-Driven 3D Animation
- Porsche 911 model responds to scroll position
- Smooth, choreographed camera movements
- Multi-angle exploration as you scroll
- Hardware-accelerated WebGL rendering
- Seamless scroll-to-3D coordination

### Cinematic Storytelling
- **01 // Introduction**: Precision in motion tagline with full car reveal
- **02 // Design**: Iconic silhouette with door open animation
- **03 // Interior**: Driver-first cockpit showcase
- **04 // Performance**: Rear power signature and specifications
- **05 // Technology**: Real-time 3D experience with scroll choreography

### Performance Optimization
- Optimized Three.js scene for smooth 60 FPS
- Lazy-loaded 3D models
- Efficient scroll event handling
- Responsive canvas rendering
- Mobile-friendly interactions

### Responsive Design
- Desktop, tablet, and mobile optimized
- Touch-friendly scroll interactions
- Adaptive canvas sizing
- Readable typography at all breakpoints
- Professional Porsche-inspired color scheme

### Interactive Camera Control
- Scroll controls camera position and rotation
- Smooth interpolation between states
- Precise choreography for each section
- Dynamic lighting and reflections
- Real-time model visibility

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15+** | React framework with App Router |
| **Three.js (r128)** | 3D graphics rendering & WebGL |
| **JavaScript (ES6+)** | Interactive scroll handling & logic |
| **Tailwind CSS** | Utility-first styling |
| **Netlify** | Deployment & hosting |

---

## Project Structure

```
porsche/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main showroom experience
│   └── components/
│       ├── Scene.tsx       # Three.js scene setup
│       ├── Model.tsx       # Porsche 3D model
│       ├── Camera.tsx      # Scroll-driven camera
│       └── Lights.tsx      # Lighting configuration
├── public/
│   ├── models/             # 3D model files (gltf/glb)
│   └── textures/           # Texture assets
├── styles/                 # Global styles
├── hooks/
│   └── useScroll.ts        # Custom scroll hook
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Modern browser with WebGL support

### Installation

```bash
# Clone the repository
git clone https://github.com/askoti/porsche.git
cd porsche

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the interactive experience.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Netlify
netlify deploy --prod
```

---

## How It Works

### Scroll-Based Camera Control

The project uses custom scroll event handlers to drive the 3D camera:

```javascript
// Pseudo-code showing the concept
const scrollProgress = window.scrollY / (document.height - window.innerHeight);

// Map scroll progress to camera position
camera.position.x = lerp(startX, endX, scrollProgress);
camera.position.y = lerp(startY, endY, scrollProgress);
camera.position.z = lerp(startZ, endZ, scrollProgress);

// Look at the car
camera.lookAt(carPosition);
```

### Multi-Stage Choreography

Each scroll section triggers different camera movements:
1. **Introduction**: Full car reveal from front
2. **Design**: 360° silhouette exploration
3. **Interior**: Interior cockpit close-up
4. **Performance**: Rear view with specifications
5. **Technology**: Final showcase with technical overlay

### Performance Considerations

- **Throttled scroll events**: Prevents excessive re-renders
- **RequestAnimationFrame**: Syncs with browser refresh rate
- **LOD (Level of Detail)**: Simplified models at distance
- **Texture optimization**: Compressed formats
- **Canvas sizing**: Matches device pixel ratio

---

## Design Highlights

- **Color Palette**: Black backgrounds with Porsche red accents
- **Typography**: Bold, modern sans-serif with luxury positioning
- **Lighting**: Professional key + fill + rim lighting setup
- **Materials**: Realistic car paint, chrome, and rubber surfaces
- **Transitions**: Smooth easing functions for cinematic feel

---

## Technical Achievements

✅ **Three.js Mastery**: Advanced 3D graphics & WebGL  
✅ **Scroll Synchronization**: Perfectly choreographed animations  
✅ **Performance Engineering**: 60 FPS on most devices  
✅ **Responsive Canvas**: Adapts to all screen sizes  
✅ **Model Optimization**: Efficient geometry & texture management  
✅ **Interaction Design**: Intuitive scroll-to-3D mapping  
✅ **Production Ready**: Deployed on Netlify with CDN  

---

## Future Enhancements

- [ ] Multiple car model support (different Porsche variants)
- [ ] Interactive 3D configurator (color/wheel selection)
- [ ] VR/360° view mode
- [ ] Performance metrics overlay (Lighthouse scores)
- [ ] Case study documentation
- [ ] Mobile touch gestures (pinch-to-zoom)
- [ ] Advanced lighting scenarios (day/night)
- [ ] Sound effects synchronized to scroll

---

## Experience Sections

| Section | Feature | Tech |
|---------|---------|------|
| **Introduction** | "Precision in Motion" | Full car reveal animation |
| **Design** | Iconic silhouette | 360° camera rotation |
| **Interior** | Driver-first focus | Cockpit close-up |
| **Performance** | Power signature | Rear angle showcase |
| **Technology** | Real-time 3D | Final scroll choreography |

---

## Use Cases

This technology is perfect for:

---

## 💻 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Mobile browsers (optimized but slightly reduced performance)

---

## Contributing

This is a portfolio project showcasing Three.js expertise. If you have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## Connect With Me

- GitHub: @askoti
- Portfolio: kastriotaliu.com
- Email: kastriootaliiu@gmail.com
- LinkedIn: linkedin.com/in/kastriootaliiu/

---

## Acknowledgments

- **Three.js Community** for incredible 3D graphics library
- **Next.js Team** for seamless React framework
- **Netlify** for world-class deployment
- **Porsche** for iconic automotive design inspiration

---

<div align="center">

Made with ❤️ by [@askoti](https://github.com/askoti)

</div>

"use client"

import { Suspense, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Stage, ScrollControls, useScroll, Environment, Scroll, Float } from "@react-three/drei"
import * as THREE from "three"
import Loader from "./Loader" // Import the loader we just made

const positions = [
  new THREE.Vector3(4.44, 0.65, -2.35),
  new THREE.Vector3(-3.15, 0.65, -3.93),
  new THREE.Vector3(-1.19, 0.04, -1.67),
  new THREE.Vector3(-4.00, 0.51, 0.67),
  new THREE.Vector3(1.49, 0.44, 3.75),
]

const content = [
  {
    kicker: "01 // INTRODUCTION",
    title: "ASKPORSCHE",
    subtitle: "Precision in Motion",
    text: "Engineering isn’t just built. It’s sculpted. The Porsche 911 is more than a machine — it’s a statement of control, power, and timeless design.",
    cta: "Scroll to explore the legend."
  },
  {
    kicker: "02 // DESIGN",
    title: "Iconic Silhouette",
    subtitle: "One curve. Instantly recognizable.",
    text: "Since 1964, the 911 silhouette has remained unmistakable — evolving without losing its soul. Aerodynamics meets heritage.",
  },
  {
    kicker: "03 // INTERIOR",
    title: "Driver First",
    subtitle: "The cockpit wraps around you.",
    text: "The wheel connects you. The engine responds to you. This isn’t transportation. It’s interaction.",
  },
  {
    kicker: "04 // PERFORMANCE",
    title: "Power Signature",
    subtitle: "The rear doesn’t whisper. It announces.",
    text: "Wide stance. Smooth light bar. Dual exhaust authority. 0–100 km/h in seconds. Decades of racing DNA.",
  },
  {
    kicker: "05 // TECHNOLOGY",
    title: "ASKPORSCHE",
    subtitle: "Real-time 3D Experience",
    text: "Built with Three.js. Scroll-driven camera choreography. Performance optimized. Precision engineered.",
    footer: "Designed & Developed by Kastriot Aliu"
  }
]

function Model() {
  const { scene } = useGLTF("/porsche.glb")
  
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const mat = mesh.material as THREE.MeshStandardMaterial
        
        // Apply the specific Porsche Grey #a7a7a1
        if (mat.name.toLowerCase().includes("body") || mat.name.toLowerCase().includes("paint") || mat.name.toLowerCase().includes("car_color")) {
          mat.color.set("#000000")
          mat.metalness = 0.2
          mat.roughness = 0.3
        }
        
        // Ensure glass is actually transparent and not black
        if (mat.name.toLowerCase().includes("glass") || mat.name.toLowerCase().includes("window")) {
          mat.transparent = true
          mat.opacity = 0.1
          mat.color.set("#000000")
        }
      }
    })
  }, [scene])

  return <primitive object={scene} />
}

function CameraRig() {
  const scroll = useScroll()
  useFrame((state) => {
    const step = scroll.offset * (positions.length - 1)
    const index = Math.floor(step)
    const nextIndex = Math.min(index + 1, positions.length - 1)
    const weight = step - index
    state.camera.position.lerpVectors(positions[index], positions[nextIndex], weight)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="h-screen w-full relative">
      <Loader onFinished={() => setIsLoaded(true)} />
      <Canvas 
        key="porsche-canvas"
        dpr={[1, 2]} 
        shadows 
        camera={{ fov: 55 }}
        style={{ background: "#111111" }}
      >
        <ScrollControls pages={5} damping={0.4}>
          <Suspense fallback={null}>
            {/* Stage provides the ground and main lighting */}
            <Stage
                environment="city"
                intensity={0.5}
                // Remove contactShadows prop entirely
                preset="rembrandt"          // Optional: nice studio lighting preset
                adjustCamera={1.5}          // Optional: auto-zoom to fit model
              >       
              <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.05}>
                <Model />
              </Float>
            </Stage>
            
            <CameraRig />
            
            {/* Environment provides the high-gloss reflections */}
            <Environment
              preset="apartment"
              environmentIntensity={1}      // ← correct for reflections
              backgroundIntensity={1}       // ← correct if you also set background
              // background={true}          // optional
            />          
            </Suspense>
          <Scroll html>
  <div className="w-screen min-h-[500vh] font-sans relative">  {/* ← use min-h-[500vh] or calc(100vh * 5) for exactly 5 pages */}
    {/* Stronger cinematic vignette + subtle overlay to reduce eye strain on bright model */}
    {content.map((item, i) => (
      <section
        key={i}
        className={`h-screen w-screen flex items-center px-8 sm:px-16 md:px-24 lg:px-40 text-white bg-black/10 snap-start
          ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
      >
        <div
          className={`relative z-10 max-w-2xl lg:max-w-3xl
            ${i % 2 === 0 ? "text-left pr-4 lg:pr-20" : "text-right pl-4 lg:pl-20 ml-auto"}`}
        >
          {/* Kicker – tighter tracking, Porsche-like precision */}
          <p className="text-xs sm:text-sm font-black tracking-[0.35em] text-red-600/90 mb-4 md:mb-6 uppercase">
            {item.kicker}
          </p>

          {/* Title – bigger impact, gradient only on key word if you want, but current is bold */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.82] mb-2 md:mb-4
                         bg-gradient-to-r from-white via-white to-red-600/80 bg-clip-text text-transparent">
            {item.title}
          </h1>

          {/* Subtitle – slightly lighter, elegant */}
          <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-light italic text-white/85 mb-6 md:mb-10">
            {item.subtitle}
          </h2>

          {/* Divider – sharper, metallic feel */}
          <div className={`w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-6 md:mb-10 
                           ${i % 2 === 0 ? "mr-auto" : "ml-auto"}`} />

          {/* Body text – better readability, slightly larger on mobile */}
          <p className="text-sm sm:text-lg md:text-2xl leading-relaxed max-w-xl lg:max-w-2xl font-medium text-white/75">
            {item.text}
          </p>

          {/* CTA – more commanding, subtle fade-in possible later */}
          {item.cta && (
            <p className="mt-10 md:mt-16 text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-red-600/90 animate-pulse">
              ↓ {item.cta}
            </p>
          )}

          {/* Footer – discreet, bottom-aligned if last section */}
          {item.footer && (
            <div className="mt-16 md:mt-24 p-6 text-center border-t border-white/10 bg-black/40">
              <p className="text-xs md:text-sm font-mono text-red-600 uppercase tracking-widest">
                {item.footer}
              </p>
            </div>
          )}
        </div>
      </section>
    ))}
  </div>
</Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
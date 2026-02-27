"use client"

import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PorscheOfficialStyleLoader({
  onFinished,
}: {
  onFinished: () => void
}) {
  const { progress } = useProgress()
  const [isVisible, setIsVisible] = useState(true)

  const rounded = Math.round(progress)
  const isComplete = rounded >= 100

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onFinished, 1600) // sync with exit duration
      }, 900) // brief hold at 100%
      return () => clearTimeout(timer)
    }
  }, [isComplete, onFinished])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: -50,
            transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-10 text-[#DC2626] text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.3em] uppercase font-sans"
          >
            Porsche
          </motion.div>

          {/* Thin precision progress bar – official Porsche minimal style */}
          <div className="w-[50vw] max-w-md h-[2px] bg-zinc-800/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#DC2626]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-[#DC2626]/80 text-sm md:text-base font-mono tracking-widest uppercase"
          >
            {isComplete ? "Ready" : "Initializing"}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
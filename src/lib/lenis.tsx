"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let lenis: Lenis | undefined
    let frameId: number | undefined

    function stop() {
      if (frameId !== undefined) cancelAnimationFrame(frameId)
      frameId = undefined
      lenis?.destroy()
      lenis = undefined
    }

    function start() {
      stop()
      if (reducedMotion.matches) return

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis?.raf(time)
        frameId = requestAnimationFrame(raf)
      }

      frameId = requestAnimationFrame(raf)
    }

    start()
    reducedMotion.addEventListener("change", start)

    return () => {
      reducedMotion.removeEventListener("change", start)
      stop()
    }
  }, [])

  return <>{children}</>
}

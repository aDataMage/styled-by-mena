"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      gsap.fromTo(container, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
    }

    return () => {
      if (container) {
        gsap.to(container, { opacity: 0, y: 20, duration: 0.5 })
      }
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}

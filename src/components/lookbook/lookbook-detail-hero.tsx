"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface LookbookDetailHeroProps {
  lookbook: {
    title: string
    subtitle: string
    heroImage: string
  }
}

export function LookbookDetailHero({ lookbook }: LookbookDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const image = imageRef.current
    const text = textRef.current

    if (container && image && text) {
      // Initial animation
      const tl = gsap.timeline()
      tl.fromTo(image, { scale: 1.1 }, { scale: 1, duration: 1.5, ease: "power2.out" })
      tl.fromTo(
        text.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=1",
      )

      // Parallax effect on scroll
      gsap.to(image, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0" ref={imageRef}>
        <Image
          src={lookbook.heroImage || "/placeholder.svg"}
          alt={lookbook.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white" ref={textRef}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4">{lookbook.title}</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">{lookbook.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

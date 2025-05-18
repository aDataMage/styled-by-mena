"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

interface CollectionHeroProps {
  collection: {
    title: string
    subtitle: string
    season: string
    heroImage: string
  }
}

export function CollectionHero({ collection }: CollectionHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current

    if (container && text) {
      const tl = gsap.timeline()

      tl.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" })

      tl.fromTo(
        text.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
        "-=0.8",
      )
    }
  }, [])

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden" ref={containerRef}>
      <Image
        src={collection.heroImage || "/placeholder.svg"}
        alt={collection.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white" ref={textRef}>
          <div className="text-sm md:text-base uppercase tracking-widest mb-4">{collection.season}</div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4">{collection.title}</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">{collection.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Mock data for journal articles
const allArticles = [
  {
    id: "capsule-wardrobe-essentials",
    title: "10 Timeless Pieces for Your Capsule Wardrobe",
    excerpt:
      "Discover the essential pieces that form the foundation of a versatile and enduring wardrobe that transcends seasonal trends.",
    category: "Style Advice",
    date: "May 5, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "fabric-guide",
    title: "A Guide to Sustainable Fabrics: What to Look For",
    excerpt:
      "Navigate the complex world of textiles with our comprehensive guide to sustainable fabrics and their environmental impact.",
    category: "Sustainability",
    date: "April 28, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "summer-styling-tips",
    title: "Summer Styling: Elevating Simple Silhouettes",
    excerpt:
      "Learn how to transform minimal summer pieces into sophisticated looks through thoughtful styling and accessories.",
    category: "Style Advice",
    date: "April 20, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "behind-the-scenes",
    title: "Behind the Scenes: Creating Our Summer Collection",
    excerpt:
      "Take a glimpse into our atelier and discover the creative process behind our latest Summer Solstice collection.",
    category: "Behind the Scenes",
    date: "April 15, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "sustainable-fashion-myths",
    title: "Debunking Common Myths About Sustainable Fashion",
    excerpt:
      "We address common misconceptions about sustainable fashion and provide clarity on what truly makes a brand ethical.",
    category: "Sustainability",
    date: "April 8, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "art-of-layering",
    title: "The Art of Layering: Transitional Dressing",
    excerpt:
      "Master the art of layering to create versatile outfits that transition seamlessly between seasons and occasions.",
    category: "Style Advice",
    date: "April 1, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function JournalGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const articleRefs = useRef<(HTMLDivElement | null)[]>([])

  // Filter articles by category if one is selected
  const filteredArticles = activeCategory
    ? allArticles.filter((article) => article.category === activeCategory)
    : allArticles

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const articles = articleRefs.current.filter(Boolean)

    if (container && articles.length) {
      // Clear any existing animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Animate each article with staggered timing
      articles.forEach((article, index) => {
        gsap.fromTo(
          article,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: article,
              start: "top 85%",
            },
          },
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [filteredArticles])

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article, index) => (
          <div key={article.id} ref={(el) => (articleRefs.current[index] = el)}>
            <Link href={`/journal/${article.id}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="text-gray-600">{article.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{article.date}</span>
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:underline">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found in this category.</p>
        </div>
      )}
    </div>
  )
}

"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Mock data for articles
const allArticles = [
  {
    id: "sustainable-wardrobe",
    title: "Building a Sustainable Wardrobe: Quality Over Quantity",
    excerpt:
      "Discover how investing in fewer, higher-quality pieces can reduce your environmental impact while elevating your personal style.",
    category: "Sustainability",
    date: "May 10, 2025",
    image: "/placeholder.svg?height=600&width=800",
  },
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
]

interface RelatedArticlesProps {
  currentArticleId: string
  category: string
}

export function RelatedArticles({ currentArticleId, category }: RelatedArticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const articlesRef = useRef<HTMLDivElement>(null)

  // Filter articles by category and exclude current article
  const relatedArticles = allArticles
    .filter((article) => article.id !== currentArticleId)
    .filter((article) => article.category === category || article.category === "Style Advice")
    .slice(0, 3)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const heading = headingRef.current
    const articles = articlesRef.current

    if (container && heading && articles) {
      gsap.fromTo(
        heading,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        },
      )

      gsap.fromTo(
        articles.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: articles,
            start: "top 80%",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <div ref={containerRef}>
      <h2 ref={headingRef} className="font-serif text-2xl md:text-3xl mb-8 text-center">
        You May Also Enjoy
      </h2>

      <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedArticles.map((article) => (
          <Link key={article.id} href={`/journal/${article.id}`} className="group block">
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
            <h3 className="font-serif text-lg mb-2 group-hover:underline">{article.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

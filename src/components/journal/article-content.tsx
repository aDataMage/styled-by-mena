"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const contentElement = contentRef.current

    if (contentElement) {
      // Animate headings
      const headings = contentElement.querySelectorAll("h2")
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
            },
          },
        )
      })

      // Animate paragraphs
      const paragraphs = contentElement.querySelectorAll("p")
      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 85%",
            },
          },
        )
      })

      // Animate lists
      const lists = contentElement.querySelectorAll("ul")
      lists.forEach((list) => {
        gsap.fromTo(
          list,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: list,
              start: "top 85%",
            },
          },
        )

        // Animate list items
        const listItems = list.querySelectorAll("li")
        gsap.fromTo(
          listItems,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: list,
              start: "top 85%",
            },
          },
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [content])

  return (
    <div className="max-w-3xl mx-auto">
      <div ref={contentRef} className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

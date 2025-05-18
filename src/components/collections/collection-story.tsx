"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface CollectionStoryProps {
  collection: {
    title: string
    story: string
    materials: string[]
    inspiration: string[]
  }
}

export function CollectionStory({ collection }: CollectionStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const story = storyRef.current
    const details = detailsRef.current

    if (section && story && details) {
      gsap.fromTo(
        story.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: story,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        details.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: details,
            start: "top 80%",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Split the story into paragraphs
  const paragraphs = collection.story.split("\n\n")

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2" ref={storyRef}>
          <h2 className="font-serif text-2xl md:text-3xl mb-6">The Story</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-8" ref={detailsRef}>
          <div>
            <h3 className="font-serif text-xl mb-4">Materials</h3>
            <ul className="space-y-2">
              {collection.materials.map((material, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                  {material}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">Inspiration</h3>
            <ul className="space-y-2">
              {collection.inspiration.map((item, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

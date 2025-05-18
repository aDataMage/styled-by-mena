"use client"

import { useState } from "react"
import { LookbookStory } from "@/components/lookbook/lookbook-story"

// Mock data for lookbook stories
const lookbookStories = [
  {
    id: "urban-minimalism",
    title: "Urban Minimalism",
    description: "Clean lines and architectural inspiration meet the energy of the city.",
    coverImage: "/placeholder.svg?height=800&width=1200",
    images: [
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Model in minimalist outfit against urban backdrop",
        productIds: ["2", "7"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Architectural details with model in structured silhouette",
        productIds: ["3", "6"],
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Urban landscape with model in monochromatic outfit",
        productIds: ["1", "4"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Model in tailored pieces against concrete background",
        productIds: ["5", "8"],
      },
    ],
  },
  {
    id: "coastal-serenity",
    title: "Coastal Serenity",
    description: "Fluid silhouettes and natural textures inspired by the Mediterranean coast.",
    coverImage: "/placeholder.svg?height=800&width=1200",
    images: [
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Model in flowing dress by the sea",
        productIds: ["1", "5"],
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Beachside scene with model in linen ensemble",
        productIds: ["3", "7"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Model in light layers against coastal backdrop",
        productIds: ["2", "8"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Sunset scene with model in resort wear",
        productIds: ["4", "6"],
      },
    ],
  },
  {
    id: "timeless-elegance",
    title: "Timeless Elegance",
    description: "Classic silhouettes reimagined for the modern woman with a focus on craftsmanship.",
    coverImage: "/placeholder.svg?height=800&width=1200",
    images: [
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Model in tailored suit in historic setting",
        productIds: ["2", "6"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Close-up of detailed craftsmanship on garment",
        productIds: ["1", "8"],
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Model in evening wear in elegant interior",
        productIds: ["3", "5"],
      },
      {
        src: "/placeholder.svg?height=1200&width=800",
        alt: "Classic silhouette against architectural backdrop",
        productIds: ["4", "7"],
      },
    ],
  },
]

export function LookbookStories() {
  const [activeStory, setActiveStory] = useState(lookbookStories[0].id)

  return (
    <div>
      <div className="mb-12">
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {lookbookStories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`text-sm md:text-base pb-1 transition-all ${
                activeStory === story.id
                  ? "font-medium border-b border-black"
                  : "text-gray-500 hover:text-black border-b border-transparent"
              }`}
            >
              {story.title}
            </button>
          ))}
        </nav>
      </div>

      {lookbookStories.map((story) => (
        <div key={story.id} className={activeStory === story.id ? "block" : "hidden"}>
          <LookbookStory story={story} />
        </div>
      ))}
    </div>
  )
}

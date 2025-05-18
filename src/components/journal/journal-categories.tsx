"use client"

import { useState } from "react"
import Link from "next/link"

const categories = [
  { name: "All", count: 12 },
  { name: "Style Advice", count: 5 },
  { name: "Sustainability", count: 4 },
  { name: "Behind the Scenes", count: 2 },
  { name: "Interviews", count: 1 },
]

export function JournalCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div>
      <h3 className="font-serif text-xl mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={`/journal${category.name === "All" ? "" : `?category=${encodeURIComponent(category.name)}`}`}
              className={`flex justify-between items-center py-2 hover:text-black transition-colors ${
                activeCategory === category.name ? "text-black font-medium" : "text-gray-600"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
              <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full">{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

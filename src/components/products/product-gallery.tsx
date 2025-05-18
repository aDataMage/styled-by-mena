"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <Image
          src={images[mainImage] || "/placeholder.svg"}
          alt={`${name} - Image ${mainImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-[3/4] relative overflow-hidden bg-gray-100 ${
              index === mainImage ? "ring-2 ring-black" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setMainImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${name} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

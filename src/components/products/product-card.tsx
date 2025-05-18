"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { WishlistButton } from "@/components/wishlist/wishlist-button"

export interface ProductCardProps {
  id: string
  name: string
  price: number
  images: string[]
  colors: string[]
  isNew?: boolean
}

export function ProductCard({ id, name, price, images, colors, isNew = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Create a product object for the wishlist
  const product = {
    id,
    name,
    price,
    image: images[0] || "/placeholder.svg",
    colors,
  }

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-4">
        <Link href={`/products/${id}`}>
          <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
            <Image src={images[0] || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
        </Link>

        {isNew && <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">New</div>}

        <WishlistButton product={product} />
      </div>

      <div>
        <h3 className="text-sm font-medium">
          <Link href={`/products/${id}`}>{name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">${price}</p>

        <div className="mt-2 flex gap-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

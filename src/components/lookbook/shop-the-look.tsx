"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"

// Mock data for products
const allProducts = [
  {
    id: "1",
    name: "Silk Slip Dress",
    price: 189,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "2",
    name: "Oversized Wool Blazer",
    price: 245,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "3",
    name: "High-Waisted Trousers",
    price: 165,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 210,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "5",
    name: "Linen Button-Up Shirt",
    price: 120,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "6",
    name: "Tailored Wool Coat",
    price: 385,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    price: 145,
    image: "/placeholder.svg?height=600&width=480",
  },
  {
    id: "8",
    name: "Merino Wool Cardigan",
    price: 175,
    image: "/placeholder.svg?height=600&width=480",
  },
]

interface ShopTheLookProps {
  productIds: string[]
}

export function ShopTheLook({ productIds }: ShopTheLookProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  // Filter products by IDs
  const products = allProducts.filter((product) => productIds.includes(product.id))

  useEffect(() => {
    const container = containerRef.current
    const productsEl = productsRef.current

    if (container && productsEl) {
      if (isOpen) {
        gsap.fromTo(
          productsEl,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" },
        )
      } else {
        gsap.to(productsEl, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" })
      }
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-serif text-xl md:text-2xl">The Look</h3>
        <p className="text-gray-600">
          Effortless elegance captured in carefully curated pieces that work in harmony to create a cohesive aesthetic.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="border-black hover:bg-black hover:text-white transition-colors"
        >
          {isOpen ? "Hide Products" : "Shop This Look"}
        </Button>
      </div>

      <div ref={productsRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex gap-4 items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-16 h-20 overflow-hidden rounded bg-gray-100 flex-shrink-0">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium group-hover:underline">{product.name}</h4>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client";

import { useState } from "react";
import { ProductCard } from "@/components/products/product-card";

// Mock data for products
const allProducts = [
  {
    id: "1",
    name: "Silk Slip Dress",
    price: 189,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#F5F5DC", "#000000", "#D3D3D3"],
    isNew: true,
    category: "dresses",
  },
  {
    id: "2",
    name: "Oversized Wool Blazer",
    price: 245,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3"],
    isNew: false,
    category: "outerwear",
  },
  {
    id: "3",
    name: "High-Waisted Trousers",
    price: 165,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#F5F5DC", "#808080"],
    isNew: true,
    category: "bottoms",
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 210,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#D3D3D3", "#000000", "#F5F5DC"],
    isNew: false,
    category: "tops",
  },
  {
    id: "5",
    name: "Linen Button-Up Shirt",
    price: 120,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#FFFFFF", "#F5F5DC", "#D3D3D3"],
    isNew: true,
    category: "tops",
  },
  {
    id: "6",
    name: "Tailored Wool Coat",
    price: 385,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3"],
    isNew: false,
    category: "outerwear",
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    price: 145,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3", "#F5F5DC"],
    isNew: false,
    category: "bottoms",
  },
  {
    id: "8",
    name: "Merino Wool Cardigan",
    price: 175,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#D3D3D3", "#F5F5DC", "#000000"],
    isNew: true,
    category: "tops",
  },
];

export function ProductsGrid() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddToFavorites = (id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {allProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

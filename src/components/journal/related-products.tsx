"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  },
  {
    id: "2",
    name: "Oversized Wool Blazer",
    price: 245,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3"],
    isNew: false,
  },
  {
    id: "3",
    name: "High-Waisted Trousers",
    price: 165,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#F5F5DC", "#808080"],
    isNew: true,
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 210,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#D3D3D3", "#000000", "#F5F5DC"],
    isNew: false,
  },
  {
    id: "5",
    name: "Linen Button-Up Shirt",
    price: 120,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#FFFFFF", "#F5F5DC", "#D3D3D3"],
    isNew: true,
  },
  {
    id: "6",
    name: "Tailored Wool Coat",
    price: 385,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3"],
    isNew: false,
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    price: 145,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3", "#F5F5DC"],
    isNew: false,
  },
  {
    id: "8",
    name: "Merino Wool Cardigan",
    price: 175,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#D3D3D3", "#F5F5DC", "#000000"],
    isNew: true,
  },
];

interface RelatedProductsProps {
  productIds: string[];
}

export function RelatedProducts({ productIds }: RelatedProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Filter products by IDs
  const relatedProducts = allProducts.filter((product) =>
    productIds.includes(product.id)
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const heading = headingRef.current;
    const products = productsRef.current;

    if (container && heading && products) {
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
        }
      );

      gsap.fromTo(
        products.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: products,
            start: "top 80%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleAddToFavorites = (id: string) => {
    // Implementation for adding to favorites
    console.log(`Added product ${id} to favorites`);
  };

  return (
    <div ref={containerRef}>
      <h2
        ref={headingRef}
        className="font-serif text-2xl md:text-3xl mb-8 text-center"
      >
        Shop the Article
      </h2>

      <div
        ref={productsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-block border-b border-black pb-1 text-sm hover:opacity-70 transition-opacity"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

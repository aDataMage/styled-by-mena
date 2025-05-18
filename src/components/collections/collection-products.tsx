"use client";

import { useRef, useEffect, useState } from "react";
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
    id: "3",
    name: "High-Waisted Trousers",
    price: 165,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#F5F5DC", "#808080"],
    isNew: true,
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
    id: "7",
    name: "Pleated Midi Skirt",
    price: 145,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3", "#F5F5DC"],
    isNew: false,
  },
];

interface CollectionProductsProps {
  productIds: string[];
  collectionTitle: string;
}

export function CollectionProducts({
  productIds,
  collectionTitle,
}: CollectionProductsProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Filter products by IDs
  const products = allProducts.filter((product) =>
    productIds.includes(product.id)
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const productsGrid = productsRef.current;

    if (section && heading && productsGrid) {
      gsap.fromTo(
        heading.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        productsGrid.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsGrid,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="text-center mb-10" ref={headingRef}>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          Shop the Collection
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover and shop the key pieces from our {collectionTitle}{" "}
          collection.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        ref={productsRef}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href={`/products?collection=${encodeURIComponent(collectionTitle)}`}
          className="inline-block border-b border-black pb-1 text-sm hover:opacity-70 transition-opacity"
        >
          View All Collection Products
        </Link>
      </div>
    </section>
  );
}

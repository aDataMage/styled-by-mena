"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductCard } from "@/components/products/product-card";
import { useIsMobile } from "../ui/use-mobile";
import { cn } from "@/lib/utils";
// Mock data for featured products
const featuredProducts = [
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
];

export function FeaturedCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heading = headingRef.current;
    const products = productsRef.current;

    if (heading && products) {
      gsap.fromTo(
        heading.children,
        { y: 50, opacity: 0 },
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

      if (isMobile) {
        const cards = gsap.utils.toArray(products.children) as HTMLElement[];
        const cardCount = cards.length;

        cards.forEach((card, index) => {
          gsap.set(card, {
            xPercent: index % 2 === 0 ? -100 : 100,
            scale: 0.8,
            opacity: 0,
          });
          gsap.to(card, {
            xPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
              markers: false,
              once: true,
            },
          });
        });
      } else {
        gsap.fromTo(
          products.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: products,
              start: "top 75%",
            },
          }
        );
      }
    }
  }, [isMobile]);

  const handleAddToFavorites = (id: string) => {
    // Implementation for adding to favorites
    console.log(`Added product ${id} to favorites`);
  };

  return (
    <section className="py-20 md:py-28 overflow-x-clip" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" ref={headingRef}>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most coveted pieces, designed with intention and
            crafted to last.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          )}
          ref={productsRef}
        >
          {featuredProducts.map((product) => (
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
    </section>
  );
}

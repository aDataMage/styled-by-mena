"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

// Mock data for collections
const collections = [
  {
    id: "spring-2025",
    title: "Spring Awakening 2025",
    description:
      "A celebration of renewal with lightweight fabrics in a palette of soft pastels and earth tones.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Spring 2025",
  },
  {
    id: "resort-2025",
    title: "Resort Escape 2025",
    description:
      "Versatile pieces designed for warm-weather getaways, featuring breathable linens and flowing silks.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Resort 2025",
  },
  {
    id: "winter-2024",
    title: "Winter Solitude 2024",
    description:
      "Luxurious layers in rich textures and deep hues, designed to provide warmth and elegance.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Winter 2024",
  },
  {
    id: "fall-2024",
    title: "Autumn Palette 2024",
    description:
      "Inspired by changing leaves, this collection features warm tones and transitional pieces.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Fall 2024",
  },
  {
    id: "essentials",
    title: "Styled By Mena Essentials",
    description:
      "Our permanent collection of timeless staples that form the foundation of a considered wardrobe.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Permanent Collection",
  },
  {
    id: "limited-edition",
    title: "Artisan Collaboration",
    description:
      "Limited edition pieces created in partnership with master craftspeople from around the world.",
    image: "/placeholder.svg?height=800&width=600",
    season: "Limited Edition",
  },
];

export function CollectionsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;

    if (section && heading && grid) {
      gsap.fromTo(
        heading.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );

      // Animate grid items
      const gridItems = grid.children;
      Array.from(gridItems).forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="text-center mb-12" ref={headingRef}>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          Explore All Collections
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our seasonal collections and permanent lines, each with its
          own unique story and aesthetic.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={gridRef}
      >
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group block overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-medium mb-1">
                  {collection.season}
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-2">
                  {collection.title}
                </h3>
                <div className="flex items-center text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="mr-2">Explore Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

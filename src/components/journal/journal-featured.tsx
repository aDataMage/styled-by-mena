"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

// Featured article data
const featuredArticle = {
  id: "sustainable-wardrobe",
  title: "Building a Sustainable Wardrobe: Quality Over Quantity",
  excerpt:
    "Discover how investing in fewer, higher-quality pieces can reduce your environmental impact while elevating your personal style.",
  category: "Sustainability",
  date: "May 10, 2025",
  image: "/placeholder.svg?height=800&width=1200",
  author: {
    name: "Mena Osiro",
    role: "Founder & Creative Director",
    image: "/placeholder.svg?height=200&width=200",
  },
};

export function JournalFeatured() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (container && image && content) {
      const tl = gsap.timeline();

      tl.fromTo(
        container,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      tl.fromTo(
        image,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      );
      tl.fromTo(
        content.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-50 rounded-lg overflow-hidden"
    >
      <div
        className="relative h-[400px] lg:h-[500px] overflow-hidden"
        ref={imageRef}
      >
        <Image
          src={featuredArticle.image || "/placeholder.svg"}
          alt={featuredArticle.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 lg:p-12" ref={contentRef}>
        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-gray-600">{featuredArticle.category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{featuredArticle.date}</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          {featuredArticle.title}
        </h2>
        <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={featuredArticle.author.image || "/placeholder.svg"}
              alt={featuredArticle.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{featuredArticle.author.name}</p>
            <p className="text-gray-600 text-xs">
              {featuredArticle.author.role}
            </p>
          </div>
        </div>

        <Link
          href={`/journal/${featuredArticle.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          Read Article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

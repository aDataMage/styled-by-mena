"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

// Mock data for the featured collection
const featuredCollection = {
  id: "summer-2025",
  title: "Summer Solstice 2025",
  description:
    "Our Summer Solstice collection celebrates the season's golden light and languid days. Featuring lightweight linens, fluid silks, and organic cotton in a palette inspired by sun-drenched landscapes.",
  coverImage: "/placeholder.svg?height=800&width=1600",
  images: [
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
  ],
};

export function FeaturedCollection() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    const images = imagesRef.current;

    if (container && text && image && images) {
      const tl = gsap.timeline();

      tl.fromTo(
        container,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
      tl.fromTo(
        image,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      );
      tl.fromTo(
        text.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      );
      tl.fromTo(
        images.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featuredCollection.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-20" ref={containerRef}>
      <div
        className="relative h-[70vh] min-h-[500px] mb-12 overflow-hidden rounded-lg"
        ref={imageRef}
      >
        <Image
          src={featuredCollection.coverImage || "/images/hero-img.jpeg"}
          alt={featuredCollection.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-2xl text-center text-white" ref={textRef}>
            <h2 className="font-serif text-3xl md:text-5xl mb-4">
              {featuredCollection.title}
            </h2>
            <p className="text-lg mb-6">{featuredCollection.description}</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href={`/collections/${featuredCollection.id}`}>
                Explore Collection
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={imagesRef}>
        {featuredCollection.images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-[3/4] overflow-hidden rounded-lg transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-70"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${featuredCollection.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

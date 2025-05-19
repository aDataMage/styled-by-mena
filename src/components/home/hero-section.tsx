"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!container || !text || !image) return;

    // Create a GSAP context for easy cleanup
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([image, container, text.children], {
        opacity: 0,
      });
      gsap.set(image, {
        scale: 1.2,
        filter: "grayscale(0%)",
      });

      // Initial animation timeline
      const initTl = gsap.timeline();
      initTl
        .to(image, {
          scale: 1,
          opacity: 1,
          filter: "grayscale(70%) contrast(1.2) blur(5px)",
          duration: 1.2,
          ease: "power2.out",
        })
        .to(
          container,
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .to(
          text.children,
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Scroll-triggered animations
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      scrollTl
        .to(text, {
          y: -100,
          opacity: 0,
        })
        .to(
          image,
          {
            scale: 1.2,
            filter: "grayscale(70%) contrast(1.2) blur(5px)",
          },
          0
        )
        .to(
          container,
          {
            scale: 0.8,
          },
          0
        );
    }, container); // <- Scope selector

    return () => ctx.revert(); // <- Cleanup
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      <Image
        ref={imageRef}
        src="/images/hero-img.jpeg?height=800&width=1920"
        alt="Elegant woman in minimalist fashion"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white" ref={textRef}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
            Timeless Elegance for the Modern Woman
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Discover our curated collection of sustainable, minimalist fashion
            designed to elevate your everyday style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 dark:bg-primary dark:text-white"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (section && image && content) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      tl.fromTo(
        image,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      tl.fromTo(
        content.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-50/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] overflow-hidden" ref={imageRef}>
            <Image
              src="/images/brand.jpg?height=1000&width=800"
              alt="Brand founder in studio"
              fill
              className="object-cover"
            />
          </div>

          <div ref={contentRef}>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2018, Styled By Mena was born from a desire to create
              timeless, versatile pieces that transcend seasonal trends. Our
              founder, Mena Osiro, envisioned a brand that would embody the
              perfect balance between minimalist design and luxurious quality.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Every Styled By Mena piece is thoughtfully designed in our Paris
              atelier and ethically crafted using sustainable materials. We
              believe in slow fashion and creating garments that will be
              treasured for years to come.
            </p>
            <Link
              href="/about"
              className="inline-block border-b border-black pb-1 text-sm hover:opacity-70 hover:text-accent-gold transition-all"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

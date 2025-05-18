"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BrandStoryFull() {
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
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      tl.fromTo(
        content.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="relative h-[500px] overflow-hidden rounded-lg"
          ref={imageRef}
        >
          <Image
            src="/placeholder.svg?height=1000&width=800"
            alt="Styled By Mena atelier in Paris"
            fill
            className="object-cover"
          />
        </div>

        <div ref={contentRef} className="space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl">The Beginning</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Styled By Mena was founded in 2018 by Emma Laurent, a former fashion
            editor with a vision to create a brand that embodied the perfect
            balance between minimalist design and luxurious quality. After years
            of witnessing the industry's focus on fast fashion and trend cycles,
            Emma sought to create something different—a brand that celebrated
            timeless elegance and conscious consumption.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The journey began in a small atelier in Paris, where Emma and a
            small team of skilled artisans created the first Styled By Mena
            collection. Inspired by the clean lines of modernist architecture
            and the timeless elegance of Parisian style, the collection quickly
            gained recognition for its refined simplicity and exceptional
            craftsmanship.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Today, Styled By Mena has grown into a respected name in the fashion
            industry, known for creating versatile, high-quality pieces that
            transcend seasonal trends. While we've expanded, our core philosophy
            remains unchanged: to create thoughtfully designed garments that
            women will treasure for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}

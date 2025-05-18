"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FounderSection() {
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
        content.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        image,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 md:py-16 " ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={contentRef} className="space-y-6 order-2 md:order-1">
          <h2 className="font-serif text-2xl md:text-3xl">Meet Our Founder</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Emma Laurent's journey in fashion began long before Styled By Mena.
            Born and raised in Paris to a seamstress mother and architect
            father, Emma developed an early appreciation for both craftsmanship
            and design. After studying fashion design at École de la Chambre
            Syndicale and working as a fashion editor for several prestigious
            publications, Emma gained a unique perspective on the industry.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            "I wanted to create pieces that weren't defined by seasons or
            trends, but by their quality and timelessness," Emma explains.
            "Garments that would become the foundation of a woman's wardrobe for
            years, not just months."
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            This philosophy guides Emma's approach to design. Each Styled By
            Mena collection is thoughtfully curated, with every piece designed
            to complement those that came before. The result is a cohesive
            wardrobe that evolves gracefully over time, rather than being
            replaced with each new season.
          </p>
          <div className="pt-2">
            <p className="italic text-gray-700 dark:text-gray-400">
              "Fashion should serve the woman, not the other way around."
            </p>
            <p className="text-sm text-gray-500 mt-1">
              — Emma Laurent, Founder
            </p>
          </div>
        </div>

        <div
          className="relative h-[600px] overflow-hidden rounded-lg order-1 md:order-2"
          ref={imageRef}
        >
          <Image
            src="/placeholder.svg?height=1200&width=800"
            alt="Emma Laurent, Founder of Styled By Mena"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

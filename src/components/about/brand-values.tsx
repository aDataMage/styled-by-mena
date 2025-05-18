"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
  {
    title: "Timeless Design",
    description:
      "We create pieces that transcend seasonal trends, focusing on clean lines, thoughtful details, and versatile silhouettes that remain relevant year after year.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every Styled By Mena garment is meticulously crafted using traditional techniques and premium materials, ensuring exceptional quality and longevity.",
  },
  {
    title: "Conscious Production",
    description:
      "We produce in small batches with carefully selected partners who share our commitment to ethical manufacturing and fair labor practices.",
  },
  {
    title: "Sustainable Materials",
    description:
      "We prioritize natural, renewable, and recycled materials that minimize environmental impact while maximizing comfort and durability.",
  },
];

export function BrandValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const valueItems = valuesRef.current;

    if (section && heading && valueItems) {
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

      gsap.fromTo(
        valueItems.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valueItems,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="text-center mb-12" ref={headingRef}>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Our Values</h2>
        <p className="text-gray-600  max-w-2xl mx-auto">
          At Styled By Mena, our values guide every decision we make, from
          design to production to customer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={valuesRef}>
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-accent-gold/70 p-8 rounded-lg"
          >
            <h3 className="font-serif text-xl mb-3">{value.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

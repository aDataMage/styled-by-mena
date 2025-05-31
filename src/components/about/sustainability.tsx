"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Sustainability() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (section && heading && content && image) {
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
        content.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        image,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
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
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          Our Commitment to Sustainability
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sustainability isn't just a buzzword at Mena's Atelier—it's woven into
          the fabric of everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={contentRef} className="space-y-6">
          <div>
            <h3 className="font-serif text-xl mb-3">Materials</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We carefully select materials that minimize environmental impact
              while maximizing quality and longevity. From organic cotton and
              linen to recycled cashmere and responsibly sourced wool, every
              fiber is chosen with purpose.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-3">Production</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We work with small, family-owned factories and artisan workshops
              that share our values. By producing in limited quantities and
              made-to-order when possible, we minimize waste and ensure the
              highest quality standards.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-3">Packaging & Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All Mena's Atelier packaging is plastic-free and made from
              recycled and recyclable materials. We offset carbon emissions from
              shipping through verified environmental projects.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-3">Circularity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Through our Mena's Atelier Renewal program, we offer repair
              services to extend the life of your garments and recycling options
              for pieces that can no longer be worn, ensuring nothing goes to
              waste.
            </p>
          </div>
        </div>

        <div
          className="relative h-[600px] overflow-hidden rounded-lg"
          ref={imageRef}
        >
          <Image
            src="/placeholder.svg?height=1200&width=800"
            alt="Sustainable fabric production for Mena's Atelier"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

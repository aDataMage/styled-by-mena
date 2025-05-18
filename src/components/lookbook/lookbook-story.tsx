"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShopTheLook } from "@/components/lookbook/shop-the-look";

interface LookbookImage {
  src: string;
  alt: string;
  productIds: string[];
}

interface LookbookStoryProps {
  story: {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    images: LookbookImage[];
  };
}

export function LookbookStory({ story }: LookbookStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const header = headerRef.current;
    const images = imagesRef.current.filter(Boolean);

    if (container && header && images.length) {
      // Clear any existing animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Animate header
      gsap.fromTo(
        header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Animate each image with staggered timing and parallax
      images.forEach((image, index) => {
        // Create a timeline for each image
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        // Image reveal animation
        tl.fromTo(
          image,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
          }
        );

        // Parallax effect for the image
        const parallaxElement = image?.querySelector(".image-parallax");
        if (parallaxElement) {
          gsap.to(parallaxElement, {
            y: "-10%",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [story.id]);

  return (
    <div ref={containerRef}>
      <div className="text-center mb-12" ref={headerRef}>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{story.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{story.description}</p>
      </div>

      <div className="space-y-24">
        {story.images.map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
            className={`relative ${index % 2 === 0 ? "" : "md:text-right"}`}
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-lg aspect-[3/4] ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="image-parallax absolute inset-0 h-[110%]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <ShopTheLook productIds={image.productIds} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

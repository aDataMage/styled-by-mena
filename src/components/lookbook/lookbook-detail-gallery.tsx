"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShopTheLook } from "@/components/lookbook/shop-the-look";

interface LookbookImage {
  src: string;
  alt: string;
  caption: string;
  productIds: string[];
}

interface LookbookDetailGalleryProps {
  images: LookbookImage[];
}

export function LookbookDetailGallery({ images }: LookbookDetailGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const imageElements = imageRefs.current.filter(Boolean);
    const captionElements = captionRefs.current.filter(Boolean);

    if (container && imageElements.length && captionElements.length) {
      // Clear any existing animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Animate each image with staggered timing and parallax
      imageElements.forEach((image, index) => {
        const caption = captionElements[index];

        // Create a timeline for each image-caption pair
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        // Image reveal animation
        tl.fromTo(
          image,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        // Caption animation
        if (caption) {
          tl.fromTo(
            caption,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }

        // Parallax effect for the image
        if (image) {
          gsap.to(image.querySelector(".image-parallax"), {
            y: "-15%",
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
  }, [images]);

  return (
    <div ref={containerRef} className="space-y-32">
      {images.map((image, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={`relative overflow-hidden rounded-lg ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="aspect-[4/5] relative">
              <div className="image-parallax absolute inset-0 h-[115%]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              ref={(el) => {
                captionRefs.current[index] = el;
              }}
              className="mt-4 text-sm text-gray-600 italic"
            >
              {image.caption}
            </div>
          </div>

          <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
            <ShopTheLook productIds={image.productIds} />
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionGalleryProps {
  images: string[];
  title: string;
}

export function CollectionGallery({ images, title }: CollectionGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const gallery = galleryRef.current;

    if (section && heading && gallery) {
      gsap.fromTo(
        heading,
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

      // Initial animation for the first visible images
      imageRefs.current.forEach((ref, index) => {
        if (ref && index < 3) {
          gsap.fromTo(
            ref,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
              },
            }
          );
        }
      });
    }
  }, []);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    animateImageTransition(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    animateImageTransition(prevIndex);
    setCurrentIndex(prevIndex);
  };

  const animateImageTransition = (newIndex: number) => {
    const currentImageRef = imageRefs.current[currentIndex];
    const nextImageRef = imageRefs.current[newIndex];

    if (currentImageRef && nextImageRef) {
      // Animate out current image
      gsap.to(currentImageRef, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });

      // Animate in next image
      gsap.fromTo(
        nextImageRef,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }
  };

  // Determine which images to show based on current index
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % images.length,
    (currentIndex + 2) % images.length,
  ];

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="text-center mb-10" ref={headingRef}>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Lookbook</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the visual story of our {title} collection through our
          lookbook imagery.
        </p>
      </div>

      <div className="relative" ref={galleryRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`relative aspect-[3/4] overflow-hidden rounded-lg transition-opacity duration-500 ${
                visibleIndices.includes(index) ? "block" : "hidden"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} Lookbook - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const timelineEvents = [
  {
    year: "2018",
    title: "Styled By Mena is Founded",
    description:
      "Emma Laurent establishes Styled By Mena in Paris with a small team of artisans, launching the first collection of 12 essential pieces.",
  },
  {
    year: "2019",
    title: "First Flagship Store",
    description:
      "Styled By Mena opens its first flagship store in the Marais district of Paris, designed to reflect the brand's minimalist aesthetic.",
  },
  {
    year: "2020",
    title: "Sustainable Materials Initiative",
    description:
      "Styled By Mena commits to using only sustainable and ethically sourced materials across all collections, partnering with certified suppliers.",
  },
  {
    year: "2021",
    title: "International Expansion",
    description:
      "The brand expands to international markets with e-commerce shipping to 30+ countries and retail partnerships in major cities.",
  },
  {
    year: "2022",
    title: "Artisan Collaboration Program",
    description:
      "Styled By Mena launches a program supporting traditional craftsmanship, collaborating with artisans from around the world.",
  },
  {
    year: "2023",
    title: "Circular Fashion Commitment",
    description:
      "Introduction of the Styled By Mena Renewal program, offering repair services and recycling options for all Styled By Mena garments.",
  },
  {
    year: "2024",
    title: "Carbon Neutral Certification",
    description:
      "Styled By Mena achieves carbon neutrality across all operations through reduction initiatives and carefully selected offset programs.",
  },
  {
    year: "2025",
    title: "Looking Forward",
    description:
      "With a growing community and expanding collection, Styled By Mena continues its commitment to timeless design and responsible fashion.",
  },
];

export function BrandTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;

    if (section && heading && timeline && progressLine) {
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

      // Animate the progress line as user scrolls
      gsap.fromTo(
        progressLine,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      // Animate each timeline item
      const timelineItems = timeline.children;
      Array.from(timelineItems).forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <div className="text-center mb-12" ref={headingRef}>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">Our Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto ">
          From our humble beginnings to where we are today, explore the key
          milestones that have shaped Styled By Mena.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline progress line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 -z">
          <div
            ref={progressLineRef}
            className="absolute top-0 bottom-0 w-full bg-black dark:bg-accent-gold"
          ></div>
        </div>

        <div className="relative space-y-12" ref={timelineRef}>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center ${
                index === timelineEvents.length - 1 ? "pb-0" : "pb-8"
              }`}
            >
              {/* Content positioning based on even/odd */}
              <div
                className={`md:text-right ${
                  index % 2 === 0
                    ? "md:col-start-1"
                    : "md:col-start-3 md:order-3"
                }`}
              >
                <div
                  className={`bg-white dark:bg-accent-gold/70  p-6 rounded-lg shadow-sm ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  }`}
                >
                  <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Year marker */}
              <div className="flex justify-center items-center md:col-start-2 md:order-2">
                <div className="bg-black text-white font-medium py-1 px-3 rounded-full text-sm z-10">
                  {event.year}
                </div>
              </div>

              {/* Empty column for layout */}
              <div
                className={`hidden md:block ${
                  index % 2 === 0
                    ? "md:col-start-3 md:order-3"
                    : "md:col-start-1"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

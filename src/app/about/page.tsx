import { BrandStoryFull } from "@/components/about/brand-story-full";
import { FounderSection } from "@/components/about/founder-section";
import { BrandValues } from "@/components/about/brand-values";
import { BrandTimeline } from "@/components/about/brand-timeline";
import { Sustainability } from "@/components/about/sustainability";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Our Story | Mena's Atelier",
  description:
    "Discover the story, values, and journey behind Mena's Atelier - a modern fashion brand committed to timeless elegance and sustainability.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded on principles of timeless design and sustainable
            craftsmanship, Mena's Atelier represents the perfect balance between
            elegance and responsibility.
          </p>
        </div>

        <BrandStoryFull />
        <FounderSection />
        <BrandValues />
        <BrandTimeline />
        <Sustainability />
      </div>
    </PageTransition>
  );
}

import { CollectionsGrid } from "@/components/collections/collections-grid";
import { FeaturedCollection } from "@/components/collections/featured-collection";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Collections | Mena's Atelier",
  description:
    "Explore our seasonal and thematic collections, each telling a unique story through timeless design.",
};

export default function CollectionsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Our Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each Mena's Atelier collection tells a unique story, inspired by
            art, architecture, and the modern woman's evolving lifestyle.
          </p>
        </div>

        <FeaturedCollection />
        <CollectionsGrid />
      </div>
    </PageTransition>
  );
}

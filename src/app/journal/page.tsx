import { JournalFeatured } from "@/components/journal/journal-featured";
import { JournalGrid } from "@/components/journal/journal-grid";
import { JournalCategories } from "@/components/journal/journal-categories";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Journal | Mena's Atelier",
  description:
    "Explore our journal for style advice, sustainable fashion education, and behind-the-scenes features.",
};

export default function JournalPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Journal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of articles on style, sustainability,
            and the stories behind our brand.
          </p>
        </div>

        <JournalFeatured />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 mt-20">
          <JournalGrid />
          <div className="space-y-12">
            <JournalCategories />
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl mb-4">
                Subscribe to Our Journal
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with our latest articles, style advice, and
                exclusive content.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

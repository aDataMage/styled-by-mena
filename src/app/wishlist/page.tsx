import { WishlistContent } from "@/components/wishlist/wishlist-content";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Wishlist | Mena's Atelier",
  description:
    "View and manage your saved items in your Mena's Atelier wishlist.",
};

export default function WishlistPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Your Wishlist
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Keep track of your favorite pieces and revisit them anytime.
          </p>
        </div>

        <WishlistContent />
      </div>
    </PageTransition>
  );
}

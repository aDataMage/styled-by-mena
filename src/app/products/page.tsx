import { ProductsGrid } from "@/components/products/products-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Shop All Products | Styled By Mena",
  description:
    "Browse our collection of timeless, sustainable fashion pieces designed for the modern woman.",
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of timeless pieces designed with
            intention and crafted to last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <ProductFilters />
          <ProductsGrid />
        </div>
      </div>
    </PageTransition>
  );
}

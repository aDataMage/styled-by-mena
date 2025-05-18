import { ProductCard } from "@/components/products/product-card";

// Mock data for related products
const relatedProducts = [
  {
    id: "2",
    name: "Oversized Wool Blazer",
    price: 245,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#D3D3D3"],
    isNew: false,
  },
  {
    id: "3",
    name: "High-Waisted Trousers",
    price: 165,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#000000", "#F5F5DC", "#808080"],
    isNew: true,
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 210,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#D3D3D3", "#000000", "#F5F5DC"],
    isNew: false,
  },
  {
    id: "5",
    name: "Linen Button-Up Shirt",
    price: 120,
    images: ["/placeholder.svg?height=600&width=480"],
    colors: ["#FFFFFF", "#F5F5DC", "#D3D3D3"],
    isNew: true,
  },
];

interface RelatedProductsProps {
  currentProductId: string;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product
  const filteredProducts = relatedProducts.filter(
    (product) => product.id !== currentProductId
  );

  const handleAddToFavorites = (id: string) => {
    // Implementation for adding to favorites
    console.log(`Added product ${id} to favorites`);
  };

  return (
    <section>
      <h2 className="font-serif text-2xl mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

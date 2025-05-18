import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductInfo } from "@/components/products/product-info";
import { RelatedProducts } from "@/components/products/related-products";
import { ContactAlternative } from "@/components/whatsapp/contact-alternative";
import { PageTransition } from "@/components/ui/page-transition";

// Mock function to get product data
async function getProduct(id: string) {
  // In a real app, this would fetch from an API or database
  const products = {
    "1": {
      id: "1",
      name: "Silk Slip Dress",
      price: 189,
      description:
        "Our signature slip dress crafted from 100% silk charmeuse. Features adjustable straps and a bias cut that elegantly skims the body. Versatile enough to be dressed up or down for any occasion.",
      details: [
        "Made from 100% silk charmeuse",
        "Bias cut for a flattering drape",
        "Adjustable straps",
        "Side slit for ease of movement",
        "Midi length",
      ],
      care: "Dry clean only. Cool iron if needed. Do not bleach.",
      images: [
        "/placeholder.svg?height=900&width=720",
        "/placeholder.svg?height=900&width=720",
        "/placeholder.svg?height=900&width=720",
        "/placeholder.svg?height=900&width=720",
      ],
      colors: [
        { name: "Ivory", value: "#F5F5DC" },
        { name: "Black", value: "#000000" },
        { name: "Grey", value: "#D3D3D3" },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "Silk",
      sustainability:
        "Made in small batches to minimize waste. We work with certified ethical manufacturers.",
    },
  };

  return products[id as keyof typeof products];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | Styled By Mena",
    };
  }

  return {
    title: `${product.name} | Styled By Mena`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-black">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ProductGallery images={product.images} name={product.name} />
          <div>
            <ProductInfo product={product} />
            <div className="mt-8">
              <ContactAlternative productName={product.name} />
            </div>
          </div>
        </div>

        <RelatedProducts currentProductId={product.id} />
      </div>
    </PageTransition>
  );
}

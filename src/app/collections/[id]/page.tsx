import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionHero } from "@/components/collections/collection-hero";
import { CollectionStory } from "@/components/collections/collection-story";
import { CollectionGallery } from "@/components/collections/collection-gallery";
import { CollectionProducts } from "@/components/collections/collection-products";
import { PageTransition } from "@/components/ui/page-transition";

// Update the getCollection function to include data for all collections
async function getCollection(id: string) {
  // In a real app, this would fetch from an API or database
  const collections = {
    "summer-2025": {
      id: "summer-2025",
      title: "Summer Solstice 2025",
      subtitle: "A celebration of light and warmth",
      description:
        "Our Summer Solstice collection celebrates the season's golden light and languid days. Featuring lightweight linens, fluid silks, and organic cotton in a palette inspired by sun-drenched landscapes.",
      story:
        "Inspired by the Mediterranean coastline, Summer Solstice embraces the essence of sun-soaked days and balmy evenings. The collection draws from the rich textures and colors of coastal villages, ancient stone architecture, and the crystalline waters of hidden coves.\n\nDesigned for versatility and ease, each piece transitions effortlessly from beach to dinner, city to seaside. The palette—terracotta, sand, azure, and sun-bleached white—evokes the timeless beauty of Mediterranean summers.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Organic linen",
        "Silk charmeuse",
        "GOTS-certified cotton",
        "Tencel™ lyocell",
      ],
      inspiration: [
        "Mediterranean architecture",
        "Coastal landscapes",
        "Summer light",
        "Vintage vacation photography",
      ],
      season: "Summer 2025",
      productIds: ["1", "3", "5", "7"],
    },
    "resort-2025": {
      id: "resort-2025",
      title: "Resort Escape 2025",
      subtitle: "Effortless elegance for warm-weather getaways",
      description:
        "Versatile pieces designed for warm-weather getaways, featuring breathable linens and flowing silks in a palette of ocean blues and sandy neutrals.",
      story:
        "Resort Escape draws inspiration from the world's most beautiful coastal destinations, from the Amalfi Coast to the islands of Greece. This collection embodies the relaxed sophistication of resort living, with pieces that transition seamlessly from beachside to evening soirées.\n\nEach garment is crafted from natural, breathable fabrics that embrace the body while allowing freedom of movement. The color palette—azure blues, crisp whites, and warm neutrals—evokes the meeting of sea and shore.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Italian linen",
        "Silk georgette",
        "Organic cotton poplin",
        "Sustainable viscose",
      ],
      inspiration: [
        "Mediterranean resorts",
        "Coastal architecture",
        "Vintage riviera style",
        "Ocean horizons",
      ],
      season: "Resort 2025",
      productIds: ["1", "5", "7", "8"],
    },
    "spring-2025": {
      id: "spring-2025",
      title: "Spring Awakening 2025",
      subtitle: "A fresh perspective on seasonal renewal",
      description:
        "A celebration of renewal with lightweight fabrics in a palette of soft pastels and earth tones, inspired by blossoming gardens and new beginnings.",
      story:
        "Spring Awakening is our ode to the season of renewal and rebirth. This collection draws inspiration from the delicate beauty of early spring gardens, with their first blooms and fresh greenery emerging from winter's rest.\n\nThe silhouettes are soft and fluid, allowing for movement and embracing the body with gentle draping. Our palette of sage green, blush pink, lavender, and warm neutrals reflects the subtle colors of nature's awakening.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Organic cotton",
        "Linen blends",
        "Recycled polyester",
        "Bamboo jersey",
      ],
      inspiration: [
        "Spring gardens",
        "Botanical illustrations",
        "Morning light",
        "Natural textures",
      ],
      season: "Spring 2025",
      productIds: ["2", "4", "5", "8"],
    },
    "winter-2024": {
      id: "winter-2024",
      title: "Winter Solitude 2024",
      subtitle: "Embracing the quiet beauty of winter",
      description:
        "Luxurious layers in rich textures and deep hues, designed to provide warmth and elegance during the coldest months.",
      story:
        "Winter Solitude explores the quiet introspection that winter brings, with its shortened days and long, contemplative nights. This collection celebrates the beauty found in stillness and the comfort of luxurious layers.\n\nInspired by snow-covered landscapes and the play of light on ice, the pieces feature rich textures and substantial fabrics that cocoon the body. The color palette draws from winter's subtle spectrum—deep navy, charcoal, ivory, and touches of silver—creating a sense of serene sophistication.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Merino wool",
        "Cashmere",
        "Organic cotton velvet",
        "Recycled down",
      ],
      inspiration: [
        "Snow-covered landscapes",
        "Winter light",
        "Scandinavian design",
        "Minimalist architecture",
      ],
      season: "Winter 2024",
      productIds: ["2", "4", "6", "8"],
    },
    "fall-2024": {
      id: "fall-2024",
      title: "Autumn Palette 2024",
      subtitle: "The rich textures and colors of the changing season",
      description:
        "Inspired by changing leaves, this collection features warm tones and transitional pieces that embrace the beauty of autumn.",
      story:
        "Autumn Palette draws inspiration from the rich tapestry of colors that define the fall season. As leaves transform from green to gold, rust, and burgundy, so too does our collection embrace these warm, earthy hues.\n\nThe pieces are designed for layering, with varying weights and textures that can be adapted to the fluctuating temperatures of autumn. Structured silhouettes are softened with fluid fabrics, creating a balance that mirrors the season's dual nature of vibrancy and approaching quietude.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Wool blends",
        "Organic corduroy",
        "Recycled cashmere",
        "Japanese cotton",
      ],
      inspiration: [
        "Autumn foliage",
        "Harvest landscapes",
        "Vintage academia",
        "Forest textures",
      ],
      season: "Fall 2024",
      productIds: ["2", "3", "6", "7"],
    },
    essentials: {
      id: "essentials",
      title: "Styled By Mena Essentials",
      subtitle: "Timeless staples for the modern wardrobe",
      description:
        "Our permanent collection of timeless staples that form the foundation of a considered wardrobe, designed to last for years.",
      story:
        "Styled By Mena Essentials represents the core of our design philosophy—timeless pieces that transcend seasons and trends. This permanent collection features the foundational garments that every thoughtful wardrobe should include.\n\nEach piece is meticulously crafted from the highest quality materials and designed with a focus on versatility and longevity. The silhouettes are clean and classic, with subtle details that elevate them beyond the ordinary. In a palette of neutrals with occasional muted tones, these pieces are designed to work seamlessly together and with items from our seasonal collections.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: ["Egyptian cotton", "Italian wool", "Silk", "Japanese denim"],
      inspiration: [
        "Architectural minimalism",
        "Timeless elegance",
        "Functional design",
        "Quality craftsmanship",
      ],
      season: "Permanent Collection",
      productIds: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    "limited-edition": {
      id: "limited-edition",
      title: "Artisan Collaboration",
      subtitle: "Limited edition pieces created with master craftspeople",
      description:
        "Limited edition pieces created in partnership with master craftspeople from around the world, celebrating traditional techniques.",
      story:
        "Our Artisan Collaboration collection celebrates the rich heritage of global craftsmanship through partnerships with master artisans from diverse cultural traditions. Each piece in this limited edition collection tells a story of skill passed down through generations.\n\nWorking closely with weavers, embroiderers, and textile artists, we've created garments that honor traditional techniques while embracing contemporary design. The result is a collection of unique pieces that carry the imprint of human hands and cultural heritage, offering a meaningful alternative to mass production.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      gallery: [
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      materials: [
        "Hand-woven textiles",
        "Natural dyes",
        "Artisanal embroidery",
        "Heritage techniques",
      ],
      inspiration: [
        "Global craft traditions",
        "Cultural heritage",
        "Artisanal techniques",
        "Human connection",
      ],
      season: "Limited Edition",
      productIds: ["1", "4", "6", "8"],
    },
  };

  return collections[id as keyof typeof collections];
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const collection = await getCollection(params.id);

  if (!collection) {
    return {
      title: "Collection Not Found | Styled By Mena",
    };
  }

  return {
    title: `${collection.title} | Styled By Mena Collections`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const collection = await getCollection(params.id);

  if (!collection) {
    notFound();
  }

  return (
    <PageTransition>
      <div>
        <CollectionHero collection={collection} />

        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/collections" className="hover:text-black">
                Collections
              </Link>
              <span className="mx-2">/</span>
              <span className="text-black">{collection.title}</span>
            </nav>
          </div>

          <CollectionStory collection={collection} />
          <CollectionGallery
            images={collection.gallery}
            title={collection.title}
          />
          <CollectionProducts
            productIds={collection.productIds}
            collectionTitle={collection.title}
          />
        </div>
      </div>
    </PageTransition>
  );
}

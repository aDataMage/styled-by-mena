import Link from "next/link";
import { notFound } from "next/navigation";
import { LookbookDetailHero } from "@/components/lookbook/lookbook-detail-hero";
import { LookbookDetailGallery } from "@/components/lookbook/lookbook-detail-gallery";
import { PageTransition } from "@/components/ui/page-transition";

// Mock function to get lookbook data
async function getLookbook(id: string) {
  // In a real app, this would fetch from an API or database
  const lookbooks = {
    "urban-minimalism": {
      id: "urban-minimalism",
      title: "Urban Minimalism",
      subtitle:
        "Clean lines and architectural inspiration meet the energy of the city",
      description:
        "Urban Minimalism explores the intersection of architectural precision and urban energy. Set against the backdrop of the city's geometric landscapes, this editorial showcases structured silhouettes and monochromatic palettes that echo the surrounding environment.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      images: [
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Model in minimalist outfit against urban backdrop",
          caption:
            "Structured silhouettes create a dialogue with the urban landscape",
          productIds: ["2", "7"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Architectural details with model in structured silhouette",
          caption:
            "Clean lines and precise tailoring reflect architectural influences",
          productIds: ["3", "6"],
        },
        {
          src: "/placeholder.svg?height=800&width=1200",
          alt: "Urban landscape with model in monochromatic outfit",
          caption: "Monochromatic palettes echo the city's geometric forms",
          productIds: ["1", "4"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Model in tailored pieces against concrete background",
          caption:
            "Minimalist accessories complement rather than compete with the garments",
          productIds: ["5", "8"],
        },
      ],
    },
    "coastal-serenity": {
      id: "coastal-serenity",
      title: "Coastal Serenity",
      subtitle:
        "Fluid silhouettes and natural textures inspired by the Mediterranean coast",
      description:
        "Coastal Serenity captures the essence of Mediterranean living through flowing fabrics and a sun-bleached palette. This editorial embraces the interplay of light and movement, with garments that respond to the coastal breeze and embody relaxed sophistication.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      images: [
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Model in flowing dress by the sea",
          caption: "Lightweight fabrics move with the coastal breeze",
          productIds: ["1", "5"],
        },
        {
          src: "/placeholder.svg?height=800&width=1200",
          alt: "Beachside scene with model in linen ensemble",
          caption:
            "Natural textures reflect the organic beauty of the shoreline",
          productIds: ["3", "7"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Model in light layers against coastal backdrop",
          caption:
            "Layered pieces in breathable fabrics for versatile resort wear",
          productIds: ["2", "8"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Sunset scene with model in resort wear",
          caption:
            "The warm glow of sunset complements the collection's earthy palette",
          productIds: ["4", "6"],
        },
      ],
    },
    "timeless-elegance": {
      id: "timeless-elegance",
      title: "Timeless Elegance",
      subtitle:
        "Classic silhouettes reimagined for the modern woman with a focus on craftsmanship",
      description:
        "Timeless Elegance celebrates the enduring appeal of classic design through a contemporary lens. This editorial highlights the meticulous craftsmanship and thoughtful details that elevate Styled By Mena's pieces beyond trends, creating garments that will be treasured for years to come.",
      heroImage: "/placeholder.svg?height=1080&width=1920",
      images: [
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Model in tailored suit in historic setting",
          caption:
            "Traditional tailoring techniques reimagined for the modern wardrobe",
          productIds: ["2", "6"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Close-up of detailed craftsmanship on garment",
          caption:
            "Meticulous attention to detail reveals the artistry behind each piece",
          productIds: ["1", "8"],
        },
        {
          src: "/placeholder.svg?height=800&width=1200",
          alt: "Model in evening wear in elegant interior",
          caption: "Timeless silhouettes that transcend seasonal trends",
          productIds: ["3", "5"],
        },
        {
          src: "/placeholder.svg?height=1200&width=800",
          alt: "Classic silhouette against architectural backdrop",
          caption:
            "The dialogue between historical reference and contemporary design",
          productIds: ["4", "7"],
        },
      ],
    },
  };

  return lookbooks[id as keyof typeof lookbooks];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const lookbook = await getLookbook(resolvedParams.id);

  if (!lookbook) {
    return {
      title: "Lookbook Not Found | Styled By Mena",
    };
  }

  return {
    title: `${lookbook.title} | Styled By Mena Lookbook`,
    description: lookbook.description,
  };
}

export default async function LookbookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const lookbook = await getLookbook(resolvedParams.id);

  if (!lookbook) {
    notFound();
  }

  return (
    <PageTransition>
      <div>
        <LookbookDetailHero lookbook={lookbook} />

        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/lookbook" className="hover:text-black">
                Lookbook
              </Link>
              <span className="mx-2">/</span>
              <span className="text-black">{lookbook.title}</span>
            </nav>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              {lookbook.description}
            </p>
          </div>

          <LookbookDetailGallery images={lookbook.images} />
        </div>
      </div>
    </PageTransition>
  );
}

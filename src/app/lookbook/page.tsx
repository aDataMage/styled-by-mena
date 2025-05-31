import { LookbookHero } from "@/components/lookbook/lookbook-hero";
import { LookbookStories } from "@/components/lookbook/lookbook-stories";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Lookbook | Mena's Atelier",
  description:
    "Explore our visual stories and editorial photography showcasing Mena's Atelier's aesthetic and inspiration.",
};

export default function LookbookPage() {
  return (
    <PageTransition>
      <LookbookHero />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <LookbookStories />
      </div>
    </PageTransition>
  );
}

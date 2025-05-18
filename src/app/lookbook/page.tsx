import { LookbookHero } from "@/components/lookbook/lookbook-hero";
import { LookbookStories } from "@/components/lookbook/lookbook-stories";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Lookbook | Styled By Mena",
  description:
    "Explore our visual stories and editorial photography showcasing Styled By Mena's aesthetic and inspiration.",
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

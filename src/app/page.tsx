import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { BrandStory } from "@/components/home/brand-story";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { PageTransition } from "@/components/ui/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedCollection />
      <BrandStory />
      <NewsletterSignup />
    </PageTransition>
  );
}

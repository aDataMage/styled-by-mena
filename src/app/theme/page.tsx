import { ThemeShowcase } from "@/components/theme-showcase";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Theme Showcase | Styled By Mena",
  description:
    "Explore our elegant and prestigious theme designed with color psychology.",
};

export default function ThemePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <ThemeShowcase />
      </div>
    </PageTransition>
  );
}

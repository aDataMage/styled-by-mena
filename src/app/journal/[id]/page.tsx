import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/journal/article-content";
import { ArticleAuthor } from "@/components/journal/article-author";
import { RelatedArticles } from "@/components/journal/related-articles";
import { RelatedProducts } from "@/components/journal/related-products";
import { ArticleComments } from "@/components/journal/article-comments";
import { PageTransition } from "@/components/ui/page-transition";

// Mock function to get article data
async function getArticle(id: string) {
  // In a real app, this would fetch from an API or database
  const articles = {
    "sustainable-wardrobe": {
      id: "sustainable-wardrobe",
      title: "Building a Sustainable Wardrobe: Quality Over Quantity",
      excerpt:
        "Discover how investing in fewer, higher-quality pieces can reduce your environmental impact while elevating your personal style.",
      content: `
        <p>In a world of fast fashion and constant trend cycles, the concept of a sustainable wardrobe has emerged as both an ethical choice and a refined approach to personal style. At Mena's Atelier, we believe that building a wardrobe with intention is not only better for the planet but also leads to a more satisfying relationship with your clothing.</p>
        
        <h2>The Environmental Cost of Fast Fashion</h2>
        
        <p>The fashion industry is one of the world's largest polluters, responsible for approximately 10% of global carbon emissions and 20% of global wastewater. The rise of fast fashion has exacerbated these issues, with the average consumer now purchasing 60% more clothing items than they did 15 years ago, while keeping each garment for half as long.</p>
        
        <p>This cycle of constant consumption and disposal has devastating environmental consequences: textile waste in landfills, microplastic pollution from synthetic fabrics, excessive water usage, and chemical pollution from dyeing processes.</p>
        
        <h2>The Quality Investment</h2>
        
        <p>Investing in quality pieces means considering several factors beyond just the price tag:</p>
        
        <ul>
          <li><strong>Material quality:</strong> Natural fibers like organic cotton, linen, wool, and silk are not only more biodegradable than their synthetic counterparts but often become more beautiful with age.</li>
          <li><strong>Construction:</strong> Well-made garments with proper seam finishing, quality stitching, and thoughtful details will withstand years of wear.</li>
          <li><strong>Timeless design:</strong> Pieces with clean lines and classic silhouettes transcend seasonal trends and remain relevant year after year.</li>
          <li><strong>Versatility:</strong> Items that can be styled multiple ways and for various occasions offer more value and utility in your wardrobe.</li>
        </ul>
        
        <h2>Building Your Foundation</h2>
        
        <p>A sustainable wardrobe begins with foundational pieces that serve as the building blocks for countless outfits. These might include:</p>
        
        <ul>
          <li>A well-tailored blazer in a neutral tone</li>
          <li>High-quality white shirts in different silhouettes</li>
          <li>Perfectly fitting trousers in classic cuts</li>
          <li>A versatile dress that can be styled up or down</li>
          <li>Knitwear in premium natural fibers</li>
          <li>Thoughtfully crafted outerwear</li>
        </ul>
        
        <p>By investing in these core pieces, you create a versatile foundation that can be complemented by more seasonal or trend-driven items when desired.</p>
        
        <h2>The Cost Per Wear Calculation</h2>
        
        <p>When considering the value of a garment, we encourage thinking in terms of "cost per wear" rather than the initial price tag. A €300 coat worn 100 times over several years costs €3 per wear—often less expensive in the long run than a €50 coat that falls apart after 10 wears (€5 per wear).</p>
        
        <p>This calculation not only makes financial sense but also encourages a more thoughtful relationship with your clothing. When you invest in quality, you're more likely to care for your garments properly, further extending their lifespan.</p>
        
        <h2>Caring for Your Investment</h2>
        
        <p>Proper garment care is essential to a sustainable wardrobe. Simple practices can significantly extend the life of your clothing:</p>
        
        <ul>
          <li>Washing less frequently and at lower temperatures</li>
          <li>Air-drying when possible</li>
          <li>Proper folding and hanging techniques</li>
          <li>Addressing repairs promptly</li>
          <li>Seasonal storage to protect items when not in use</li>
        </ul>
        
        <h2>The Emotional Connection</h2>
        
        <p>Perhaps the most overlooked aspect of sustainable fashion is the emotional connection we form with well-made garments. Quality pieces often tell a story—they may be crafted by artisans using traditional techniques, made from materials with rich heritage, or simply accompany us through significant moments in our lives.</p>
        
        <p>This emotional resonance transforms clothing from disposable commodities into treasured possessions that we're more likely to keep, care for, and pass down—the ultimate form of sustainability.</p>
        
        <h2>A Journey, Not a Destination</h2>
        
        <p>Building a sustainable wardrobe is a gradual process, not an overnight transformation. It involves becoming more conscious of your consumption habits, understanding your personal style, and making intentional choices about the garments you bring into your life.</p>
        
        <p>At Mena's Atelier, we're committed to creating pieces that stand the test of time—both in their physical construction and their design aesthetic. We believe that true luxury lies not in constant newness, but in the enduring pleasure of wearing something made with integrity, intention, and care.</p>
      `,
      category: "Sustainability",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=800&width=1600",
      author: {
        name: "Mena Osiro",
        role: "Founder & Creative Director",
        image: "/placeholder.svg?height=200&width=200",
        bio: "Mena Osiro founded Mena's Atelier in 2018 after a decade in the fashion industry. With a background in sustainable textiles and design, she brings a unique perspective on conscious consumption and timeless style.",
      },
      relatedProductIds: ["2", "3", "5", "8"],
    },
    "capsule-wardrobe-essentials": {
      id: "capsule-wardrobe-essentials",
      title: "10 Timeless Pieces for Your Capsule Wardrobe",
      excerpt:
        "Discover the essential pieces that form the foundation of a versatile and enduring wardrobe that transcends seasonal trends.",
      content: `
        <p>The concept of a capsule wardrobe—a curated collection of versatile, timeless pieces that can be mixed and matched to create numerous outfits—has gained popularity as more people embrace mindful consumption. At Mena's Atelier, we believe in the power of well-chosen essentials that transcend trends and seasons. Here are ten foundational pieces that deserve a place in every considered wardrobe.</p>
        
        <h2>1. The Tailored Blazer</h2>
        
        <p>A well-cut blazer in a neutral tone (black, navy, or beige) instantly elevates any outfit. Look for quality construction with natural fiber content and a fit that allows for layering underneath. A single-breasted style with minimal details offers the most versatility across formal and casual settings.</p>
        
        <h2>2. The White Button-Up Shirt</h2>
        
        <p>The quintessential white shirt is a true wardrobe cornerstone. Opt for high-quality cotton with a weight that provides structure without transparency. Consider having two variations: one with a more relaxed fit for casual styling and one more tailored for professional settings.</p>
        
        <h2>3. The Perfect Trousers</h2>
        
        <p>A pair of well-fitting trousers in a classic cut forms the foundation of countless outfits. Choose a mid-weight wool blend for cooler months or a cotton-linen blend for warmer weather. A straight or slightly tapered leg in black, navy, or beige offers maximum versatility.</p>
        
        <h2>4. The Versatile Dress</h2>
        
        <p>A simple dress in a flattering silhouette can be styled for nearly any occasion. Look for a knee-length or midi style in a solid color that complements your skin tone. A-line or wrap styles tend to be universally flattering and timeless in their appeal.</p>
        
        <h2>5. The Quality Knitwear</h2>
        
        <p>Investment knitwear in natural fibers like merino wool, cashmere, or cotton provides both comfort and longevity. A crew neck or V-neck sweater in a neutral tone will pair effortlessly with everything from tailored trousers to casual denim.</p>
        
        <h2>6. The Elevated T-Shirt</h2>
        
        <p>The humble t-shirt becomes a capsule essential when crafted from quality materials with attention to fit. Look for organic cotton with a substantial weight and a cut that skims rather than clings to the body. White, black, and navy are perennial favorites.</p>
        
        <h2>7. The Perfect Denim</h2>
        
        <p>A pair of well-fitting jeans in a classic wash bridges the gap between casual and smart-casual dressing. Straight-leg or slim styles in a mid-blue wash offer the most versatility, while quality denim with minimal stretch will age more beautifully.</p>
        
        <h2>8. The Statement Coat</h2>
        
        <p>As the most visible layer during colder months, a beautifully crafted coat is worth the investment. Consider a wool or cashmere blend in a silhouette that accommodates layers underneath while maintaining a refined appearance. Camel, black, or navy will complement virtually any outfit.</p>
        
        <h2>9. The Silk Scarf</h2>
        
        <p>A silk scarf is the chameleon of accessories, transforming from neck adornment to handbag accent to hair accessory with ease. Choose a pattern and color palette that complements your wardrobe's core colors for maximum versatility.</p>
        
        <h2>10. The Leather Bag</h2>
        
        <p>A structured leather bag in a medium size strikes the perfect balance between functionality and elegance. Look for quality hardware, thoughtful interior organization, and a design that works across casual and formal contexts.</p>
        
        <h2>Building Around Your Essentials</h2>
        
        <p>With these ten pieces as your foundation, you can build a wardrobe that reflects your personal style while maintaining versatility and longevity. The key is to select items of the highest quality you can afford, in silhouettes that flatter your body and colors that harmonize with each other.</p>
        
        <p>Remember that a true capsule wardrobe evolves thoughtfully over time. Rather than acquiring everything at once, invest gradually in pieces that truly resonate with you and your lifestyle. Each addition should multiply your outfit possibilities rather than simply adding to your closet count.</p>
        
        <p>At Mena's Atelier, we design with this philosophy in mind, creating pieces that integrate seamlessly into a considered wardrobe while offering the quality and craftsmanship to become longtime companions in your style journey.</p>
      `,
      category: "Style Advice",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=800&width=1600",
      author: {
        name: "Sophie Moreau",
        role: "Style Director",
        image: "/placeholder.svg?height=200&width=200",
        bio: "Sophie Moreau brings over 15 years of experience in fashion styling and editorial direction. Her approach to personal style emphasizes quality, versatility, and authentic self-expression.",
      },
      relatedProductIds: ["1", "2", "3", "6"],
    },
  };

  return articles[id as keyof typeof articles];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.id);

  if (!article) {
    return {
      title: "Article Not Found | Mena's Atelier Journal",
    };
  }

  return {
    title: `${article.title} | Mena's Atelier Journal`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <PageTransition>
      <article>
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <nav className="flex text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/journal" className="hover:text-black">
                Journal
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/journal?category=${encodeURIComponent(
                  article.category
                )}`}
                className="hover:text-black"
              >
                {article.category}
              </Link>
            </nav>

            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-gray-600">{article.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{article.date}</span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>

              <ArticleAuthor author={article.author} />
            </div>
          </div>

          <ArticleContent content={article.content} />

          <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-gray-200">
            <ArticleAuthor author={article.author} showBio />
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <RelatedProducts productIds={article.relatedProductIds} />
          </div>

          <div className="max-w-3xl mx-auto mt-16 pt-16 border-t border-gray-200">
            <ArticleComments articleId={article.id} />
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <RelatedArticles
              currentArticleId={article.id}
              category={article.category}
            />
          </div>
        </div>
      </article>
    </PageTransition>
  );
}

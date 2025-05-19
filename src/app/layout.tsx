import type React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppProvider } from "@/contexts/whatsapp-context";
import { WishlistProvider } from "@/contexts/wishlist-context";
import { WhatsAppFloatingButton } from "@/components/whatsapp/whatsapp-floating-button";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Styled By Mena | Modern Fashion Brand",
  description:
    "Discover timeless elegance with our curated collection of modern fashion essentials.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <WhatsAppProvider>
            <WishlistProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                  <Analytics />
                </main>
                <Footer />
                <WhatsAppFloatingButton />
                <Toaster />
              </div>
            </WishlistProvider>
          </WhatsAppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

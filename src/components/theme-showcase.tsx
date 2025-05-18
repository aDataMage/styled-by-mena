"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ElegantCard } from "@/components/ui/elegant-card";
import { ThemeToggle } from "@/components/theme-toggle";

export function ThemeShowcase() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("colors");

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl">Theme Showcase</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our {theme === "dark" ? "dark" : "light"} theme is designed to convey
          elegance and prestige through careful color psychology.
        </p>
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <Button
          variant={activeTab === "colors" ? "default" : "outline"}
          onClick={() => setActiveTab("colors")}
        >
          Color Palette
        </Button>
        <Button
          variant={activeTab === "components" ? "default" : "outline"}
          onClick={() => setActiveTab("components")}
        >
          Components
        </Button>
      </div>

      {activeTab === "colors" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ColorCard
            name="Primary"
            colorClass="bg-primary text-primary-foreground"
          />
          <ColorCard
            name="Secondary"
            colorClass="bg-secondary text-secondary-foreground"
          />
          <ColorCard
            name="Accent"
            colorClass="bg-accent text-accent-foreground"
          />
          <ColorCard name="Gold" colorClass="bg-accent-gold text-black" />
          <ColorCard
            name="Burgundy"
            colorClass="bg-accent-burgundy text-white"
          />
          <ColorCard name="Emerald" colorClass="bg-accent-emerald text-white" />
          <ColorCard name="Navy" colorClass="bg-accent-navy text-white" />
          <ColorCard
            name="Background"
            colorClass="bg-background text-foreground border border-border"
          />
          <ColorCard name="Muted" colorClass="bg-muted text-muted-foreground" />
        </div>
      )}

      {activeTab === "components" && (
        <div className="space-y-8">
          <section className="space-y-4">
            <h3 className="font-serif text-xl">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              {/* <Button variant="gold">Gold</Button>
              <Button variant="burgundy">Burgundy</Button>
              <Button variant="emerald">Emerald</Button>
              <Button variant="navy">Navy</Button>
              <Button variant="elegant">Elegant</Button> */}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ElegantCard>
                <h4 className="font-serif text-lg mb-2">Standard Card</h4>
                <p className="text-muted-foreground text-sm">
                  Elegant and simple card with default styling.
                </p>
              </ElegantCard>

              <ElegantCard accent="gold">
                <h4 className="font-serif text-lg mb-2 gold-accent">
                  Gold Accent
                </h4>
                <p className="text-muted-foreground text-sm">
                  Card with gold accent border for luxury.
                </p>
              </ElegantCard>

              <ElegantCard accent="burgundy">
                <h4
                  className="font-serif text-lg mb-2"
                  style={{ color: "hsl(var(--accent-burgundy))" }}
                >
                  Burgundy Accent
                </h4>
                <p className="text-muted-foreground text-sm">
                  Card with burgundy accent for sophistication.
                </p>
              </ElegantCard>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl">Typography</h3>
            <div className="space-y-6 p-6 bg-card rounded-lg border border-border">
              <div>
                <h1 className="font-serif text-4xl mb-2">Elegant Heading 1</h1>
                <p className="text-muted-foreground">
                  Serif font for elegance and sophistication
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl mb-2">Refined Heading 2</h2>
                <p className="text-muted-foreground">
                  Serif font with proper tracking
                </p>
              </div>

              <div>
                <p className="mb-2">
                  Body text in a clean sans-serif font for optimal readability
                  while maintaining an elegant appearance.
                </p>
                <p className="text-muted-foreground text-sm">
                  Muted text for secondary information with proper hierarchy.
                </p>
              </div>

              <div>
                <p className="gold-accent">
                  Gold accent text for emphasis and luxury feel.
                </p>
                <p style={{ color: "hsl(var(--accent-burgundy))" }}>
                  Burgundy text for sophistication and depth.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function ColorCard({ name, colorClass }: { name: string; colorClass: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={`h-24 ${colorClass} flex items-center justify-center`}>
        <span className="font-medium">{name}</span>
      </div>
      <div className="p-4 bg-card">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">
          {colorClass.split(" ")[0].replace("bg-", "")}
        </p>
      </div>
    </div>
  );
}

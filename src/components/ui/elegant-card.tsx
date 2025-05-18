import type * as React from "react"
import { cn } from "@/lib/utils"

interface ElegantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "gold" | "burgundy" | "emerald" | "navy" | "none"
  hover?: boolean
}

export function ElegantCard({ className, accent = "none", hover = true, children, ...props }: ElegantCardProps) {
  const accentClasses = {
    gold: "border-accent-gold",
    burgundy: "border-accent-burgundy",
    emerald: "border-accent-emerald",
    navy: "border-accent-navy",
    none: "border-border",
  }

  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg border p-6 shadow-sm",
        accentClasses[accent],
        hover && "transition-all duration-300 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

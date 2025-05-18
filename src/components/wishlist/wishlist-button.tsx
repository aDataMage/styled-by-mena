"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist, type WishlistItem } from "@/contexts/wishlist-context"
import { cn } from "@/lib/utils"

interface WishlistButtonProps {
  product: WishlistItem
  variant?: "icon" | "default"
  className?: string
}

export function WishlistButton({ product, variant = "icon", className }: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const isActive = isInWishlist(product.id)

  const handleToggleWishlist = () => {
    if (isActive) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white",
          isActive && "opacity-100 text-accent-burgundy",
          className,
        )}
        onClick={handleToggleWishlist}
        aria-label={isActive ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={cn("h-4 w-4", isActive && "fill-current")} />
      </Button>
    )
  }

  return (
    <Button
      variant={isActive ? "burgundy" : "outline"}
      className={cn("gap-2", className)}
      onClick={handleToggleWishlist}
    >
      <Heart className={cn("h-4 w-4", isActive && "fill-current")} />
      {isActive ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  )
}

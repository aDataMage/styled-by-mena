"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  useWishlist,
  type WishlistItem as WishlistItemType,
} from "@/contexts/wishlist-context";
import { useWhatsApp } from "@/contexts/whatsapp-context";
import { ShoppingBag, X } from "lucide-react";

interface WishlistItemProps {
  item: WishlistItemType;
}

export function WishlistItem({ item }: WishlistItemProps) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useWhatsApp();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      color: item.colors[0] || "Default",
      size: "M", // Default size
      quantity: 1,
    });
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => removeFromWishlist(item.id)}
        className="absolute top-2 right-2 z-10 p-1 bg-white/80 rounded-full hover:bg-white"
        aria-label="Remove from wishlist"
      >
        <X className="h-4 w-4" />
      </button>

      <Link href={`/products/${item.id}`} className="block">
        <div className="aspect-[3/4] relative">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${item.id}`} className="block">
          <h3 className="font-medium mb-1 hover:text-accent-gold transition-colors">
            {item.name}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">${item.price}</p>

        <div className="flex gap-2 mb-3">
          {item.colors.map((color, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full gap-2"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

"use client"

import { useWishlist } from "@/contexts/wishlist-context"
import { WishlistItem } from "@/components/wishlist/wishlist-item"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Trash2 } from "lucide-react"
import Link from "next/link"
import { useWhatsApp } from "@/contexts/whatsapp-context"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function WishlistContent() {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist()
  const { addToCart } = useWhatsApp()

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        color: item.colors[0] || "Default",
        size: "M", // Default size
        quantity: 1,
      })
    })
  }

  if (wishlistCount === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
          <ShoppingBag className="h-8 w-8 text-muted-foreground" />
        </div>
        <h2 className="font-serif text-2xl mb-4">Your wishlist is empty</h2>
        <p className="text-muted-foreground mb-8">
          Start adding items to your wishlist by clicking the heart icon on any product.
        </p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">
          {wishlistCount} {wishlistCount === 1 ? "item" : "items"}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleAddAllToCart}>
            Add All to Cart
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Wishlist
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear your wishlist?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently remove all items from your wishlist.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={clearWishlist} className="bg-destructive text-destructive-foreground">
                  Clear Wishlist
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

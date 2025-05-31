"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { ShoppingBag, HelpCircle } from "lucide-react";
import { useWhatsApp } from "@/contexts/whatsapp-context";
import { WishlistButton } from "@/components/wishlist/wishlist-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    details: string[];
    care: string;
    colors: { name: string; value: string }[];
    sizes: string[];
    materials: string;
    sustainability: string;
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, formatProductInfo, openWhatsApp } = useWhatsApp();

  // Create a product object for the wishlist
  const wishlistProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: "/placeholder.svg?height=900&width=720", // Using the first image
    colors: product.colors.map((c) => c.value),
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor.name,
      size: selectedSize,
      quantity,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) return;

    const productInfo = formatProductInfo(
      product,
      selectedColor.name,
      selectedSize
    );
    openWhatsApp(productInfo);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl md:text-3xl">{product.name}</h1>
        <p className="mt-2 text-xl">${product.price}</p>
      </div>

      <p className="text-gray-600">{product.description}</p>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">
            Color: {selectedColor.name}
          </h3>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`h-8 w-8 rounded-full border ${
                  selectedColor.name === color.name
                    ? "ring-2 ring-black ring-offset-2"
                    : "ring-1 ring-gray-200"
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Size</h3>
            <Link href="/size-guide" className="text-xs underline">
              Size Guide
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`min-w-[3rem] px-3 py-2 text-sm border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-50"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={decrementQuantity}
              className="w-8 h-8 border flex items-center justify-center hover:bg-gray-50"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="w-12 h-8 border-t border-b flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={incrementQuantity}
              className="w-8 h-8 border flex items-center justify-center hover:bg-gray-50"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="flex-1 gap-2"
          disabled={!selectedSize}
          aria-label="Add to cart"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button
          onClick={handleBuyNow}
          className="flex-1 gap-2"
          disabled={!selectedSize}
          aria-label="Buy now"
        >
          <WhatsappIcon className="h-4 w-4" />
          Buy Now
        </Button>
      </div>

      <div className="pt-2">
        <WishlistButton
          product={wishlistProduct}
          variant="default"
          className="w-full"
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center text-sm text-gray-600 hover:text-black">
            <HelpCircle className="h-4 w-4 mr-1" />
            How does purchasing work?
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How to Purchase from Mena's Atelier</DialogTitle>
            <DialogDescription>
              We use WhatsApp Business to provide personalized service and a
              seamless shopping experience.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex gap-3">
              <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-medium">Select your items</h4>
                <p className="text-sm text-gray-600">
                  Choose your preferred size, color, and quantity.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-medium">Click "Buy Now" or "Checkout"</h4>
                <p className="text-sm text-gray-600">
                  You'll be redirected to WhatsApp with your product details
                  pre-filled.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-medium">Confirm with our team</h4>
                <p className="text-sm text-gray-600">
                  Our customer service team will confirm availability and
                  provide payment options.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-medium">Complete your purchase</h4>
                <p className="text-sm text-gray-600">
                  Make a secure payment and receive confirmation and shipping
                  details.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Don't have WhatsApp?</h4>
            <p className="text-sm text-gray-600 mb-3">
              You can also contact us through email or our contact form, and our
              team will assist you with your purchase.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="details" className="mt-8">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="care">Care</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-4">
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Materials:</strong> {product.materials}
          </p>
        </TabsContent>
        <TabsContent value="care" className="pt-4">
          <p className="text-sm text-gray-600">{product.care}</p>
        </TabsContent>
        <TabsContent value="sustainability" className="pt-4">
          <p className="text-sm text-gray-600">{product.sustainability}</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

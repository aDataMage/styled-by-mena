"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { toast } from "@/components/ui/use-toast";

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("Styled By Mena-wishlist");
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
        setWishlistCount(parsedWishlist.length);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("Styled By Mena-wishlist", JSON.stringify(wishlist));
    setWishlistCount(wishlist.length);
  }, [wishlist]);

  const addToWishlist = (newItem: WishlistItem) => {
    setWishlist((prevWishlist) => {
      // Check if item already exists in wishlist
      if (prevWishlist.some((item) => item.id === newItem.id)) {
        toast({
          title: "Already in wishlist",
          description: `${newItem.name} is already in your wishlist`,
        });
        return prevWishlist;
      } else {
        // Add new item to wishlist
        toast({
          title: "Added to wishlist",
          description: `${newItem.name} has been added to your wishlist`,
        });
        return [...prevWishlist, newItem];
      }
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => {
      const itemToRemove = prevWishlist.find((item) => item.id === id);
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);

      if (itemToRemove) {
        toast({
          title: "Removed from wishlist",
          description: `${itemToRemove.name} has been removed from your wishlist`,
        });
      }

      return updatedWishlist;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist",
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}

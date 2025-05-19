"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { toast } from "@/components/ui/use-toast";

type CartItem = {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
};

type WhatsAppContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  itemCount: number;
  openWhatsApp: (productInfo?: string) => void;
  formatProductInfo: (product: any, color: string, size: string) => string;
};

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(
  undefined
);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("whatsapp-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        setItemCount(
          parsedCart.reduce(
            (total: number, item: CartItem) => total + item.quantity,
            0
          )
        );
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("whatsapp-cart", JSON.stringify(cart));
    setItemCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        toast({
          title: "Item updated in cart",
          description: `${newItem.name} quantity updated to ${updatedCart[existingItemIndex].quantity}`,
        });
        return updatedCart;
      } else {
        // Add new item to cart
        toast({
          title: "Item added to cart",
          description: `${newItem.name} has been added to your cart`,
        });
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== itemId);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const formatProductInfo = (product: any, color: string, size: string) => {
    return `*${product.name}*\nSize: ${size}\nColor: ${color}\nPrice: $${product.price}`;
  };

  const openWhatsApp = (productInfo?: string) => {
    const phoneNumber = "+2349091354958"; // Replace with your actual WhatsApp Business number
    let message = "Hello, I'm interested in purchasing from Styled By Mena.";

    if (cart.length > 0) {
      message += "\n\n*My Order:*\n";
      cart.forEach((item) => {
        message += `\n*${item.name}*\nSize: ${item.size}\nColor: ${
          item.color
        }\nQuantity: ${item.quantity}\nPrice: $${item.price * item.quantity}\n`;
      });
      message += `\n*Total: $${cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )}*`;
    } else if (productInfo) {
      message += `\n\nI'm interested in:\n${productInfo}`;
    }

    message += "\n\nCould you help me with this purchase?";

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <WhatsAppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
        openWhatsApp,
        formatProductInfo,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (context === undefined) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
}

"use client"

import { useWhatsApp } from "@/contexts/whatsapp-context"
import { X, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/icons/whatsapp-icon"

interface WhatsAppCartProps {
  isOpen: boolean
  onClose: () => void
}

export function WhatsAppCart({ isOpen, onClose }: WhatsAppCartProps) {
  const { cart, removeFromCart, clearCart, openWhatsApp } = useWhatsApp()

  const handleCheckout = () => {
    openWhatsApp()
    onClose()
  }

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50">
      <div className="bg-white w-full sm:w-[480px] sm:max-h-[80vh] rounded-t-lg sm:rounded-lg shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-serif text-lg">Your Shopping Cart</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <p className="text-sm text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className="font-medium mr-4">${item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-medium">${totalAmount}</span>
            </div>

            <div className="space-y-2">
              <Button onClick={handleCheckout} className="w-full gap-2">
                <WhatsappIcon className="h-5 w-5" />
                Checkout via WhatsApp
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full text-red-500 hover:text-red-700">
                Clear Cart
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              By checking out, you'll be redirected to WhatsApp to complete your purchase with our customer service
              team.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

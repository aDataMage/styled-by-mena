"use client"

import { useState } from "react"
import { useWhatsApp } from "@/contexts/whatsapp-context"
import { WhatsAppCart } from "@/components/whatsapp/whatsapp-cart"
import { WhatsappIcon } from "@/components/icons/whatsapp-icon"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloatingButton() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemCount, openWhatsApp } = useWhatsApp()

  const handleGeneralInquiry = () => {
    openWhatsApp()
    setIsCartOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {itemCount > 0 && (
          <Button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg flex items-center justify-center relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-accent-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          </Button>
        )}

        <Button
          onClick={handleGeneralInquiry}
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsappIcon className="h-7 w-7 text-white" />
        </Button>
      </div>

      <WhatsAppCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

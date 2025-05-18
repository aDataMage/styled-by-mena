"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function ContactInfo() {
  const handleWhatsAppClick = () => {
    const message = "Hi, I have a question about your products.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We're here to help with any questions or concerns. Reach out through
          any of the channels below.
        </p>

        <Button onClick={handleWhatsAppClick} className="w-full mb-6 gap-2">
          <WhatsappIcon className="h-5 w-5" />
          Chat on WhatsApp
        </Button>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Store Location</p>
              <p className="text-gray-600">123 Fashion Street, Paris, France</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Opening Hours</p>
              <p className="text-gray-600">Monday - Saturday: 10am - 7pm</p>
              <p className="text-gray-600">Sunday: 12pm - 5pm</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">hello@Styled By Menabrand.com</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Customer Service</p>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during
                business days.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-medium mb-2">Follow Us</h3>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest collections and behind-the-scenes
          content.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://instagram.com"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://facebook.com"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="https://pinterest.com"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Pinterest
          </Link>
        </div>
      </div>
    </div>
  );
}

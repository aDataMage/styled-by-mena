"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

interface ContactAlternativeProps {
  productName?: string;
}

export function ContactAlternative({ productName }: ContactAlternativeProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    productName
      ? `I'm interested in purchasing the ${productName}. Please contact me with more information.`
      : ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-serif text-xl mb-4">Don't have WhatsApp?</h3>
      <p className="text-gray-600 mb-6">
        No problem! You can reach us through email, phone, or by filling out the
        form below.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-gray-500" />
          <div>
            <p className="font-medium">Email Us</p>
            <p className="text-gray-600 text-sm">
              orders@Styled By Menabrand.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-500" />
          <div>
            <p className="font-medium">Call Us</p>
            <p className="text-gray-600 text-sm">+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center py-4">
          <h4 className="font-medium mb-2">Thank You!</h4>
          <p className="text-gray-600 text-sm">
            We've received your inquiry and will get back to you within 24
            hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your message"
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      )}
    </div>
  );
}

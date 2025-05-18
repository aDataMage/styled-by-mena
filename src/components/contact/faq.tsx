"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How can I place an order?",
    answer:
      'We currently process all orders through WhatsApp. Browse our products on the website, then click the "Shop on WhatsApp" button on any product page to start a conversation with our sales team. They will guide you through the ordering process.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, and bank transfers. Our sales team will provide you with payment instructions after you place your order through WhatsApp.",
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We offer worldwide shipping. Standard delivery takes 3-5 business days for domestic orders and 7-14 business days for international orders. Express shipping options are available at checkout. All orders are shipped with tracking information that will be provided to you once your order is dispatched.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and with all original tags attached. For exchanges, please contact our customer service team through WhatsApp or email. Return shipping costs are the responsibility of the customer unless the item is defective.",
  },
  {
    question: "How do I find my size?",
    answer:
      "We provide detailed size guides on each product page. You can also refer to our comprehensive size guide in the footer menu. If you're still unsure, please contact our customer service team who can assist with specific measurements for any item.",
  },
  {
    question: "Are your products sustainable?",
    answer:
      "Sustainability is at the core of our brand. We use ethically sourced materials, work with certified manufacturers, and produce in small batches to minimize waste. Each product page includes information about the materials used and our sustainability practices.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping times and costs vary depending on the destination. Any applicable customs fees or import duties are the responsibility of the customer.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a confirmation email with tracking information. You can also contact our customer service team through WhatsApp for real-time updates on your order status.",
  },
]

export function Faq() {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

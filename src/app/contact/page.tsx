import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Faq } from "@/components/contact/faq";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata = {
  title: "Contact Us | Styled By Mena",
  description:
    "Get in touch with our team for any questions, collaborations, or customer support.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, feedback,
            or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <ContactInfo />
        </div>

        <Faq />
      </div>
    </PageTransition>
  );
}

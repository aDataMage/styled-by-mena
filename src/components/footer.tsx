import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-50/10 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">Mena's Atelier</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-xs dark:text-gray-300">
              Timeless elegance for the modern woman. Sustainable, ethical
              fashion designed to last.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-gray-500 dark:text-gray-300 hover:text-accent-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-500 dark:text-gray-300 hover:text-accent-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-500 dark:text-gray-300 hover:text-accent-gold transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/products/new-arrivals"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bestsellers"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} ADataMage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Products: ["Stand Mixers", "Blenders", "Coffee Makers", "Toasters", "Cookware"],
  Support: ["Contact Us", "FAQs", "Warranty", "Product Registration", "Manuals"],
  Company: ["Our Story", "Careers", "Press", "Sustainability", "Blog"],
  Connect: ["Instagram", "Facebook", "Pinterest", "YouTube", "Twitter"],
};

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#C41230] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 40 40"
              className="w-7 h-7 text-[#C41230]"
              fill="currentColor"
            >
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
              <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">
                K
              </text>
            </svg>
            <span className="font-bold text-lg tracking-tight">KitchenAid</span>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} KitchenAid. All rights reserved. A Whirlpool brand.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Stand Mixers",
    description: "The icon that started it all",
    image: "/hero-mixer-stand.png",
    count: "24 Products",
  },
  {
    title: "Countertop Appliances",
    description: "Blend, toast, brew & more",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    count: "36 Products",
  },
  {
    title: "Cookware",
    description: "Pots, pans & bakeware",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    count: "18 Products",
  },
  {
    title: "Accessories",
    description: "Attachments & add-ons",
    image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
    count: "42 Products",
  },
];

export default function Categories() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-[#C41230] font-semibold tracking-widest uppercase text-xs mb-4">
              Browse
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#181818]">
              Shop by Category
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#181818] hover:text-[#C41230] transition-colors group"
          >
            All Categories
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] mb-1">
                  {cat.count}
                </p>
                <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-sm text-white/70">{cat.description}</p>
                <div className="mt-4 flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

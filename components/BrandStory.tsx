"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="our-story" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Baking together in the kitchen"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#C41230] text-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-4xl font-bold">100+</p>
              <p className="text-sm uppercase tracking-wider">Years of Making</p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#C41230] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#181818] mb-6 leading-tight">
              Born to Make.
              <br />
              Built to Last.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              For over a century, KitchenAid has been at the heart of kitchens around the
              world. What started with the iconic stand mixer in 1919 has grown into a
              full suite of premium appliances — each one designed with the same
              commitment to quality, durability, and timeless style.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every KitchenAid product is an invitation to create, connect, and share.
              Because the best things in life are made together.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-[#181818]">80+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#181818]">50+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#181818]">#1</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Stand Mixer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

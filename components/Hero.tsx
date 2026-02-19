"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#181818]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="KitchenAid lifestyle"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#C41230] font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Since 1919
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Make It
            <br />
            <span className="text-[#C41230]">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0 mb-8"
          >
            Iconic design meets unmatched performance. Discover appliances built to
            inspire every meal you make.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="#products"
              className="bg-[#C41230] text-white px-8 py-3 font-semibold tracking-wide uppercase text-sm hover:bg-[#A00E28] transition-colors rounded"
            >
              Shop Now
            </a>
            <a
              href="#our-story"
              className="border-2 border-white text-white px-8 py-3 font-semibold tracking-wide uppercase text-sm hover:bg-white hover:text-[#181818] transition-colors rounded"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Hero Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            <Image
              src="/kitchenaid-mixer.png"
              alt="KitchenAid Stand Mixer"
              fill
              className="object-cover drop-shadow-2xl rounded-3xl"
              style={{ borderRadius: "1.5rem" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="KitchenAid lifestyle"
          fill
          className="object-cover opacity-35 scale-110"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C41230] animate-pulse" />
            <span className="text-white/70 text-xs tracking-widest uppercase font-medium">
              Since 1919 &mdash; Over a Century of Craft
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 tracking-tight"
          >
            Make It
            <br />
            <span className="bg-gradient-to-r from-[#C41230] to-[#e8456a] bg-clip-text text-transparent">
              Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Iconic design meets unmatched performance. Discover appliances
            built to inspire every meal you make.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#products"
              className="group relative bg-[#C41230] text-white px-10 py-4 font-semibold tracking-wide uppercase text-sm overflow-hidden rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C41230]/25 hover:scale-105"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A00E28] to-[#C41230] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#our-story"
              className="border border-white/30 text-white px-10 py-4 font-semibold tracking-wide uppercase text-sm rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#181818] hover:scale-105 text-center"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Hero Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            {/* Glow behind product */}
            <div className="absolute inset-0 bg-[#C41230]/20 rounded-full blur-[80px] scale-75" />
            <div className="relative w-[280px] h-[370px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[530px]">
              <Image
                src="/kitchenaid-mixer.png"
                alt="KitchenAid Stand Mixer"
                fill
                className="object-cover drop-shadow-2xl rounded-3xl"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 bg-white text-[#181818] rounded-2xl px-5 py-3 shadow-2xl"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider">Starting at</p>
              <p className="text-xl font-bold">$449.99</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-9 rounded-full border border-white/30 flex justify-center pt-2"
        >
          <div className="w-0.5 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

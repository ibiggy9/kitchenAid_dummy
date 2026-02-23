"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const colors = [
  { name: "Red", hex: "#C41230", image: "/mixer/mixer-red.png" },
  { name: "Black", hex: "#181818", image: "/mixer/mixer-black.png" },
  { name: "Silver", hex: "#A8A9AD", image: "/mixer/mixer-silver.png" },
  { name: "Pistachio", hex: "#A8C686", image: "/mixer/mixer-pistachio.png" },
];

export default function ColorCollection() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section id="colors" className="py-28 px-6 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-[#C41230] font-semibold tracking-widest uppercase text-xs mb-4">
            Express Yourself
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            A Color for Every Kitchen
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From bold statement hues to timeless neutrals, find the shade that matches your style.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Mixer display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeColor.hex}
                  initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  className="w-[300px] h-[380px] md:w-[400px] md:h-[480px] rounded-3xl flex items-center justify-center relative overflow-hidden bg-[#151515]"
                >
                  <div className="relative w-[260px] h-[330px] md:w-[340px] md:h-[420px]">
                    <Image
                      src={activeColor.image}
                      alt={`KitchenAid Mixer in ${activeColor.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeColor.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center mt-6 text-xl font-semibold"
                >
                  {activeColor.name}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Color swatches */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-md"
          >
            <h3 className="text-2xl font-bold mb-2">Choose Your Color</h3>
            <p className="text-white/40 mb-10 leading-relaxed">
              Each mixer is available in a curated palette of colors, designed to complement any kitchen aesthetic.
            </p>
            <div className="grid grid-cols-4 gap-6">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveColor(color)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl shadow-lg transition-all duration-300 ${
                      activeColor.name === color.name
                        ? "ring-2 ring-white ring-offset-4 ring-offset-[#0a0a0a] scale-110"
                        : "hover:ring-1 hover:ring-white/40 hover:ring-offset-2 hover:ring-offset-[#0a0a0a]"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span
                    className={`text-[11px] tracking-wide transition-colors duration-300 ${
                      activeColor.name === color.name ? "text-white font-medium" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {color.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 inline-flex items-center justify-center gap-2 w-full bg-white text-[#181818] px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-[#C41230] hover:text-white transition-colors duration-300"
            >
              Customize Your Mixer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

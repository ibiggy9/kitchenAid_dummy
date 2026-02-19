"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const colors = [
  { name: "Empire Red", hex: "#C41230", textColor: "text-white" },
  { name: "Onyx Black", hex: "#181818", textColor: "text-white" },
  { name: "White", hex: "#F5F5F0", textColor: "text-[#181818]" },
  { name: "Pistachio", hex: "#A8C686", textColor: "text-[#181818]" },
  { name: "Lavender", hex: "#B4A7D6", textColor: "text-[#181818]" },
  { name: "Blue Velvet", hex: "#2E4057", textColor: "text-white" },
  { name: "Honey", hex: "#E8A838", textColor: "text-[#181818]" },
  { name: "Hibiscus", hex: "#D94F70", textColor: "text-white" },
];

export default function ColorCollection() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section id="colors" className="py-24 px-6 bg-[#181818] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#C41230] font-semibold tracking-widest uppercase text-sm mb-3">
            Express Yourself
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            A Color for Every Kitchen
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Mixer display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <motion.div
                key={activeColor.hex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-[300px] h-[380px] md:w-[400px] md:h-[480px] rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: activeColor.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="relative w-[250px] h-[320px] md:w-[320px] md:h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1594385208974-2f8bb07b7a45?w=600&q=80"
                    alt={`KitchenAid Mixer in ${activeColor.name}`}
                    fill
                    className="object-contain mix-blend-luminosity opacity-80"
                  />
                </div>
              </motion.div>
              <motion.p
                key={activeColor.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-6 text-xl font-semibold"
              >
                {activeColor.name}
              </motion.p>
            </div>
          </motion.div>

          {/* Color swatches */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-2">Choose Your Color</h3>
            <p className="text-gray-400 mb-8">
              From bold statement hues to timeless neutrals, find the shade that
              matches your style.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveColor(color)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
                      activeColor.name === color.name
                        ? "ring-3 ring-white ring-offset-4 ring-offset-[#181818]"
                        : "hover:ring-2 hover:ring-white/50 hover:ring-offset-2 hover:ring-offset-[#181818]"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {color.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

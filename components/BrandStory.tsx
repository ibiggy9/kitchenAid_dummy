"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 80, suffix: "+", label: "Countries" },
  { value: 50, suffix: "+", label: "Products" },
  { value: 100, suffix: "+", label: "Years" },
];

export default function BrandStory() {
  return (
    <section id="our-story" className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[550px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Baking together in the kitchen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#C41230]/30 rounded-tl-3xl" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#C41230] text-white p-7 rounded-2xl shadow-2xl shadow-[#C41230]/30 animate-pulse-glow"
            >
              <p className="text-5xl font-bold leading-none">#1</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-1 text-white/80">Stand Mixer Brand</p>
            </motion.div>
          </motion.div>

          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#C41230] font-semibold tracking-widest uppercase text-xs mb-4">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#181818] mb-8 leading-[1.05]">
              Born to Make.
              <br />
              Built to Last.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-gray-500 text-lg leading-relaxed">
                For over a century, KitchenAid has been at the heart of kitchens around the
                world. What started with the iconic stand mixer in 1919 has grown into a
                full suite of premium appliances.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Each one designed with the same commitment to quality, durability, and
                timeless style. Because the best things in life are made together.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mb-10 pb-10 border-b border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-[#181818]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[#181818] font-semibold text-sm uppercase tracking-wider group hover:text-[#C41230] transition-colors duration-300"
            >
              <span className="w-12 h-12 rounded-full bg-[#C41230] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </span>
              Read Our Full Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Portland, OR",
    text: "I've had my Artisan mixer for 12 years and it still runs like the day I bought it. It's the most reliable thing in my kitchen.",
    rating: 5,
    product: "Artisan Stand Mixer",
    initials: "SM",
  },
  {
    name: "James K.",
    location: "Austin, TX",
    text: "The build quality is unreal. Worth every penny. I went from struggling with dough to making perfect bread every weekend.",
    rating: 5,
    product: "Professional 5 Plus",
    initials: "JK",
  },
  {
    name: "Maria L.",
    location: "Chicago, IL",
    text: "I bought the Pistachio color and it's gorgeous. Friends always compliment it. But it's the performance that truly blew me away.",
    rating: 5,
    product: "Artisan Stand Mixer",
    initials: "ML",
  },
  {
    name: "David R.",
    location: "Seattle, WA",
    text: "After trying 3 different blenders, the K400 finally delivered the smooth results I wanted. The self-cleaning is a game changer.",
    rating: 5,
    product: "K400 Blender",
    initials: "DR",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-6 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#C41230] font-semibold tracking-widest uppercase text-xs mb-4">
            Loved by Makers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#181818] mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Join millions of home cooks who trust KitchenAid every day.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setActive(i)}
              className={`p-7 rounded-2xl cursor-pointer transition-all duration-500 ${
                active === i
                  ? "bg-[#181818] text-white shadow-2xl scale-[1.02]"
                  : "bg-white text-[#181818] shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className={`w-4 h-4 ${active === i ? "text-[#C41230]" : "text-amber-400"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-6 ${active === i ? "text-white/80" : "text-gray-600"}`}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                    active === i ? "bg-[#C41230] text-white" : "bg-[#F5F5F0] text-[#181818]"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className={`text-[11px] ${active === i ? "text-white/50" : "text-gray-400"}`}>
                    {t.location} &middot; {t.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

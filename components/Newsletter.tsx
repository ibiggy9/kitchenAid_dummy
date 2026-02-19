"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 px-6 bg-[#C41230]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stay Inspired
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Get exclusive recipes, product launches, and kitchen tips delivered
          straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white focus:bg-white/30 transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-white text-[#C41230] px-8 py-3 rounded font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </motion.button>
        </form>
        <p className="text-xs text-white/50 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative py-28 px-6 bg-[#C41230] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-white relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          Stay Inspired
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-lg mx-auto leading-relaxed">
          Get exclusive recipes, first access to new launches, and kitchen tips
          from the pros — delivered weekly.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full bg-white/15 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white focus:bg-white/25 transition-all duration-300 text-sm"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-white text-[#C41230] px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#181818] hover:text-white transition-colors duration-300 shadow-lg shadow-black/10"
          >
            Subscribe
          </motion.button>
        </form>

        <p className="text-[11px] text-white/40 mt-5">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime. No spam, ever.
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Artisan Stand Mixer",
    price: "$449.99",
    originalPrice: "$499.99",
    category: "Stand Mixers",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    color: "Empire Red",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 2847,
  },
  {
    name: "K400 Blender",
    price: "$249.99",
    category: "Blenders",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80",
    color: "Matte Black",
    badge: "New",
    rating: 4.7,
    reviews: 1253,
  },
  {
    name: "Drip Coffee Maker",
    price: "$199.99",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    color: "Onyx Black",
    rating: 4.8,
    reviews: 986,
  },
  {
    name: "2-Slice Toaster",
    price: "$129.99",
    category: "Toasters",
    image: "/two-slice-toaster.jpeg",
    color: "Contour Silver",
    badge: "Sale",
    rating: 4.6,
    reviews: 714,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-28 px-6 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#C41230] font-semibold tracking-widest uppercase text-xs mb-4">
            Our Bestsellers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#181818] mb-4">
            Featured Products
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Crafted with precision. Designed to inspire. Built to last a lifetime.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-100"
            >
              {/* Image */}
              <div className="relative h-72 bg-gradient-to-b from-[#f0f0ec] to-[#e8e8e3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      product.badge === "Bestseller"
                        ? "bg-[#181818] text-white"
                        : product.badge === "New"
                        ? "bg-[#C41230] text-white"
                        : "bg-amber-400 text-[#181818]"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#181818] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl"
                  >
                    Quick View
                  </motion.span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">
                  {product.category}
                </p>
                <h3 className="text-base font-bold text-[#181818] mb-2 group-hover:text-[#C41230] transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={product.rating} />
                  <span className="text-[11px] text-gray-400">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#181818]">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#C41230] transition-colors duration-300"
                    aria-label="Add to cart"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M12 5v14m-7-7h14" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#181818] font-semibold text-sm uppercase tracking-wider group hover:text-[#C41230] transition-colors duration-300"
          >
            View All Products
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

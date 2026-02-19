"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Artisan Stand Mixer",
    price: "$449.99",
    category: "Stand Mixers",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    color: "Empire Red",
  },
  {
    name: "K400 Blender",
    price: "$249.99",
    category: "Blenders",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80",
    color: "Matte Black",
  },
  {
    name: "Drip Coffee Maker",
    price: "$199.99",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    color: "Onyx Black",
  },
  {
    name: "2-Slice Toaster",
    price: "$129.99",
    category: "Toasters",
    image: "https://images.unsplash.com/photo-1585237672814-8922571e4809?w=600&q=80",
    color: "Contour Silver",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 px-6 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#C41230] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Bestsellers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#181818]">
            Featured Products
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-64 bg-[#E8E8E3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-[#181818] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.color}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#C41230]">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#181818] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded hover:bg-[#C41230] transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

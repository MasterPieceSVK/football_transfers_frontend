"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/carousel-1.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold">Transfers</h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/all/0/latest"
              className="btn btn-primary row-start-3 col-start-2"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

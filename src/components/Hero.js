"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
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
  );
}

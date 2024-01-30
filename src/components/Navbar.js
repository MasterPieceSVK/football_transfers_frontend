"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="navbar bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link href="/" className="btn btn-ghost text-xl">
        Transfers
      </Link>
    </motion.div>
  );
}

"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"

export default function StaggerChildren({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}
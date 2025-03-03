"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-background dark:bg-background-dark">
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10"
        initial={{ rotate: -45, scale: 1.5 }}
        animate={{
          rotate: -45,
          scale: 2,
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ backgroundSize: "30px 30px" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I&apos;M{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Harsh Thite
            </motion.span>{" "}
          </motion.h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-secondary max-w-2xl text-lg md:text-xl mb-8">
            Crafting code, designing experiences, and pushing the boundaries of
            innovation—one project at a time. From building seamless web
            applications to optimizing digital solutions, I transform ideas into
            reality with Python, Django, some frontend and a touch of
            creativity. Curious about what I’ve built? Take a look!{" "}
            <Link
              href="/projects"
              className="text-primary hover:underline inline-flex items-center gap-1 group"
            >
              PROJECTS
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </Link>{" "}
            Always eager to learn, adapt, and push boundaries in tech, I strive
            to build technology that makes a difference.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 bg-primary text-background-dark rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
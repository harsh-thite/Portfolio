"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FadeIn } from "./animations";

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          <p className="text-secondary max-w-2xl mx-auto mb-12">
            Let's connect and build something amazing together! Whether it’s
            tech, innovation, or just a friendly chat—drop me a message and
            let’s make ideas happen. I'll try my best to get back to you!
          </p>
          <motion.div
            className="flex justify-center gap-8 mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/harsh-thite" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/harsh-thite/",
              },
              { icon: Twitter, href: "https://x.com/thiteharsh?s=21" },
              { icon: Mail, href: "mailto:harshthite2013@email.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
          <motion.form
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 rounded-md bg-accent/10 dark:bg-accent-dark/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 rounded-md bg-accent/10 dark:bg-accent-dark/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mb-4 p-2 rounded-md bg-accent/10 dark:bg-accent-dark/10 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <motion.button
              type="submit"
              className="px-8 py-3 bg-primary text-background-dark rounded-md font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </FadeIn>
      </div>
    </section>
  );
}
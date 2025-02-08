"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowRight } from "lucide-react";
import { FadeInStagger, FadeIn } from "./animations";

const projects = [
  {
    title: "Routzy (Ride-Sharing Platform)",
    description:
      "A ride-sharing web app enabling users to offer or book rides seamlessly. It features real-time ride details, user authentication, and a responsive interface for a smooth experience.",
    tags: [
      "Python",
      "Django",
      "HTMX",
      "HTML",
      "CSS",
      "Bootstrap",
      "Django Rest Framework",
    ],
    links: {
      github: "https://github.com/harsh-thite/Routzy",
      live: "https://example.com",
    },
    image: "/pictures/routzy.png", //  local image path
  },
  {
    title: "DiscountU (Discount Aggregator Platform)",
    description:
      "A dynamic platform for students to easily register and access exclusive discounts based on interest categories, simplifying student ID benefits.",
    tags: [
      "Python",
      "Django",
      "HTMX",
      "HTML",
      "CSS",
      "Bootstrap",
      "Django Rest Framework",
    ],
    links: {
      github: "https://github.com/harsh-thite/DiscountU",
      live: "https://example.com",
    },
    image: "/pictures/discountu.png", // Updated local image path
  },
  {
    title: "HMart (E-Commerce Web Application)",
    description:
      "A full-fledged e-commerce platform featuring secure user authentication, streamlined product listings, and an enhanced online shopping experience with razorpay integration as well.",
    tags: ["Python", "Django", "HTMX", "HTML", "CSS", "Bootstrap", "Rest API"],
    links: {
      github: "https://github.com/harsh-thite/HMart",
      live: "https://example.com",
    },
    image: "/pictures/hmart.png", // Updated local image path
  },
  {
    title: "Llama2 Medical ChatBot",
    description:
      "The Llama2 Medical ChatBot is a powerful tool designed to provide medical information by answering user queries using state-of-the-art language models and vector stores.",
    tags: ["Python", "Chainlit", "Langchain"],
    links: {
      github: "https://github.com/harsh-thite/Medical-Chatbot",
      live: "https://example.com",
    },
    image: "/pictures/llama2.png", // Updated local image path
  },
];

export default projects;

export function Projects() {
  return (
    <section className="py-20 bg-accent/5 dark:bg-accent-dark/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-12">Featured Projects</h1>
        </FadeIn>
        <FadeInStagger>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative bg-background dark:bg-background-dark rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 dark:from-background-dark/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 dark:bg-accent-dark/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="text-center mb-16">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FileText size={24} />
              Let's see my resume
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Convinced to contact me?
            </h2>
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 bg-primary text-background-dark rounded-md font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

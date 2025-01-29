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
    image:
      "https://private-user-images.githubusercontent.com/103556149/392510011-7f7b867f-555f-4a91-9539-4b1deca2f238.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgxNTk0ODYsIm5iZiI6MTczODE1OTE4NiwicGF0aCI6Ii8xMDM1NTYxNDkvMzkyNTEwMDExLTdmN2I4NjdmLTU1NWYtNGE5MS05NTM5LTRiMWRlY2EyZjIzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOVQxMzU5NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNGRhYjIwZmNlOGUxMDI2NjA3ODU5OTE5NjQ1ODA5OTQ0ZGM5MDYxZWNkMDNiMDgxNGMwODhlZjQyZWMzYTUyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7hfJYpy_cAGZEWkZ7OXM3uwWsMHJ68b3xCpl6rFvKjE",
  },
  // Add more projects...
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
    image:
      "https://private-user-images.githubusercontent.com/103556149/385226207-2cc1b02c-4ecf-446f-84e6-811d8c1cba2d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgxNTk3MzUsIm5iZiI6MTczODE1OTQzNSwicGF0aCI6Ii8xMDM1NTYxNDkvMzg1MjI2MjA3LTJjYzFiMDJjLTRlY2YtNDQ2Zi04NGU2LTgxMWQ4YzFjYmEyZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOVQxNDAzNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NjJlNDlhMWFiMjQ2ZmQ1YjlmZDQ3Yzk2NTAzMjA5YzA1YjUwNmJmNWE2OTcwZWRiM2MwNDgzMDlkNGYwYTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.aylxV98VStpsYqMsR1olrWzbPwWWQr-6dfF_U4mm9Qo",
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
    image:
      "https://private-user-images.githubusercontent.com/103556149/377880575-02ac8938-17b1-4579-87df-4ba2bc99a60d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgxNTk5MjIsIm5iZiI6MTczODE1OTYyMiwicGF0aCI6Ii8xMDM1NTYxNDkvMzc3ODgwNTc1LTAyYWM4OTM4LTE3YjEtNDU3OS04N2RmLTRiYTJiYzk5YTYwZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOVQxNDA3MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MTNjOTNlYWQ2YzQ1MmI1M2Q4Yjg5YTFkYzhlZWQ1YWQwMjc0ODNjN2M2ZjRmYzQ4MjkyZmM2OGMzZjczMGRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8_m3yTmqO9XDVvyY2_aSCXJA9NneDt-edO_WaEXYuPk",
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
    image:
      "https://private-user-images.githubusercontent.com/103556149/407793974-9af1e2a2-7bc5-443e-b4af-02dc0889190c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgxNjQ0ODEsIm5iZiI6MTczODE2NDE4MSwicGF0aCI6Ii8xMDM1NTYxNDkvNDA3NzkzOTc0LTlhZjFlMmEyLTdiYzUtNDQzZS1iNGFmLTAyZGMwODg5MTkwYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOVQxNTIzMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZDA3NTljZjMwY2ExODVhYzRmN2M4MjlmOWZmYjQ0ZDljNDU1OTVlNGJjZDllZjAxMmZhNTMzZDY1OWQ2MjdjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KTrVLA-jT8-hzSAtMpHljwC_IT3N9YZdeO0yltii4Ao",
  },
];

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
              href="/your-resume.pdf"
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

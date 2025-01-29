import { FadeIn } from "@/components/animations"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-20 mt-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm [Your Name], a passionate frontend developer and UX architect with a love for creating beautiful,
          functional, and user-centered digital experiences.
        </p>
        <p className="text-lg mb-4">
          With [X] years of experience in the field, I've had the opportunity to work on a wide range of projects, from
          small business websites to large-scale web applications. My expertise includes HTML, CSS, JavaScript, React,
          and Next.js, among other modern web technologies.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me [your hobbies or interests]. I'm always eager to learn new technologies
          and techniques to improve my craft and deliver the best possible solutions to my clients.
        </p>
      </FadeIn>
    </main>
  )
}


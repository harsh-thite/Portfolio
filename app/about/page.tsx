import { FadeIn } from "@/components/animations";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-20 mt-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          I am Harsh Thite, a dedicated and ambitious Software Engineer
          currently pursuing a B.Tech in Computer Science at SRM University.
          With a strong foundation in Python, Django, and full-stack web
          development, I am passionate about building scalable and efficient
          digital solutions.
        </p>
        <p className="text-lg mb-4">
          With [X] years of experience in the field, I've had the opportunity to
          work on a wide range of projects, from small business websites to
          large-scale web applications. My expertise includes HTML, CSS,
          JavaScript, React, and Next.js, among other modern web technologies.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me [your hobbies or interests]. I'm
          always eager to learn new technologies and techniques to improve my
          craft and deliver the best possible solutions to my clients.
        </p>
      </FadeIn>
    </main>
  );
}

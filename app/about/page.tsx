import { FadeIn } from "@/components/animations";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-20 mt-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          I’m Harsh Thite, a passionate and results-driven Software Engineer
          with a strong foundation in Python, Django, and full-stack web
          development. Currently pursuing my B.Tech in Computer Science with a
          specialization in Software Engineering at SRM University, I have
          consistently honed my skills by working on scalable, high-performance
          applications and contributing to open-source projects.
        </p>
        <p className="text-lg mb-4">
          With hands-on experience in web development, database management, and
          REST API design, I have built solutions ranging from ride-sharing
          platforms to e-commerce applications, leveraging modern technologies
          like HTMX, Django REST Framework, and SQL. My ability to analyze data
          using Pandas and NumPy further strengthens my approach to developing
          intelligent and optimized software solutions.
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

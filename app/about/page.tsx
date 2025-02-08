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
          Beyond technical expertise, I have led and collaborated on team-based
          projects, organized tech events, and contributed to the IEEE SRM Media
          & Content team, refining my UI/UX design and communication skills.
          Recognized as a Winner in SRMIST’s Ideathon for optimizing cloud-based
          web applications, I am committed to continuous learning and innovation
          in the field of software development and cloud computing.
        </p>
        <p className="text-lg mb-4">
          And at last, when I’m not coding, you’ll probably find me competing in
          gaming tournaments, hitting the track for athletics, or playing
          sports. Whether it’s strategizing in a game, pushing my limits in a
          sprint, or enjoying a friendly match, I love the thrill of competition
          and the discipline it brings. These passions keep me motivated,
          sharpen my focus, and fuel my drive to tackle challenges—both in code
          and in life.
        </p>
      </FadeIn>
    </main>
  );
}

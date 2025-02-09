import { FadeIn } from "@/components/animations";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-20 mt-16">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          I’m <strong>Harsh Thite</strong>, a passionate and results-driven
          Software Engineer with a strong foundation in Python, Django, and
          full-stack web development. Currently pursuing my{" "}
          <b>B.Tech in Computer Science</b>
          with a specialization in Software Engineering at <b>SRM University</b>
          , I have consistently honed my skills by working on scalable,
          high-performance applications and contributing to open-source
          projects.
        </p>
        <p className="text-lg mb-4">
          My expertise lies in <b>full-stack web development</b>, with hands-on
          experience in building interactive and data-driven applications. I
          specialize in technologies like{" "}
          <b>HTMX, Django REST Framework, SQL, and cloud-based deployments</b>.
          My ability to analyze and optimize data-driven applications further
          strengthens my approach to developing{" "}
          <b>efficient and intelligent software solutions</b>.
        </p>
        <p className="text-lg mb-4">
          Beyond technical expertise, I have led and collaborated on team-based
          projects, organized tech events, and contributed to the{" "}
          <b>IEEE SRM Media & Content team</b>, refining my UI/UX design and
          communication skills. Recognized as a{" "}
          <b>Winner in SRMIST’s Ideathon</b> for optimizing cloud-based web
          applications, I am committed to continuous learning and innovation in
          the field of software development.
        </p>
        <p className="text-lg mb-4">
          And at last, when I’m not coding, you’ll probably find me{" "}
          <b>
            competing in gaming tournaments, sprinting on the track, or engaging
            in athletics
          </b>
          . Whether it’s{" "}
          <b>
            strategizing a game-winning move, pushing my limits in a sprint, or
            enjoying a friendly sports match
          </b>
          , I thrive on competition and discipline. These passions not only keep
          me motivated but also sharpen my focus and resilience—both in code and
          in life.
        </p>
        <p className="text-lg italic text-gray-400 mt-6">
          "Code, compete, and create—these three words define my journey."
        </p>
      </FadeIn>
    </main>
  );
}

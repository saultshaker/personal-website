export default function Home() {
  const projects = [
    {
      title: "PROJECT_001",
      description: "High-performance computing framework for distributed scientific simulations",
      tech: ["C++", "MPI", "CUDA"],
      link: "#",
    },
    {
      title: "PROJECT_002",
      description: "Machine learning toolkit for accelerating materials discovery",
      tech: ["Python", "PyTorch", "NumPy"],
      link: "#",
    },
    {
      title: "PROJECT_003",
      description: "Real-time data visualization platform for experimental physics",
      tech: ["JavaScript", "D3.js", "WebGL"],
      link: "#",
    },
    {
      title: "PROJECT_004",
      description: "Automated testing framework for large-scale computational models",
      tech: ["Python", "Pytest", "CI/CD"],
      link: "#",
    },
    {
      title: "PROJECT_005",
      description: "Open-source library for quantum computing simulations",
      tech: ["Rust", "LLVM", "Linear Algebra"],
      link: "#",
    },
    {
      title: "PROJECT_006",
      description: "Command-line tools for scientific workflow automation",
      tech: ["Bash", "Python", "Docker"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="brutal-border-thick bg-white p-8 md:p-12 mb-8 brutal-shadow">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none">
              SAUL
              <br />
              SCHAFFER
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="brutal-border bg-white p-6 brutal-shadow">
              <p className="text-xl md:text-2xl font-bold">
                RESEARCHER + ENGINEER
                <br />
                @ LLNL
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/saulschaffer/"
                target="_blank"
                rel="noopener noreferrer"
                className="block brutal-border bg-black text-white p-4 text-center text-lg font-bold brutal-shadow-hover transition-all no-underline"
              >
                [LINKEDIN]
              </a>
              <a
                href="https://scholar.google.com/citations?user=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="block brutal-border bg-white text-black p-4 text-center text-lg font-bold brutal-shadow-hover transition-all"
              >
                [GOOGLE_SCHOLAR]
              </a>
              <a
                href="https://pls.llnl.gov/people/staff-bios/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="block brutal-border bg-white text-black p-4 text-center text-lg font-bold brutal-shadow-hover transition-all"
              >
                [LLNL_LAB_PAGE]
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="brutal-border-thick bg-white p-8 md:p-12 brutal-shadow mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 border-b-4 border-black pb-4">
              [[ABOUT]]
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              I&apos;m a researcher and engineer at Lawrence Livermore National
              Laboratory, where I work on cutting-edge problems at the
              intersection of computer science and scientific computing.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-6">
              My interests span machine learning, high-performance computing,
              and software engineering, with a focus on building tools that
              enable breakthrough scientific discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 brutal-border-thick bg-white p-6 brutal-shadow">
            [[PROJECTS]]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="brutal-border bg-white p-6 brutal-shadow-hover transition-all"
              >
                <div className="border-b-4 border-black pb-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="brutal-border bg-black text-white px-3 py-1 text-sm font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block brutal-border bg-white text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors"
                >
                  VIEW_PROJECT →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 border-b-4 border-white pb-2 inline-block">
                LINKS
              </h3>
              <div className="space-y-2 mt-4">
                <a
                  href="https://www.linkedin.com/in/saulschaffer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:bg-white hover:text-black p-2 transition-colors"
                >
                  → LINKEDIN
                </a>
                <a
                  href="https://scholar.google.com/citations?user=YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:bg-white hover:text-black p-2 transition-colors"
                >
                  → GOOGLE_SCHOLAR
                </a>
                <a
                  href="https://pls.llnl.gov/people/staff-bios/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:bg-white hover:text-black p-2 transition-colors"
                >
                  → LLNL
                </a>
                <a
                  href="https://github.com/saultshaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:bg-white hover:text-black p-2 transition-colors"
                >
                  → GITHUB
                </a>
              </div>
            </div>

            <div className="flex items-end justify-start md:justify-end">
              <div className="border-4 border-white p-4">
                <p className="text-xl font-bold">
                  © 2026
                  <br />
                  SAUL SCHAFFER
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-white pt-4">
            <p className="text-sm">
              BUILT WITH NEXT.JS + TAILWIND // BRUTALIST DESIGN
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

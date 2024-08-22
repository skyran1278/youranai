export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 pb-4 mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold">You-Ran Nai</h1>
          </div>
          <div className="text-sm text-center md:text-right space-y-1">
            <div>Phone: (+886) 920-785-026</div>
            <div>Email: nai@u-ran.com</div>
            <div>
              GitHub:{" "}
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/skyran1278"
              >
                github.com/skyran1278
              </a>
            </div>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-justify">
            Multi-talented software developer with 3+ years of experience in
            web, desktop, and cloud-based infrastructure development. Proficient
            in designing 3-tier architectures and renovating complex
            applications. Skilled in a wide range of technologies and tools,
            delivering high-quality software solutions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Javascript",
              "C++",
              "Python",
              "React",
              "Redux",
              "Jest",
              "Node",
              "MongoDB",
              "AWS",
              "Docker",
              "Azure Pipeline",
              "GCP Vision API",
              "Firebase",
            ].map((skill) => (
              <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Experiences</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium">
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="http://building.rcad.com.tw/"
              >
                RCAD Inc.
              </a>
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>Software Developer</div>
              <div>Aug 2020 - Present</div>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Designed, developed, tested, and documented modules for 3D
                applications using Visual C++, MFC, and OO Design Patterns.
              </li>
              <li>
                Reviewed papers and implemented algorithms to solve complex
                problems.
              </li>
              <li>
                Developed a script to migrate from multi-byte to Unicode
                applications.
              </li>
              <li>Managed GIT/TFS repositories and pipeline strategies.</li>
              <li>
                Developed and maintained integration test suites based on
                functional specifications.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium">
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://elements-str.com/"
              >
                Elements Structure Inc.
              </a>
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>Full Stack Web Developer</div>
              <div>Aug 2019 - Aug 2020</div>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Built a web application for account management and issue
                tracking using React, Redux, Node/Express, and MongoDB.
              </li>
              <li>Developed notification and backup services with Node.js.</li>
              <li>
                Migrated from a self-hosted Linux environment to AWS
                auto-scaling infrastructure and multi-tenant architecture.
              </li>
              <li>Managed infrastructure provisioning with AWS services.</li>
              <li>
                Created a structure plan vision system using PyTorch and GCP
                Vision API.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>Full Stack Web Developer (Internship)</div>
              <div>Jun 2016 - Jul 2019</div>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Developed an on-site management system using a NoSQL cloud
                database and OAuth 2.0 for authentication.
              </li>
              <li>
                Optimized steel structure members using clustering algorithms.
              </li>
              <li>Designed SRC using Newton's method and slide algorithm.</li>
              <li>
                Optimized the angle radius, increasing speed by 400 times.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium">National Taiwan University</h3>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>Master's degree, Structural Engineering</div>
              <div>2017 - 2019</div>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Thesis: "Feasibility of Beam Reinforcement Optimization for
                Practical Application"
              </li>
              <li>Developed an algorithm to optimize beam reinforcement.</li>
              <li>Developed a GUI written in Python.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">National Taiwan University</h3>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div>Bachelor's degree, Civil Engineering</div>
              <div>2013 - 2017</div>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Gold Medal in CSX 2003 Website Database Programming (used Azure,
                Node.js, and Express.js to build a website and Chrome
                extension).
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Side Projects</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/JanHovancik/status/1572480516540223490?s=20&t=00eO2C44EZwpQWQV_abeLw"
              >
                stretchly-raycast
              </a>
              : Built a Raycast extension using TypeScript.
            </li>
            <li>
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets"
              >
                js-jsx-snippets
              </a>
              : Built a VSCode extension for React/Redux in JS with Babel and
              ES7 syntax, with over 0.5 million downloads.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

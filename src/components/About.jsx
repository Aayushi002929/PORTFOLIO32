export default function About() {
  const edu = [
    {
      degree:
        "Bachelor of Technology — Electronics & Communication Engineering (AI)",
      school:
        "Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi",
      time: "2023 – 2027",
      extra: "CGPA: 8.17",
      badges: ["Academic Excellence", "Core ECE + AI", "Projects & Labs"],
    },
    {
      degree: "Senior Secondary Education",
      school: "The Vivekanand School, Hisar, Haryana",
      time: "2021 – 2022",
      extra: "Percentage: 93%",
      badges: ["PCM", "Top Performer", "Leadership"],
    },
    {
      degree: "Secondary Education",
      school: "New Lahoria Vidya Mandir School, Hisar, Haryana",
      time: "2019 – 2020",
      extra: "Percentage: 98%",
      badges: ["Merit Holder", "Consistency", "Discipline"],
    },
  ];

  const languages = ["C", "C++", "Python", "JavaScript", "SQL", "NoSQL", "HTML", "CSS"];
  const tech = ["Node.js", "Express.js", "Git", "GitHub", "MongoDB", "Bootstrap"];
  const tools = ["VS Code", "MongoDB", "MySQL Workbench"];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      {/* Intro */}
      <h1 className="text-3xl font-bold mb-1">About</h1>
      <p className="text-lg mb-6">
        B.Tech — Electronics & Communication Engineering (AI) at Indira Gandhi
        Delhi Technical University for Women (IGDTUW), Delhi.
      </p>
      <p className="mb-8">
        Hello, I’m Aayushi. I’m passionate about building practical solutions in
        full-stack web/mobile and applied AI. I enjoy solving real-world
        problems with scalable and innovative technologies.
      </p>

      {/* Education — Stylish Timeline (Tailwind only) */}
      <h2 className="text-green-600 font-semibold text-xl mt-10 mb-4">
        Education
      </h2>

      <div className="relative pl-6">
        {/* vertical line */}
        <span className="pointer-events-none absolute left-2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600" />
        <div className="space-y-5">
          {edu.map((e, i) => (
            <div
              key={i}
              className="relative group transition-transform duration-200 hover:-translate-y-[2px]"
            >
              {/* timeline node */}
              <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-white ring-4 ring-emerald-500 group-hover:ring-emerald-400 transition" />
              {/* card */}
              <div className="rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition p-4 md:p-5">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
                  <h3 className="font-semibold text-base md:text-lg">
                    {e.degree}
                  </h3>
                  <span className="ml-auto text-xs md:text-sm inline-flex items-center rounded-full border border-emerald-200 px-2 py-0.5 bg-emerald-50 text-emerald-700">
                    {e.time}
                  </span>
                </div>

                <p className="text-sm md:text-base text-gray-700 mt-1">
                  {e.school}  • {e.extra}
                </p>

                {/* subtle divider */}
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

                {/* micro badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills — Stylish pill badges inside color cards */}
      <h2 className="text-green-600 font-semibold text-xl mt-10 mb-4">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-5 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg mb-3 text-emerald-700">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies / Frameworks */}
        <div className="bg-gradient-to-r from-pink-50 to-red-100 p-5 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg mb-3 text-red-600">
            Technologies / Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full bg-white border border-red-200 text-red-700 hover:bg-red-600 hover:text-white transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-100 p-5 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg mb-3 text-indigo-600">
            Developer Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

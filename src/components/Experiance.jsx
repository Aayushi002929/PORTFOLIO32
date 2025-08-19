import { useState } from "react";
import css from "../../public/css.jpg";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  const exp = {
    id: 1,
    logo: css,
    title: "Mobile App Developer (Flutter, Dart)",
    company: "Department of AI & DS — IGDTUW",
    duration: "May 2024 – July 2024",
    bullets: [
      "Engineered a secure full-stack expense manager app with robust user authentication, enabling intuitive budget planning and improving tracking efficiency by 40%.",
      "Designed real-time multi-region expense analytics for 5+ zones, helping users monitor and manage expenditures tailored to diverse financial behaviors.",
      "Integrated Firebase backend for real-time data sync across devices, reducing lag by 25% and improving collaboration.",
      "Collaborated with a team of 4 peers using Git and Agile sprints, ensuring weekly feature delivery and early bug detection.",
      "Implemented modular UI components in Flutter, reducing duplicate code by 30% and improving app maintainability.",
    ],
  };

  return (
    <div
      id="experience"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16 scroll-mt-24"
    >
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          <div
            key={exp.id}
            className="
              flex flex-col justify-between
              bg-pink-50 border border-pink-200 rounded-lg shadow-lg
              p-6
              transition-transform hover:scale-105
            "
          >
            <div className="flex flex-col items-center">
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-24 h-24 rounded-full border-2 border-pink-200 mb-4"
              />
              <h2 className="text-xl font-bold mb-1">{exp.title}</h2>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
            </div>

            <div className="flex-1 mb-4 relative">
              <ul
                className={`text-gray-700 text-sm leading-relaxed transition-[max-height] overflow-hidden ${
                  expanded ? "max-h-[500px]" : "max-h-24"
                }`}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i} className="mb-2">
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="text-blue-500 text-sm mt-1 underline"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

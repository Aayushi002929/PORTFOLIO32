import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import nodejs from "../../public/node.png";
import reactjs from "../../public/reactjs.png";

export default function PortFolio() {
  const [expanded, setExpanded] = useState({});

  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Daily Quotes (Chrome Extension)",
      short:
        "Motivational new-tab extension with 1,000+ curated quotes and quick actions.",
      long:
        "Built lightweight React components for instant render, added text-to-speech, one-click copy, and share workflows. Optimized for low memory usage and fast initial paint.",
      link: "https://github.com/Aayushi002929/Daily_Quotes__Extension",
      tags: ["React", "Chrome API", "UX"],
    },
    {
      id: 2,
      logo: reactjs,
      name: "Snippet-App",
      short:
        "Full-stack app to add, save, and organize code snippets with live search.",
      long:
        "Built a responsive UI, syntax-highlight view, and searchable library. Reduced lookup time by ~50% with indexed keys and simple relevance ranking.",
      link: "https://paste-app-iota.vercel.app/",
      tags: ["React", "MongoDB", "Productivity"],
    },
    {
      id: 3,
      logo: nodejs,
      name: "Tourist Reservation System",
      short:
        "C++ console app for auth, booking workflows, and profile management.",
      long:
        "Implements secure login, real-time seat/room allocation, and payment flow simulation. Modular design enables quick extension to new routes and pricing.",
      link: "https://github.com/Aayushi002929/Tourist-Reservation-System-C-",
      tags: ["C++", "DSA", "CLI"],
    },
    {
      id: 4,
      logo: nodejs,
      name: "WanderLust",
      short:
        "Full-stack accommodation app with listings, reviews, ratings, and photos.",
      long:
        "Node.js + Express + MongoDB backend, secure auth, and responsive UI. Community trial showed +50% engagement through rich media and review loops.",
      link: "https://wanderlust-h3v2.onrender.com/",
      tags: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <div name="Projects" className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-6">
        {cardItem.map(({ id, logo, name, short, long, link, tags }) => (
          <div
            key={id}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-rose-200 via-fuchsia-200 to-indigo-200"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:-translate-y-1">
              <div className="px-6 pt-6">
                <div className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt={name}
                    className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                  />
                  <h2 className="text-xl font-extrabold text-gray-900 mt-3 text-center">
                    {name}
                  </h2>
                </div>

                <div className="mt-3 text-sm text-gray-700">
                  <p className="leading-relaxed">{short}</p>
                  <div className={`${expanded[id] ? "block" : "hidden"} mt-2`}>
                    <p className="leading-relaxed">{long}</p>
                  </div>
                  <button
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
                    }
                    className="mt-1 text-[13px] font-semibold text-rose-600 hover:text-rose-700 underline"
                  >
                    {expanded[id] ? "Read less" : "Read more"}
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-rose-50 to-indigo-50 text-gray-700 border border-rose-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 pt-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-500">
                    <FaGithub className="mr-2 text-lg" />
                    Source Code
                  </button>
                </a>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-black/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

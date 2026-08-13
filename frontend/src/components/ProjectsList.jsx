import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import api from "../api";
import { projects as fallbackProjects } from "../data/portfolio";
import ProjectPreview from "./ProjectPreview";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/projects")
      .then((r) => {
        setProjects(
          Array.isArray(r.data) && r.data.length
            ? r.data
            : fallbackProjects
        );
      })
      .catch(() => {
        setProjects(fallbackProjects);
        setError(
          "Showing featured work while the live API is unavailable."
        );
      });
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.14,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 xl:px-0">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Stuff I Built
          </h2>
        </div>

        {/* ================= API ERROR ================= */}
        {/* {error && (
          <p className="mb-8 rounded-xl border border-slate-800 bg-[#121826] px-5 py-4 text-sm text-slate-400">
            {error}
          </p>
        )} */}

        {/* ================= PROJECTS ================= */}
        <div className="space-y-20">

          {projects.slice(0, 4).map((p, index) => (
            <motion.article
              key={p._id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className={`grid items-center gap-8 ${
                p._id === 'krishisetu'
                  ? 'lg:grid-cols-[0.7fr_1.5fr]'
                  : p._id === 'responsive-ui-kit'
                  ? 'lg:grid-cols-[0.85fr_1.35fr]'
                  : 'lg:grid-cols-[1.35fr_0.85fr]'
              }`}
            >

              {/* ================================================= */}
              {/* PROJECT PREVIEW */}
              {/* ================================================= */}

              <div
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#111827]
                  p-2
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  ${
                    p._id === 'krishisetu' || p._id === 'responsive-ui-kit'
                      ? 'lg:order-2'
                      : 'lg:order-1'
                  }
                `}
              >
                <div
                  className="
                    rounded-xl
                    bg-[#151d2c]
                  "
                >
                  <ProjectPreview
                    project={p}
                    compact
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* PROJECT INFORMATION */}
              {/* ================================================= */}

              <div className={`lg:pl-2 ${
                p._id === 'krishisetu' || p._id === 'responsive-ui-kit'
                  ? 'lg:order-1'
                  : 'lg:order-2'
              }`}>

                {/* Category + Check Out */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      border-l-2
                      border-blue-500
                      pl-2
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {p.title}
                  </span>

                  <Link
                    to={`/projects/${p._id}`}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-md
                      border
                      border-slate-700
                      bg-[#0c111b]
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-slate-200
                      transition
                      hover:border-blue-500/60
                      hover:text-blue-400
                    "
                  >
                    Check out
                    <FiArrowUpRight
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                {/* Category */}
                <p className="mb-4 text-sm font-medium text-blue-400">
                  {p.category || "Full Stack"}
                </p>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-300">
                  {p.description}
                </p>

                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {(p.techStack || ["React", "Node"]).map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-slate-700
                        bg-[#090e17]
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-300
                        transition
                        hover:border-blue-500/50
                        hover:text-blue-400
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details */}
                <Link
                  to={`/projects/${p._id}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-400
                    transition
                    hover:text-blue-300
                  "
                >
                  View details
                  <FiArrowUpRight
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= ALL PROJECTS ================= */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-700
              bg-[#111827]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-200
              transition
              hover:border-blue-500/60
              hover:text-blue-400
            "
          >
            View all projects
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

      </div>
    </motion.section>
  );
}
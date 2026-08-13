import React, { useState } from "react";
import {
  FiCode,
  FiGlobe,
  FiServer,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiRefreshCw,
  FiGitBranch,
} from "react-icons/fi";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FiCode,
    skills: [
      {
        name: "JavaScript",
        icon: FiCode,
      },
      {
        name: "SQL",
        icon: FiDatabase,
      },
      {
        name: "C++",
        icon: FiCode,
      },
      {
        name: "Java",
        icon: FiCode,
      },
    ],
  },

  {
    title: "Frontend Development",
    icon: FiGlobe,
    skills: [
      {
        name: "React.js",
        icon: FiCode,
      },
      {
        name: "Next.js",
        icon: FiGlobe,
      },
      {
        name: "Tailwind CSS",
        icon: FiCode,
      },
      {
        name: "HTML/CSS",
        icon: FiCode,
      },
    ],
  },

  {
    title: "Backend Development",
    icon: FiServer,
    skills: [
      {
        name: "Node.js",
        icon: FiServer,
      },
      {
        name: "Express.js",
        icon: FiServer,
      },
      {
        name: "REST API",
        icon: FiDatabase,
      },
      {
        name: "JWT Authentication",
        icon: FiDatabase,
      },
    ],
  },

  {
    title: "Cloud & Deployment",
    icon: FiLayers,
    skills: [
      {
        name: "Render",
        icon: FiCloud,
      },
      {
        name: "Cloud",
        icon: FiServer,
      },
      {
        name: "Docker",
        icon: FiRefreshCw,
      },
      {
        name: "Vercel",
        icon: FiGitBranch,
      },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeData = skillCategories[activeCategory];

  return (
    <motion.section
      id="skills"
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
        amount: 0.16,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-[#0d1422] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 xl:px-0">

        {/* ================= TITLE ================= */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#28a9e0] md:text-4xl">
            Skills
          </h2>
        </div>

        {/* ================= CATEGORY TABS ================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-1
            rounded-lg
            bg-[#182335]
            p-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;

            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }
                `}
              >
                <Icon
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* ================= SKILLS CONTAINER ================= */}
        <motion.div
          key={activeData.title}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            mt-8
            rounded-lg
            border
            border-slate-500
            bg-[#111a2a]
            p-6
            md:p-8
          "
        >
          {/* Category Title */}
          <h3 className="mb-7 text-xl font-bold text-blue-400 md:text-[21px]">
            {activeData.title}
          </h3>

          {/* ================= SKILL CARDS ================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeData.skills.map((skill, index) => {
              const SkillIcon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    h-[118px]
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-500
                    bg-[#1a2536]
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:border-blue-500/70
                    hover:bg-[#1d2a3e]
                  "
                >
                  {/* Icon Circle */}
                  <div
                    className="
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1c3153]
                      text-blue-400
                    "
                  >
                    <SkillIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Skill Name */}
                  <p className="text-base font-semibold text-slate-100">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= ADDITIONAL SECTION ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-12
            rounded-lg
            border
            border-blue-900/60
            bg-[#111a2a]
            px-6
            py-7
            text-center
          "
        >
          <h3 className="text-xl font-bold text-white md:text-[21px]">
            AI & Developer Tooling
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "MongoDB",
              "Mongoose",
              "Git",
              "GitHub",
              "Postman",
              "Razorpay",
              "Cloudinary",
              "VS Code",
            ].map((tool) => (
              <span
                key={tool}
                className="
                  rounded-full
                  border
                  border-slate-600
                  bg-[#182335]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition
                  hover:border-blue-500/60
                  hover:text-blue-400
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ================= PROBLEM SOLVING ================= */}
        <p className="mt-8 text-center text-sm text-slate-400">
          <span className="font-semibold text-slate-200">
            Problem solving:
          </span>{" "}
          800+ DSA problems solved across coding platforms.
        </p>
      </div>
    </motion.section>
  );
}
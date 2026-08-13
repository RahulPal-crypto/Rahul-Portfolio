import React from "react";
import { FiBookOpen, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const educationItems = [
  {
    title: "B.Tech Computer Science and Engineering",
    institution: "Maharana Pratap Group Of Institutions",
    date: "Sep 2023 - Jul 2027",
    detail: "CGPA: 8.5/10.0",
  },
  {
    title: "Intermediate Education",
    institution: "Heritage International School",
    date: "Apr 2020 - Mar 2022",
    detail: "Percentage: 73%",
  },
  {
    title: "Secondary Schooling",
    institution: "Heritage International School",
    date: "Apr 2019 - Mar 2020",
    detail: "Percentage: 85%",
  },
];

const coreAreas = [
  "AI Engineering",
  "Problem Solver",
  "Full-Stack Web Development",
  "Backend APIs",
  "React + Next.js",
  "Node.js + Express",
  "SQL",
  "MongoDb",
  "PostgreSQL",
  "AWS EC2 & S3",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050912] py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 xl:px-0">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#28a9e0] md:text-4xl">
            My Professional Side
          </h2>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >

          {/* ================= LEFT CARD ================= */}
          <div
            className="
              rounded-xl
              border border-slate-600
              bg-[#202b3b]
              p-6
              md:p-8
              shadow-[0_20px_60px_rgba(15,23,42,0.25)]
            "
          >

            {/* About Text */}
            <p className="text-base leading-6 text-slate-100 md:text-[17px]">
              I am a developer who works on making software systems that can
              grow and make a difference. I have worked on both full-stack
              development and applied AI. I like using my strong backend
              skills and modern web technologies to solve real-world problems.
              I’m currently looking for new opportunities where I can apply my programming skills, contribute to real-world projects, and grow as a software developer.

            </p>

            {/* Contact / Education Information */}
            <div className="mt-7 space-y-5">

              {/* Email */}
              <div className="flex items-start gap-4">
                <FiMail
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-semibold text-slate-50">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    rpal52410@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <FiMapPin
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-semibold text-slate-50">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Uttar Pradesh, Kanpur Nagar, Chaubepur
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-4">
                <FiBookOpen
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-semibold text-slate-50">
                    Education
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    B.Tech in Computer Science
                  </p>
                </div>
              </div>
            </div>

            {/* Core Areas */}
            <div className="mt-7">
              <p className="mb-3 text-base font-semibold text-slate-100">
                Core Areas
              </p>

              <div className="flex flex-wrap gap-2">
                {coreAreas.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex
                      rounded-full
                      border border-blue-500/60
                      bg-blue-500/5
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-blue-400
                      transition
                      duration-200
                      hover:border-blue-400
                      hover:bg-blue-500/10
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT EDUCATION ================= */}
          <aside className="space-y-5">

            {/* Education Heading */}
            <div>
              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              {educationItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(96,165,250,0.6)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    rounded-xl
                    border border-slate-600
                    bg-[#111827]
                    p-5
                    md:p-6
                  "
                >
                  {/* Degree */}
                  <h4 className="text-lg font-bold leading-6 text-slate-50">
                    {item.title}
                  </h4>

                  {/* Institution */}
                  <p className="mt-2 text-base font-medium text-blue-400">
                    {item.institution}
                  </p>

                  {/* Date + Score */}
                  <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-slate-400">
                      {item.date}
                    </p>

                    <p className="text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
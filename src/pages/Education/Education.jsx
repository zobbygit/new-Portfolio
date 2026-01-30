import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import AnimatedGrid from "@/components/AnimatedGrid";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

const educationData = [
  {
    degree: "Secondary Education (ICSE)",
    school: "Ling Liang High School, Kolkata",
    mascot: "📘",
    year: "2020",
    achievements: ["Board: ICSE", "Science Stream"],
    skills: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer",
      "English"
    ],
    description:
      "Completed Class 10 under the ICSE board with a strong foundation in science and mathematics, developing analytical thinking and problem-solving skills.",
  },
  {
    degree: "Higher Secondary Education (ISC)",
    school: "Ling Liang High School, Kolkata",
    mascot: "📗",
    year: "2022",
    achievements: ["Board: ISC", "Stream: PCMB"],
    skills: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "Hindi",
    ],
    description:
      "Completed Class 12 under the ISC board with PCMB, strengthening core concepts in science, logical reasoning, and academic discipline.",
  },
{
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    school: "Narula Institute of Technology",
    mascot: "🎓",
    year: "June 2022 – June 2026",
    achievements: ["Undergraduate Program", "Information Technology"],
    skills: [
      "Data Structures & Algorithms",
      "Web Development",
      "Databases",
      "Oops",
      "Operating Systems",
      "Computer Networks",
    ],
    description:
      "Pursuing a Bachelor’s degree in Information Technology,with data structures and algorithms, and core software engineering principles. Gaining hands-on experience in building scalable applications and understanding system-level concepts.",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <div className="inline-block group">
  <h2
    className="
      text-4xl md:text-5xl font-bold
      bg-gradient-to-r from-teal-400 to-blue-500
      bg-clip-text text-transparent
      mb-4
      relative
      transition-all duration-500
      group-hover:scale-[1.03]
    "
  >
    Educational Journey
  </h2>

  {/* Glass underline */}
  <div
    className="
      mx-auto h-1 w-32
      rounded-full
      bg-gradient-to-r from-teal-400/70 to-blue-500/70
      backdrop-blur-md
      transition-all duration-500
      group-hover:w-44
    "
  ></div>

  <p
    className="
      mt-6
      text-gray-300
      max-w-2xl
      mx-auto
      text-lg
      backdrop-blur-sm
      bg-white/5
      border border-white/10
      rounded-xl
      px-6 py-4
      transition-all duration-500
      group-hover:bg-white/10
      group-hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.4)]
    "
  >
    Discover how academic excellence shapes innovative thinking and
    professional growth.
  </p>
</div>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
          <EducationLoader/>
          <Badge/>
          
    </section>
  );
};

export default EducationSection;

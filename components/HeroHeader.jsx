"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const HeroHeader = ({ title, description }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`p-4 flex h-[calc(100vh-0rem)] ${
        isHomePage
          ? "max-h-[calc(890px-0rem)] sm:max-h-[calc(1080px-0rem)]"
          : "max-h-[calc(620px-0rem)] sm:max-h-[calc(700px-0rem)]"
      }`}
    >
      <div className="bg-gradient-to-br from-sec via-[#0D1F70] to-dark flex relative flex-1 rounded-3xl overflow-hidden maxW shadow-2xl">
        {/* Modern radial glow matching Alta Vista colors (Deep Sapphire Navy + Sky Cyan) */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_25%,#0090D0_0,transparent_45%),radial-gradient(circle_at_80%_75%,#38BDF8_0,transparent_45%)]"></div>
        
        {/* Subtle geometric grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#62CBF5_1px,transparent_1px),linear-gradient(to_bottom,#62CBF5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative text-light z-10 flex-1 flex flex-col items-center justify-center gap-5 px-6">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.1, duration: 0.6 },
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-sky-300/30 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-main animate-pulse"></span>
            Islamic Alta Vista School System • Sargodha
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.8,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{ textShadow: "0 4px 25px rgba(0,0,0,0.35)" }}
            className="h1 text-center text-white"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.h4
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
              className="text-center max-w-[min(62ch,85%)] leading-relaxed text-sm sm:text-base md:text-lg text-sky-100 font-normal"
            >
              {description}
            </motion.h4>
          )}

          {isHomePage && <Sections />}
        </div>
      </div>
    </header>
  );
};

const Sections = () => {
  const sections = [
    {
      title: "About Us",
      icon: "/icons/About.svg",
      link: "#About",
    },
    {
      title: "Milestones",
      icon: "/icons/Timeline.svg",
      link: "#Timeline",
    },
    {
      title: "Student Life",
      icon: "/icons/Curriculum.svg",
      link: "#Curriculum",
    },
    {
      title: "Admissions",
      icon: "/icons/LMS.svg",
      link: "#LMS",
    },
    {
      title: "Contact",
      icon: "/icons/Contact.svg",
      link: "#Contact",
    },
  ];

  const handleSectionClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.9,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-10 sm:h-16 px-2 sm:px-6 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-white text-dark shadow-2xl"
    >
      <div className="z-[-1] rotate-90 absolute bottom-0 left-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>
      <div className="z-[-1] absolute bottom-0 right-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>

      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative w-12 sm:w-24 h-full cursor-pointer"
            onClick={() => handleSectionClick(item.link)}
          >
            <div className="w-11 sm:w-16 -top-6 sm:-top-8 aspect-square group-hover:bg-main bg-sec border-2 border-white transition-all duration-300 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full shadow-lg group-hover:scale-110">
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt="icon"
                priority
                className="w-[55%] filter brightness-0 invert"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-xs sm:text-sm font-medium leading-tight text-slate-700 group-hover:text-sec transition-colors">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;

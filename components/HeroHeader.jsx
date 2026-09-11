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
      <div className="bg-sec flex relative flex-1 rounded-3xl overflow-hidden maxW">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#d7a51b_0,transparent_35%),radial-gradient(circle_at_85%_85%,#174b83_0,transparent_40%)]"></div>
        <div className="relative text-light z-10 flex-1 flex flex-col items-center justify-center gap-4 px-6">
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
            style={{ textShadow: "0 0 1rem #00000020" }}
            className="h1 text-center"
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
              style={{ textShadow: "0 0 .5rem #00000020" }}
              className="text-center max-w-[min(54ch,85%)] leading-normal text-sm sm:text-base"
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
      title: "About",
      icon: "/icons/About.svg",
      link: "#About",
    },
    {
      title: "Journey",
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
          delay: 1,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-9 sm:h-16 px-2 sm:px-5 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-light text-dark"
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
            <div className="w-11 sm:w-16 -top-6 sm:-top-8 aspect-square group-hover:bg-main bg-sec transition-all duration-300 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full">
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt="icon"
                priority
                className="w-[60%]"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-sm leading-tight">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;

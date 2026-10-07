"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const Steps = [
    {
      title: "Our Islamic & Modern Philosophy",
      detail: [
        "At Islamic Alta Vista School System, we believe in harmonizing spiritual grounding with intellectual brilliance. We view education through the lens of Quranic wisdom and modern scientific understanding.",
        "Our educational culture instills strong discipline, sincere manners (Akhlaq), and critical curiosity so students grow into upright Muslims and successful global contributors.",
      ],
    },
    {
      title: "Our Academic & Tarbiyah Framework",
      detail: [
        "Our syllabus merges national curriculum benchmarks with Nazra Quran, Tajweed, basic Arabic comprehension, and interactive STEM education.",
        "We prioritize concept mastery over memorization, cultivating inquisitive minds through laboratory experiments, project tasks, and structured student participation.",
      ],
    },
    {
      title: "Holistic Character & Leadership",
      detail: [
        "Through co-curricular societies, Qirat & Naat competitions, declamations, sports, and community outreach, our students build confidence, empathy, and leadership acumen.",
        "Dedicated student counselling and mentoring sessions ensure emotional wellbeing, academic focus, and strong character development throughout school life.",
      ],
    },
  ];

  const container = useRef();
  const progressLine = useRef();
  const progressRedLine = useRef();
  const iconsArray = useRef([]);
  const [isActive, setIsActive] = useState(-1);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      function setProgressHeight(prog) {
        if (progressRedLine.current && prog) {
          gsap.to(progressRedLine.current, {
            height: `${100 * prog}%`,
            duration: 0.1,
          });
        }
      }

      ScrollTrigger.create({
        trigger: container.current,
        start: `top 50%`,
        end: `bottom 60%`,
        animation: timeline,
        scrub: 1,
        onUpdate: (self) => {
          let progress = self.progress;
          let bottomPos = 0;
          setProgressHeight(progress);

          if (progressLine.current) {
            const progressLineT =
              progressLine.current.getBoundingClientRect().top;

            const progressLineH =
              progressLine.current.getBoundingClientRect().height * progress;

            bottomPos = progressLineH + progressLineT;
            if (iconsArray.current) {
              iconsArray.current.forEach((iconRef, index) => {
                if (iconRef) {
                  const topPos = iconRef.getBoundingClientRect().top;
                  if (bottomPos > topPos && index > isActive) {
                    setIsActive(index);
                  }
                }
              });
            }
          }
        },
      });
    },
    { scope: container, dependencies: [isActive] }
  );

  return (
    <section
      id="Timeline"
      ref={container}
      className="maxWSec flex flex-col lg:flex-row py-12"
    >
      <div className="w-full lg:w-1/3 flex-shrink-0 px-6 py-8 sm:px-12 sm:py-12 relative">
        <div className="sticky top-28 flex flex-col max-lg:items-center max-lg:text-center">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sec font-semibold text-xs uppercase tracking-wider mb-3 w-fit">
            Academic Roadmap
          </span>
          <h2 className="h2 w-fit">
            ALTA VISTA <br className="max-sm:hidden" />
            <span className="text-sec">
              in Sargodha
            </span>
          </h2>
          <p className="text-gray text-sm sm:text-base mt-4 max-w-sm">
            Empowering students with Islamic values and world-class academic preparation in Sargodha.
          </p>
        </div>
      </div>

      <div className="flex-grow flex px-4 lg:px-0">
        <div className="w-9 flex-shrink-0 p-4 lg:py-12 flex justify-center">
          <div
            ref={progressLine}
            className="relative w-1.5 rounded-lg bg-sky-100 my-1 overflow-hidden"
          >
            <div
              ref={progressRedLine}
              className="absolute w-full left-0 top-0 bg-gradient-to-b from-main via-sec to-secD"
            ></div>
          </div>
        </div>

        <div className="flex-grow p-4 lg:p-12 flex flex-col gap-8 sm:gap-16">
          {Steps.map((item, i) => {
            return (
              <div key={i} className="relative">
                <div
                  ref={(el) => (iconsArray.current[i] = el)}
                  className={`w-5 aspect-square z-10 absolute -left-6 lg:-left-14 -translate-x-full top-0 bg-main border-solid rounded-full flex justify-center items-center flex-col transition-all duration-200 shadow-md ${
                    isActive >= i && isActive !== -1
                      ? "border-sec border-4 scale-125 bg-sec"
                      : "border-white border-2"
                  }`}
                ></div>

                <div className="flex bg-white p-6 sm:p-8 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="h3 w-full text-sec">{item.title}</h3>
                    <div className="text-slate-600 space-y-3 text-sm sm:text-base leading-relaxed w-full">
                      {item.detail.map((detailText, detailIndex) => {
                        return (
                          <p key={detailIndex}>
                            {detailText}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;

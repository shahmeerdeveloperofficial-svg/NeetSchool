"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Board of Governance",
    title: "Strategic Vision & Tarbiyah Framework",
    description:
      "Steering the institution towards contemporary academic brilliance infused with uncompromised Islamic values.",
    tag: "Governance",
  },
  {
    name: "Principal & Academic Heads",
    title: "Curricular Mastery & Classroom Excellence",
    description:
      "Ensuring rigorous conceptual teaching standards, student safety, and engaging activity-based learning.",
    tag: "Academics",
  },
  {
    name: "Quran & Tarbiyah Department",
    title: "Tajweed, Character Building & Akhlaq",
    description:
      "Nurturing daily Sunnah practices, correct recitation, and ethical citizenship in every student.",
    tag: "Tarbiyah",
  },
  {
    name: "STEM & Science Faculty",
    title: "Laboratory Practice & Digital Literacy",
    description:
      "Dedicated subject specialists guiding students through hands-on sciences, mathematics, and computing.",
    tag: "STEM Faculty",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="maxWSec px-6 sm:px-12 py-16 flex flex-col gap-12"
    >
      <div className="text-center space-y-3">
        <div className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sec font-semibold text-xs sm:text-sm tracking-wider uppercase">
          Academic & Spiritual Mentors
        </div>
        <h2 className="h2 text-center">
          Our Dedicated <span className="text-sec">Leadership &</span>{" "}
          <span className="text-main">Faculty</span>
        </h2>
        <p className="text-gray text-sm sm:text-base max-w-2xl mx-auto">
          Passionate educators, Islamic scholars, and subject specialists committed to mentoring the youth of Sargodha.
        </p>
      </div>

      <div ref={sliderRef} className="w-full overflow-x-hidden">
        <div className="flex gap-6 w-max py-2">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[320px] sm:min-w-[360px] flex flex-col items-center gap-4"
            >
              <div className="h-[26rem] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sec via-[#0D1F70] to-[#060E36] p-6 text-light flex flex-col justify-between shadow-xl relative border border-sky-300/20 group">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-main/90 text-white font-bold text-xs uppercase tracking-wider">
                    {member.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 p-1 backdrop-blur flex items-center justify-center">
                    <Image
                      src="/altavistalogo.png"
                      width={40}
                      height={40}
                      alt="Alta Vista"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">
                    Islamic Alta Vista School System
                  </p>
                  <h4 className="font-berlin text-2xl leading-tight mt-2 text-white font-bold">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-lg text-sec">{member.name}</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

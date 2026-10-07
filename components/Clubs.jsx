"use client";
import Tag from "./ui/Tag";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";

const List = [
  {
    slug: "/SocietyAndClubs",
    title: "Qirat, Naat & Islamic Society",
    desc: "Tajweed mastery, Quranic recitations, spiritual anthems, and Seerat-un-Nabi events.",
    tag: "Islamic Heritage",
  },
  {
    slug: "/SocietyAndClubs",
    title: "STEM & Robotics Academy",
    desc: "Hands-on coding, science experiments, computational logic, and technology projects.",
    tag: "Science & Tech",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Bilingual Declamations & Debates",
    desc: "English & Urdu parliamentary debates, speech rhetoric, and podium poise.",
    tag: "Leadership",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Athletics & Sports Club",
    desc: "Cricket, football, badminton, athletics, gymnastics, and physical stamina building.",
    tag: "Physical Fitness",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Islamic Arts & Calligraphy Guild",
    desc: "Arabic calligraphy, painting, creative design, and annual arts exhibitions.",
    tag: "Arts & Culture",
  },
];

const Clubs = ({ direction = "left", speed = 1 }) => {
  const marquee = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const xPercent = useRef(0);

  const ArrayData = [...List, ...List, ...List];

  useEffect(() => {
    if (!first.current || !second.current) return;

    let rafId;

    const animate = () => {
      if (!first.current || !second.current) return;

      if (direction === "left") {
        if (xPercent.current < -100) xPercent.current = 0;
        xPercent.current -= speed / 10;
      } else {
        if (xPercent.current > 0) xPercent.current = -100;
        xPercent.current += speed / 10;
      }

      gsap.set([first.current, second.current], {
        xPercent: xPercent.current,
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [direction, speed]);

  return (
    <section
      id="Curriculum"
      className="maxW sm:px-12 py-16 flex gap-12 flex-col bg-sky-50/40"
    >
      <div className="text-center space-y-3">
        <div className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sec font-semibold text-xs sm:text-sm tracking-wider uppercase">
          Co-Curriculars & Enrichment
        </div>
        <h2 className="max-sm:px-4 h2 text-center">
          Student Life at <span className="text-sec">Islamic Alta Vista</span>{" "}
          <span className="text-main">Sargodha</span>
        </h2>
        <p className="text-gray text-sm sm:text-base max-w-2xl mx-auto px-4">
          A dynamic spectrum of clubs and co-curricular pursuits nurturing faith, leadership, and diverse talents.
        </p>
      </div>

      <div className="flex gap-4 text-light">
        <section className="w-full overflow-hidden py-2 sm:py-6">
          <div
            ref={marquee}
            className="h-fit w-fit flex-nowrap relative flex border-y border-sky-200 py-4"
          >
            <div
              ref={first}
              className="h-full flex-1 flex w-fit flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-sec/20 to-secD/30"
                        : "bg-gradient-to-br from-main/20 to-skyBrand/30"
                    } w-[240px] sm:w-[340px] lg:w-[420px] aspect-[.95] sm:aspect-[1.1] rounded-3xl mx-2 sm:mx-3 overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-sec via-[#0D1F70] to-[#060E36]"
                        : "bg-gradient-to-br from-main via-[#0070A4] to-[#0A1860]"
                    } rounded-2xl p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full border-[18px] border-white/80" />
                      <div className="absolute bottom-10 left-6 h-24 w-24 rounded-full bg-white/20" />
                      <div className="absolute bottom-6 right-10 h-16 w-16 rounded-full border-[10px] border-white/60" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <Tag><span className="text-white text-xs font-bold uppercase">{item.tag}</span></Tag>
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-2xl sm:text-4xl leading-[1.05] text-white font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm text-sky-100 leading-relaxed max-w-[28ch]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>

            <div
              ref={second}
              className="absolute left-full top-0 h-full flex w-full flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-sec/20 to-secD/30"
                        : "bg-gradient-to-br from-main/20 to-skyBrand/30"
                    } w-[240px] sm:w-[340px] lg:w-[420px] aspect-[.95] sm:aspect-[1.1] rounded-3xl mx-2 sm:mx-3 overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-sec via-[#0D1F70] to-[#060E36]"
                        : "bg-gradient-to-br from-main via-[#0070A4] to-[#0A1860]"
                    } rounded-2xl p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full border-[18px] border-white/80" />
                      <div className="absolute bottom-10 left-6 h-24 w-24 rounded-full bg-white/20" />
                      <div className="absolute bottom-6 right-10 h-16 w-16 rounded-full border-[10px] border-white/60" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <Tag><span className="text-white text-xs font-bold uppercase">{item.tag}</span></Tag>
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-2xl sm:text-4xl leading-[1.05] text-white font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm text-sky-100 leading-relaxed max-w-[28ch]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clubs;

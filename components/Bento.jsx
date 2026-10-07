"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const Bento = () => {
  const News = [
    {
      title: "Admissions Open for Session 2026-2027 in Sargodha",
      url: "/OnlineAdmission",
      tag: "Admissions",
    },
    {
      title: "Nazra Quran, Tajweed & Tarbiyah Integrated Syllabi",
      url: "/Curriculum/EarlyYears",
      tag: "Islamic Wing",
    },
    {
      title: "Modern STEM Labs, Robotics & Digital Computing",
      url: "/Curriculum/EarlyYears",
      tag: "Academics",
    },
    {
      title: "Active Co-Curriculars: Qirat, Naat, Debate & Sports",
      url: "/SocietyAndClubs",
      tag: "Student Life",
    },
  ];

  return (
    <section
      id="About"
      className="maxWSec px-6 sm:px-12 py-16 flex gap-12 flex-col"
    >
      <div className="text-center space-y-3">
        <div className="inline-block px-4 py-1 rounded-full bg-sky-50 text-main font-semibold text-xs sm:text-sm tracking-wider uppercase border border-sky-200">
          Faith • Knowledge • Character
        </div>
        <h2 className="h2">
          Welcome to <span className="text-sec">Islamic Alta Vista</span>{" "}
          <span className="text-main">School System</span>
        </h2>
        <p className="text-gray text-base sm:text-lg max-w-3xl mx-auto">
          Combining Quranic values, Islamic moral tarbiyah, and top-tier contemporary academic excellence for the youth of Sargodha.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {/* Mission Card */}
        <div className="sm:[grid-area:1/1/2/3] group/card p-8 rounded-3xl bg-gradient-to-br from-sec via-[#0D1F70] to-[#060E36] text-light relative overflow-hidden shadow-xl">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-96 translate-x-[5%] translate-y-[15%] opacity-10 filter invert"
          />
          <div className="flex flex-col gap-5 relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-main text-white font-bold text-xs uppercase tracking-wider shadow">
                Our Sacred Mission
              </span>
            </div>
            <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
              Our mission is to nurture intellectually distinguished, morally upright, and socially proactive Muslims equipped with modern scientific acumen and unwavering Islamic convictions. We are committed to:
            </p>
            <ul className="leading-relaxed list-disc list-inside space-y-2 text-sky-100 text-sm sm:text-base">
              <li>Providing high-standard English-medium education with concept-driven clarity</li>
              <li>Instilling Tajweed-ul-Quran, daily Duas, and Islamic Tarbiyah in daily routines</li>
              <li>Fostering critical thinking, STEM competencies, and digital technological literacy</li>
              <li>Nurturing humility, truthfulness, discipline, and compassionate service to humanity</li>
              <li>Partnering closely with families to establish a cohesive Islamic home-school culture</li>
            </ul>

            <div className="flex justify-end pt-2">
              <Link href={"/OnlineAdmission"}>
                <Button btnType="main">
                  <span>Apply for Admission</span>
                  <svg
                    className="h-auto w-4"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                      fill="#fff"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights Card */}
        <div className="sm:[grid-area:2/1/3/2] group/card flex-1 min-h-72 p-8 rounded-3xl bg-white border border-sky-100 text-dark relative overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="speaker"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-36 translate-x-[5%] translate-y-[5%] opacity-10"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sec font-bold text-xs uppercase tracking-wider border border-sky-200">
                Sargodha Campus Highlights
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {News.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.url}
                    name="detail link"
                    className="group/item p-2.5 rounded-xl hover:bg-sky-50/50 text-slate-800 text-sm sm:text-base flex items-center justify-between gap-3 border border-transparent hover:border-sky-200 transition-all duration-200"
                  >
                    <span className="font-medium group-hover/item:text-sec transition-colors">{item.title}</span>
                    <span className="text-main group-hover/item:translate-x-1 transition-transform">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emblem Showcase Card */}
        <div className="sm:[grid-area:2/2/3/3] xl:[grid-area:1/3/3/4] min-h-72 rounded-3xl bg-gradient-to-br from-sec via-[#0D1F70] to-[#0090D0] text-light overflow-hidden relative flex flex-col items-center justify-center p-8 shadow-xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#62CBF5_0,transparent_70%)]"></div>
          <div className="text-center relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2 shadow-2xl mb-4 border-4 border-main flex items-center justify-center">
              <Image
                src="/altavistalogo.png"
                width={200}
                height={200}
                alt="Islamic Alta Vista Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <p className="text-white font-berlin text-3xl sm:text-4xl font-bold mb-1 tracking-wide">
              ALTA VISTA
            </p>
            <p className="text-sky-200 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4">
              Islamic School • Sargodha
            </p>
            <p className="text-sky-100 text-xs sm:text-sm max-w-xs leading-relaxed">
              &quot;Enlightening Minds with Islamic Wisdom & Modern Academic Mastery.&quot;
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="sm:[grid-area:3/1/4/3] xl:[grid-area:2/2/3/3] group/card min-h-72 p-8 rounded-3xl bg-gradient-to-br from-main to-sec text-white relative overflow-hidden shadow-xl">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[5%] translate-y-[5%] opacity-20 filter invert"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white font-bold text-xs uppercase tracking-wider w-fit border border-white/30">
              Our Vision
            </span>
            <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
              Islamic Alta Vista School System envisions establishing an educational paradigm where Islamic ethics, Quranic illumination, and world-class scientific learning coalesce to nurture the visionary Muslim leaders of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "Contact & Campus",
      content: [
        { title: "Sargodha Main Campus", src: "/ContactUs" },
        { title: "Admissions Desk", src: "/OnlineAdmission" },
        { title: "Tarbiyah & Counselling", src: "/StudentCounselling" },
      ],
    },
    {
      title: "About School",
      content: [
        { title: "About Islamic Alta Vista", src: "/AboutUs" },
        { title: "Chairman's Message", src: "/ChairmanMessage" },
        { title: "Director's Message", src: "/DirectorMessage" },
        { title: "Our Islamic Philosophy", src: "/OurPhilosophy" },
        { title: "School Policies", src: "/AboutUs/Policies" },
      ],
    },
    {
      title: "Admissions & Academics",
      content: [
        { title: "Online Admission Form", src: "/OnlineAdmission" },
        { title: "Curriculum & Tarbiyah", src: "/Curriculum/EarlyYears" },
        { title: "Societies & Clubs", src: "/SocietyAndClubs" },
        { title: "Career Opportunities", src: "/Careers" },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-dark text-light w-full fixed -bottom-0.5 z-10 border-t border-sky-900/50"
      >
        <div className="maxWSec px-6 sm:px-12 py-8 sm:py-12 gap-8 sm:gap-12 flex max-lg:flex-col justify-between w-full">
          <div className="flex flex-col gap-5 max-sm:items-center max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg flex items-center justify-center">
                <Image
                  src="/altavistalogo.png"
                  width={200}
                  height={200}
                  alt="Islamic Alta Vista School System logo"
                  priority
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-berlin font-bold text-2xl text-white leading-none">
                  ALTA VISTA
                </span>
                <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                  Islamic School • Sargodha
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-sm:text-center">
              Dedicated to harmonizing Quranic illumination, Islamic values, and cutting-edge academic excellence for the future generation of Sargodha.
            </p>

            <div className="flex gap-3">
              <Link
                href="/OnlineAdmission"
                className="inline-flex justify-center rounded-xl bg-main px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainD transition shadow-lg"
              >
                Apply Online
              </Link>
              <Link
                href="/ContactUs"
                className="inline-flex justify-center rounded-xl bg-sec border border-sky-400/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-secD transition"
              >
                Contact Campus
              </Link>
            </div>
          </div>

          <div className="flex max-sm:flex-col items-start flex-grow lg:max-w-[65%] gap-6 sm:gap-8 justify-between">
            {Links.map((item, index) => (
              <div key={index} className="flex-1 text-slate-400">
                <h5 className="font-berlin font-bold text-lg sm:text-xl text-white mb-3 border-b border-sky-800/60 pb-2">
                  {item.title}
                </h5>
                <div className="flex flex-col gap-2">
                  {item.content.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.src}
                      target={subItem.blank ? "_blank" : "_self"}
                      rel={subItem.blank ? "noopener noreferrer" : ""}
                      className="hover:text-main transition-colors text-sm"
                    >
                      <LinkEffect noicon text={subItem.title} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-4 border-sky-950 bg-black/40">
          <div
            id="social"
            className="maxWSec text-xs sm:text-sm flex flex-wrap justify-between items-center px-6 sm:px-12 gap-4 text-slate-400"
          >
            <div>© 2026 Islamic Alta Vista School System, Sargodha. All Rights Reserved.</div>

            <div className="flex gap-4 items-center text-lg text-slate-300">
              <Link href="/ContactUs" className="hover:text-main transition-colors"><FaFacebook /></Link>
              <Link href="/ContactUs" className="hover:text-main transition-colors"><FaInstagram /></Link>
              <Link href="/ContactUs" className="hover:text-main transition-colors"><FaYoutube /></Link>
              <Link href="/ContactUs" className="hover:text-main transition-colors"><FaLinkedin /></Link>
              <Link href="/ContactUs" className="hover:text-main transition-colors"><FaXTwitter /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

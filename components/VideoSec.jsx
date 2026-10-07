import React from "react";
import Button from "./ui/Button";

const VideoSec = () => {
  return (
    <section className="p-4 min-h-[34rem] w-full">
      <div
        className="w-full min-h-[32rem] relative overflow-hidden rounded-3xl maxW bg-gradient-to-br from-sec via-[#0D1F70] to-dark shadow-2xl"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_80%_20%,#0090D0_0,transparent_45%),radial-gradient(circle_at_20%_80%,#38BDF8_0,transparent_40%)]"></div>
        <div className="min-h-[32rem] relative z-20 flex flex-col justify-center items-center gap-5 text-light px-6 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-sky-300/30 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white shadow-lg">
            <span className="w-2 h-2 rounded-full bg-main"></span>
            Transformative Islamic Education
          </div>
          <h1
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
            className="h1 text-center text-white"
          >
            Faith, Knowledge, <br />
            <span className="text-main">& Leadership.</span>
          </h1>
          <h4
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
            className="mb-4 text-center max-w-[min(58ch,85%)] leading-relaxed text-sm sm:text-base md:text-lg text-sky-100"
          >
            Islamic Alta Vista School System Sargodha provides learners with cutting-edge academic facilities, dedicated Quran & Tarbiyah mentors, and an inspiring campus culture.
          </h4>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="/OnlineAdmission">
              <Button btnType="main">
                Apply for Admission
              </Button>
            </a>
            <a href="/ContactUs">
              <Button btnType="sec">
                Contact Campus Desk
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;

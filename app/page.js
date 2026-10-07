import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import Team from "@/components/Team";
import About from "@/components/About";

const Pipeline = dynamic(() => import("../components/Pipeline"));
const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const Clubs = dynamic(() => import("../components/Clubs"));
const VideoSec = dynamic(() => import("../components/VideoSec"));
const AccessLMS = dynamic(() => import("../components/AccessLMS"));
const Stats2 = dynamic(() => import("../components/Stats2"));

export default function Home() {
  return (
    <main className="bg-sky-50/30">
      <HeroHeader
        title={
          <>
            ISLAMIC ALTA VISTA <br />
            <span className="text-main">SCHOOL SYSTEM</span>
          </>
        }
        description="A premier center of Islamic moral education, Quranic tarbiyah, and modern academic distinction in Sargodha."
      />
      <Bento />
      <Marquee
        direction={"right"}
        speed={0.25}
        List={[
          "★ Admissions Open for Session 2026-2027 in Sargodha",
          "★ Quranic Tajweed, Nazra & Tarbiyah Integrated Program",
          "★ Modern STEM Science & Computer Laboratories",
          "★ Playgroup, Montessori, Primary & Middle Wings",
          "★ Character Mentorship & Qirat / Naat / Debate Societies",
        ]}
      />
      <Pipeline />
      <About />
      <Clubs direction={"right"} speed={0.2} />
      <VideoSec />
      <Team />
      <AccessLMS />
      <Stats2 />
    </main>
  );
}

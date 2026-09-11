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
    <main>
      <HeroHeader
        title={
          <>
            NEET School <br /> System
          </>
        }
        description="A purposeful learning environment where strong academics, character building, confidence, and student wellbeing grow together."
      />
      <Bento />
      <Marquee
        direction={"right"}
        speed={0.2}
        List={[
          "Admissions open for motivated learners in Pakpattan.",
          "A balanced school experience built on values, confidence, and academic growth.",
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

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurPhilosophy = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "The Islamic Alta Vista Educational Philosophy",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System, our educational philosophy rests upon the eternal Quranic principle that true knowledge enlightens the soul and refines human conduct. We reject the false dichotomy between worldly sciences and religious ethics; both are essential dimensions of a complete education.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 1: Quranic Foundation & Character Tarbiyah",
      },
      {
        type: "p",
        text: "We weave Quranic recitation with proper Tajweed, daily Duas, and Sunnah etiquette into the school day so that Islamic values become natural personal habits.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 2: Inquiry-Based Scientific Rigor",
      },
      {
        type: "p",
        text: "We teach Mathematics, Science, and Languages through conceptual exploration, experimentation, and critical questioning, developing keen analytical intellects.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 3: Empathy, Discipline & Social Service",
      },
      {
        type: "p",
        text: "We train our students to be compassionate community builders who respect their elders, care for the vulnerable, and practice justice and truthfulness in every sphere of life.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Pillar 4: Supportive Triad: Student, Educator, Parent",
      },
      {
        type: "p",
        text: "We believe a child's character and intellect flourish best when parents and teachers work together in mutual trust, consistent feedback, and shared spiritual purpose.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Our Philosophy"}
        description="Understanding our core philosophy of faith, intellect, and character in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurPhilosophy;

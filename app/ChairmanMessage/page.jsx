import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ChairmanMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Chairman's Message",
      },
      {
        type: "p",
        text: "Dear students, parents, and well-wishers,",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Welcome to NEET School System. We believe education should shape both the mind and the character of a child. Our aim is to provide a school environment where students feel safe, motivated, and guided toward meaningful learning.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We are committed to maintaining strong academic standards while also nurturing discipline, honesty, confidence, and respect. Every child deserves individual attention and the opportunity to grow through quality teaching and sincere mentorship.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "At NEET School System, we value our partnership with parents and believe that lasting student success is built when school and home work together. We look forward to supporting your child's progress with care and dedication.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "With best wishes,",
      },
      {
        type: "p",
        text: "Chairman",
      },
      {
        type: "p",
        text: "NEET School System",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Chairman's Message"} description="NEET School System" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ChairmanMessage;

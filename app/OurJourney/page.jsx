import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurJourney = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "The Journey of Islamic Alta Vista School System",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System was established in Sargodha with a distinct and noble ambition: to create an educational institution that offers the highest standard of contemporary English-medium schooling without compromising Islamic identity and moral values.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Foundations in Sargodha",
      },
      {
        type: "p",
        text: "From our first academic session, we set out to build a safe, purpose-designed campus featuring dedicated Montessori activity rooms, well-stocked science and computer labs, and a warm atmosphere of respect and discipline.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Milestones of Growth",
      },
      {
        type: "p",
        text: "Over the years, our students have achieved stellar academic results, earned awards in regional Qirat, Naat, and debate competitions, and developed strong reputations for poise and integrity. Parents throughout Sargodha have embraced our integrated Islamic curriculum.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Vision for the Future",
      },
      {
        type: "p",
        text: "We continue to expand our digital learning resources, robotics labs, teacher professional development programs, and community outreach initiatives, preparing our graduates to be the visionary Muslim leaders of tomorrow.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Our Journey"}
        description="Tracing the history, growth, and vision of Islamic Alta Vista School System in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurJourney;

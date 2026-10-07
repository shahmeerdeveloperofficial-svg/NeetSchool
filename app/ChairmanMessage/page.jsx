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
        text: "In the name of Allah, the Most Gracious, the Most Merciful.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Dear students, parents, and respected community members of Sargodha,",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "It gives me great pleasure to welcome you to Islamic Alta Vista School System. Education is the most profound instrument for transforming individuals and societies. When founded upon the timeless teachings of the Holy Quran and Sunnah, combined with the highest standards of contemporary science and humanities, it produces individuals who illuminated the world.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista, we are dedicated to providing our children with an environment where spiritual tarbiyah, disciplined habits, and academic brilliance develop hand in hand. Our campus in Sargodha is equipped with state-of-the-art facilities, qualified subject masters, and compassionate mentors.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We invite parents to join hands with us as partners in nurturing our future generations to become the beacons of knowledge, faith, and progress.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "May Allah Almighty guide and bless our students on their educational journey.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Wassalam,",
      },
      {
        type: "h4",
        text: "Chairman",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System, Sargodha",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Chairman's Message"}
        description="A message of inspiration and educational vision from Islamic Alta Vista School System Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ChairmanMessage;

import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const FAQs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Frequently Asked Questions (FAQs)",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "1. What makes Islamic Alta Vista unique in Sargodha?",
      },
      {
        type: "p",
        text: "We offer an integrated educational model that combines high-standard English-medium modern academics (Sciences, Mathematics, Coding) with structured Quranic Tajweed, Nazra, and Islamic character tarbiyah.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "2. How do I register my child for admission?",
      },
      {
        type: "p",
        text: "Parents can apply directly online through our Online Admission Form or visit our campus admissions desk in Sargodha to receive the prospectus and registration bundle.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "3. What age criteria is required for Early Years Montessori?",
      },
      {
        type: "p",
        text: "Playgroup: 2.5 to 3.5 years | Nursery: 3.5 to 4.5 years | Kindergarten (KG): 4.5 to 5.5 years.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "4. What co-curricular and sports facilities are available?",
      },
      {
        type: "p",
        text: "We offer Cricket, Football, Badminton, Robotics & Science Labs, Qirat & Naat Societies, and bilingual debating clubs.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Frequently Asked Questions"}
        description="Quick answers to common questions about Islamic Alta Vista School System Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default FAQs;

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ExtraCurricularActivities = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Co-Curricular & Physical Fitness Activities in Sargodha",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System Sargodha, we cultivate strong minds, healthy bodies, and creative spirits. Our co-curricular programs provide wholesome, values-aligned platforms for every student to shine.",
      },
      { type: "br" },
      {
        type: "h3",
        text: "Physical Education & Sunnah Sports",
      },
      {
        type: "p",
        text: "Cricket, football, badminton, table tennis, track athletics, and gymnastics guided by professional physical education instructors with annual sports tournaments.",
      },
      {
        type: "br" },
      {
        type: "h3",
        text: "Qirat & Naat Competitions",
      },
      {
        type: "p",
        text: "Regular inter-house and inter-school Qirat and Naat events to celebrate melodious recitation of the Holy Quran and praise of the Holy Prophet (PBUH).",
      },
      {
        type: "br" },
      {
        type: "h3",
        text: "Bilingual Declamations & Debates",
      },
      {
        type: "p",
        text: "Public speaking training in English and Urdu, building eloquence, poise, critical argumentation, and stage confidence.",
      },
      {
        type: "br" },
      {
        type: "h3",
        text: "Science, Arts & Islamic Calligraphy Exhibitions",
      },
      {
        type: "p",
        text: "Annual exhibitions where students present working scientific models, robotics experiments, and exquisite Arabic calligraphy artwork.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Extracurricular Activities"}
        description="Nurturing athletic stamina, creative brilliance, and spiritual grace in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ExtraCurricularActivities;

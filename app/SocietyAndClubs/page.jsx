import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const SocietyAndClubs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Co-Curricular Societies & Student Clubs",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System Sargodha, learning expands beyond the four walls of the classroom. Our student societies provide vibrant avenues for character development, spiritual refinement, scientific inquiry, and athletic prowess.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "1. Qirat, Naat & Seerat Society (بزمِ نعت و قرات)",
      },
      {
        type: "p",
        text: "Dedicated to the art of Tajweed, melodious Hamd and Naat recitations, Seerat-un-Nabi conferences, and Islamic quiz competitions.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "2. STEM & Robotics Club (سائنس و ٹیکنالوجی سوسائٹی)",
      },
      {
        type: "p",
        text: "Engaging students in coding, electronics projects, science exhibition models, and practical experiments.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "3. Bilingual Debating Society (بزمِ ادب و تقریر)",
      },
      {
        type: "p",
        text: "Developing eloquent oratory skills in English and Urdu, conducting parliamentary debates, declamation contests, and creative writing workshops.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "4. Physical Fitness & Sports Academy",
      },
      {
        type: "p",
        text: "Encouraging regular athletic conditioning, cricket, football, badminton, and gymnastics under trained physical education instructors.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "5. Islamic Arts & Calligraphy Guild (فنِ خطاطی)",
      },
      {
        type: "p",
        text: "Mastering Arabic and Urdu Khat (calligraphy), visual arts, geometric Islamic design, and annual arts showcases.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Societies & Clubs"}
        description="Discover how Islamic Alta Vista School System nurtures leadership and talent in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default SocietyAndClubs;

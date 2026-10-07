import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Policies = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "School Code of Conduct & Policies (Sargodha Campus)",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System maintains clear, compassionate policies designed to ensure a secure, respectful, disciplined, and morally elevated academic community.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "1. Punctuality & Attendance",
      },
      {
        type: "p",
        text: "Consistent attendance is vital for spiritual and academic progress. A minimum of 85% attendance is required. School gates close promptly before the morning assembly and Quran recitation.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "2. Islamic Uniform & Modesty Guidelines",
      },
      {
        type: "p",
        text: "Students must wear the designated school uniform neatly pressed, embodying modesty, cleanliness, and pride in their Islamic identity.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "3. Zero-Tolerance Anti-Bullying Policy",
      },
      {
        type: "p",
        text: "We maintain a strict zero-tolerance policy against any form of bullying, mockery, or disrespect. The physical, emotional, and spiritual safety of every child is fiercely protected.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "4. Campus Safety & Digital Device Restrictions",
      },
      {
        type: "p",
        text: "Personal smartphones and unauthorized electronic gadgets are strictly prohibited during school hours to maintain focus, respectful peer interactions, and classroom sanctity.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Rules & Policies"}
        description={"Islamic Alta Vista School System — Fostering discipline, modesty, and integrity."}
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Policies;

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const TeacherTraining = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Teacher Training",
      },
      {
        type: "p",
        text: "We believe strong schools are built by strong teachers. NEET School System supports continuous teacher development so that classroom instruction remains clear, effective, and student-focused.",
      },
      {
        type: "p",
        text: "Training and internal guidance help our teaching team improve lesson delivery, student engagement, class management, and assessment practices throughout the academic year.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Teacher Training"}
        description="NEET School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default TeacherTraining;

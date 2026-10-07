import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const TeacherTraining = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Professional Teacher Training & Tarbiyah Development",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System Sargodha, we believe great educational institutions require visionary and masterfully trained teachers. Our faculty undergoes continuous professional development modules designed by renowned academic and Tarbiyah consultants.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Continuous Training Modules",
      },
      {
        type: "p",
        text: "• Modern Pedagogical Methodologies: Implementing inquiry-based learning, differentiated classroom instructions, and multimedia learning tools.",
      },
      {
        type: "p",
        text: "• Islamic Classroom Etiquette & Positive Reinforcement: Fostering a respectful, motivating, and caring classroom culture without harshness.",
      },
      {
        type: "p",
        text: "• STEM & Practical Science Teaching: Laboratory safety, experiment design, and engaging digital computing instruction.",
      },
      {
        type: "p",
        text: "• Phonics & Tajweed Rules: Specialized training for Early Years educators ensuring flawless English phonics and Quranic Arabic pronunciation.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Teacher Training"}
        description="Empowering our educators with modern pedagogy and Islamic character development in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default TeacherTraining;

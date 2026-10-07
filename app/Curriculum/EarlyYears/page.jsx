import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const SyllabusAndAffiliations = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Integrated Islamic & Contemporary Academic Curriculum",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System Sargodha, our curriculum is engineered to deliver academic mastery across English, Mathematics, Sciences, and Social Studies, seamlessly intertwined with Quranic Tajweed, Nazra, and Islamic values.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "1. Early Years Montessori & Kindergarten (Ages 2.5 - 5.5)",
      },
      {
        type: "p",
        text: "Our Early Years Wing utilizes hands-on sensory Montessori apparatus, phonics, numeracy foundations, daily Arabic alphabet recognition, and Islamic social storytelling in an affectionate environment.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "2. Primary Wing Academics (Grades 1 - 5)",
      },
      {
        type: "p",
        text: "We emphasize deep conceptual understanding in Mathematics, General Science, English grammar and composition, Urdu literature, and Social Studies. Daily Nazra Quran classes ensure fluent recitation with Tajweed rules.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "3. Middle & Secondary Wing (Grades 6 - 10 / Matric)",
      },
      {
        type: "p",
        text: "Rigorous science practicals (Physics, Chemistry, Biology), advanced mathematics, computer science & coding, and Islamic history prepare students for exemplary board examination results and higher academic pursuits.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "4. STEM Labs & Digital Computing",
      },
      {
        type: "p",
        text: "Modern computer labs equipped with high-speed systems provide foundational programming, logic design, and digital literacy essential for the modern era.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "5. Continuous Diagnostic Assessments & Feedback",
      },
      {
        type: "p",
        text: "Regular formative quizzes, monthly evaluations, and termly parent-teacher meetings ensure personalized support for every student.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Academic Curriculum"}
        description="Islamic Alta Vista School System — Rigorous contemporary curricula and Quranic tarbiyah in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default SyllabusAndAffiliations;

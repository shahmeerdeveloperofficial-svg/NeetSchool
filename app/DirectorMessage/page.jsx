import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const DirectorMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Director's Message",
      },
      {
        type: "p",
        text: "Assalamu Alaikum wa Rahmatullah,",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Welcome to Islamic Alta Vista School System. As Director of Academics, our core mission is creating classrooms that inspire both spiritual reverence and intellectual wonder. In an era marked by rapid technological change, our students must be anchored in moral truth while possessing sharp analytical faculties.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Our academic curricula are designed around interactive concept delivery, STEM laboratories, bilingual fluency (English and Urdu), and dedicated Tajweed and Hifz integration. We maintain small teacher-to-student ratios to ensure each learner receives individualized care and mentorship.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We invite parents to visit our Sargodha campus and experience firsthand our warm, disciplined, and forward-looking school culture.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Warm regards,",
      },
      {
        type: "h4",
        text: "Director of Academics",
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
        title={"Director's Message"}
        description="Insights on academic innovation, tarbiyah, and student development at Islamic Alta Vista Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default DirectorMessage;

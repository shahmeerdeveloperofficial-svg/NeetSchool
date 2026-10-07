import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Careers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Join the Islamic Alta Vista Academic Team in Sargodha",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System is continuously seeking passionate, visionary educators, subject specialists, and administrative staff who are dedicated to transforming the lives of young learners through academic excellence and Islamic values.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Current Career Opportunities",
      },
      {
        type: "p",
        text: "• Montessori & Early Childhood Directresses (AMI / Certified)",
      },
      {
        type: "p",
        text: "• Primary & Middle Subject Teachers (English, Mathematics, General Science, Urdu)",
      },
      {
        type: "p",
        text: "• Secondary Wing Science Masters (Physics, Chemistry, Biology, Computer Science)",
      },
      {
        type: "p",
        text: "• Quran & Tajweed Instructors (Qari / Qaria / Shahadat-ul-Alimiyyah)",
      },
      {
        type: "p",
        text: "• Physical Education Coaches & Administrative Coordinators",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Application Procedure",
      },
      {
        type: "p",
        text: "Interested candidates residing in or near Sargodha are invited to email their updated CV to careers@altavista.edu.pk or visit our campus administration office during working hours.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Careers"}
        description="Build a noble and fulfilling career shaping future generations in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Careers;

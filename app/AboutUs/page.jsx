import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const AboutUs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Vision",
      },
      {
        type: "p",
        text: "Our vision is to be Sargodha's premier Islamic institution of academic distinction and spiritual enlightenment, fostering a generation of Muslims who lead with intellect, moral courage, and compassionate civic responsibility.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Mission",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System is committed to delivering a balanced education where Quranic values, Tajweed, and character tarbiyah are seamlessly integrated with 21st-century science, technology, mathematics, and language fluencies in a safe and disciplined campus.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Islamic Philosophy",
      },
      {
        type: "p",
        text: "We believe knowledge is a sacred trust. Our pedagogical methodology nurtures curiosity, conceptual reasoning, and ethical discernment, preparing learners to excel both in this world and the hereafter.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Core Values",
      },
      {
        type: "h4",
        text: "Taqwa & Integrity (تقویٰ اور دیانت)",
      },
      {
        type: "p",
        text: "We instill consciousness of Allah Almighty, truthfulness, modesty, and honesty across all aspects of student life.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Academic Distinction (علمی فضیلت)",
      },
      {
        type: "p",
        text: "We strive for excellence in competitive examinations, scientific inquiry, and language masteries through concept-driven pedagogy.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Respect & Akhlaq (حسن اخلاق)",
      },
      {
        type: "p",
        text: "We emphasize polite speech, deep respect for parents and teachers, and kindness toward peers and society.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Innovation & Inquiry (تخلیق و تحقیق)",
      },
      {
        type: "p",
        text: "We encourage STEM curiosity, computer literacy, and practical experimentation to develop forward-looking leaders.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"About Us"}
        description="Islamic Alta Vista School System — Nurturing Faith, Knowledge, and Character in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AboutUs;

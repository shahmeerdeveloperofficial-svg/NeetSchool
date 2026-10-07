import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const StudentCounselling = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Student Tarbiyah, Mentorship & Psychological Counselling",
      },
      {
        type: "p",
        text: "At Islamic Alta Vista School System Sargodha, we hold that true academic growth requires emotional equilibrium, moral peace, and positive self-identity. Our counselling department offers compassionate, confidential support tailored to each child.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Key Areas of Tarbiyah & Counselling",
      },
      {
        type: "p",
        text: "• Academic Diagnostic Support: Overcoming learning roadblocks, exam stress, and cultivating organized study habits.",
      },
      {
        type: "p",
        text: "• Emotional & Moral Guidance: Nurturing positive peer relations, self-esteem, anger control, and Islamic manners (Akhlaq).",
      },
      {
        type: "p",
        text: "• Career & Higher Education Advice: Guiding senior students in selecting appropriate academic streams (Pre-Medical, Pre-Engineering, Computer Science).",
      },
      {
        type: "p",
        text: "• Individual Mentorship: Regular one-on-one sessions ensuring no child feels neglected or overwhelmed.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Student Counselling & Tarbiyah"}
        description="Fostering emotional resilience, moral clarity, and academic purpose in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default StudentCounselling;

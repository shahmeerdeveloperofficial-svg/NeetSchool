import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ParentingWorkshop = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Islamic Parenting Workshops & Seminars in Sargodha",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System views parents as vital partners in the spiritual, moral, and intellectual development of their children. We regularly host interactive workshops, expert lectures, and parent forums to align home and school guidance.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Key Workshop Themes",
      },
      {
        type: "p",
        text: "• Islamic Tarbiyah in the Modern Era: Balancing screen time, social media exposure, and nurturing authentic Islamic values at home.",
      },
      {
        type: "p",
        text: "• Supporting Early Childhood Literacy & Phonics: Engaging practical techniques for parents to reinforce classroom learning.",
      },
      {
        type: "p",
        text: "• Teen Psychology & Moral Guidance: Communicating effectively with adolescents through empathy, mutual respect, and Islamic principles.",
      },
      {
        type: "p",
        text: "• Collaborative Parent-Teacher Dialogue: Termly open houses to review each child's progress with their class teachers.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Parenting Workshops"}
        description="Strengthening the family-school alliance for the spiritual and academic success of our children."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ParentingWorkshop;

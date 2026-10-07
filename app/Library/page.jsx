import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Library = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Library & Islamic Resource Center (دارُالمطالعہ)",
      },
      {
        type: "p",
        text: "The library at Islamic Alta Vista School System Sargodha is a tranquil haven of knowledge and reflection. Stocked with thousands of volumes spanning Seerat-un-Nabi, Islamic history, classical literature, science encyclopedias, children's storybooks, and digital periodicals, our library instills a profound love for reading.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Key Library Features",
      },
      {
        type: "p",
        text: "• Dedicated Early Years Reading Nook: Colorful, interactive picture books and phonics readers.",
      },
      {
        type: "p",
        text: "• Reference & Science Section: Encyclopedias, science journals, and academic reference guides for primary and secondary students.",
      },
      {
        type: "p",
        text: "• Islamic Studies & Seerat Collection: Authentic translations, commentaries, and moral literature suitable for young readers.",
      },
      {
        type: "p",
        text: "• Weekly Reading Periods: Scheduled library periods for every class to promote independent research and comprehension.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Library & Resource Center"}
        description="Fostering deep reading habits, research skills, and Islamic knowledge in Sargodha."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Library;

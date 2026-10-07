import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const AuthorisedUnifromBooksellers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "School Uniform & Booklist Guidelines (Sargodha)",
      },
      {
        type: "p",
        text: "Islamic Alta Vista School System provides standard approved guidelines for academic textbooks, Quranic learning materials, stationery bundles, and official school uniforms.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Uniform Specifications",
      },
      {
        type: "p",
        text: "• Boys: Designated formal school shirt with Alta Vista monogram, tailored trousers, official school tie, navy blazer/sweater in winter, black leather shoes.",
      },
      {
        type: "p",
        text: "• Girls: Official uniform tunic/shalwar kameez with Alta Vista monogram, white headscarf/sash, navy cardigan/blazer in winter, black shoes.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Academic Booklists & Stationery Bundles",
      },
      {
        type: "p",
        text: "Class-wise syllabi, textbooks, Qaida/Nazra materials, and stationery lists are distributed during orientation and available at our Sargodha campus administration office.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Uniform & Booklist"}
        description="Islamic Alta Vista School System — Official uniform and academic material guidelines."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AuthorisedUnifromBooksellers;

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import AdmissionForm from "@/components/AdmissionForm";

const OnlineAdmission = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Online Admissions — Session 2026-2027 (Sargodha Campus)",
      },
      {
        type: "p",
        text: "Welcome to the Islamic Alta Vista School System Online Admission Portal. We have designed a convenient registration procedure for parents seeking an inspiring Islamic and modern academic education for their children.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Admission Procedure & Guidelines",
      },
      {
        type: "p",
        text: "1. Complete the online admission inquiry form below with student and guardian information.",
      },
      {
        type: "p",
        text: "2. Our admissions office will reach out within 24-48 hours to schedule a campus tour, friendly interaction, and placement evaluation.",
      },
      {
        type: "p",
        text: "3. Submit necessary documentation (Student Form-B / Birth Certificate, previous school transcripts, and 4 passport-size photographs) to finalize enrollment.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Available Wings in Sargodha",
      },
      {
        type: "p",
        text: "• Early Years Montessori: Playgroup, Nursery, Kindergarten (KG)",
      },
      {
        type: "p",
        text: "• Primary Wing: Grades 1 through 5",
      },
      {
        type: "p",
        text: "• Middle & Secondary Wing: Grades 6 through 10 / Matriculation",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Online Admission"}
        description="Join the Islamic Alta Vista family in Sargodha — apply online for the upcoming session."
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
      <AdmissionForm />
    </main>
  );
};

export default OnlineAdmission;

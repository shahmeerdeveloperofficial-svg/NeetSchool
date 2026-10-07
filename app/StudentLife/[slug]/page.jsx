import React from "react";
import RichTextRenderer from "@/components/RichTextRenderer";
import HeroHeader from "@/components/HeroHeader";
import { notFound } from "next/navigation";
import Link from "next/link";

const studentLifeData = [
  { title: "Registration Process", slug: "OLevel" },
  { title: "Withdrawals and Transfers", slug: "ALevel" },
  { title: "Primary Wing", slug: "Primary" },
];

export async function generateStaticParams() {
  return studentLifeData.map((studentLife) => ({
    slug: studentLife.slug,
  }));
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);
  if (!studentLife) notFound();

  return {
    title: `${studentLife.title} - Admissions & Student Life | Islamic Alta Vista School System`,
    default: "Student Life | Islamic Alta Vista School System",
  };
}

const cmsContentBySlug = {
  OLevel: [
    {
      type: "h2",
      text: "Student Registration & Admission Process (Sargodha)",
    },
    {
      type: "p",
      text: "The admission process at Islamic Alta Vista School System is designed to be supportive, organized, and parent-friendly. We evaluate every child's academic readiness with warmth, ensuring appropriate grade placement.",
    },
    {
      type: "br",
    },
    {
      type: "h3",
      text: "Step-by-Step Registration Guide",
    },
    {
      type: "p",
      text: "1. Complete the Online Registration or collect the application prospectus from our Sargodha campus.",
    },
    {
      type: "p",
      text: "2. Schedule an informal, friendly interaction and basic diagnostic assessment with our academic coordinators.",
    },
    {
      type: "p",
      text: "3. Submit required documentation (Child's NADRA Form-B, 4 photographs, previous academic reports, parent CNIC copies).",
    },
    {
      type: "p",
      text: "4. Receive enrollment confirmation, class timetable, and orientation schedule.",
    },
  ],

  ALevel: [
    {
      type: "h2",
      text: "Student Withdrawals and Transfers",
    },
    {
      type: "p",
      text: "In the event of family relocation or transfer, Islamic Alta Vista facilitates a seamless and structured clearance process. Parents are requested to inform the administration at least two weeks in advance.",
    },
    {
      type: "br",
    },
    {
      type: "h3",
      text: "Transfer Protocol",
    },
    {
      type: "p",
      text: "• Formal written withdrawal request submitted by the guardian.",
    },
    {
      type: "p",
      text: "• Departmental clearance of library books, laboratory apparatus, and tuition dues.",
    },
    {
      type: "p",
      text: "• Issuance of School Leaving Certificate (SLC) and complete academic transcript.",
    },
  ],

  Primary: [
    {
      type: "h2",
      text: "Primary Wing Student Experience in Sargodha",
    },
    {
      type: "p",
      text: "In the primary years (Grades 1 through 5), Islamic Alta Vista School System creates an inspiring, joyful environment where children master foundational mathematics, sciences, languages, and Quranic recitation.",
    },
    {
      type: "p",
      text: "Through active class participation, cooperative projects, and daily Islamic tarbiyah, our young students build unshakeable confidence, curiosity, and exemplary manners.",
    },
  ],
};

const StudentLife = async ({ params }) => {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);

  if (!studentLife) notFound();

  const cmsData = {
    content: cmsContentBySlug[slug] || [],
  };

  return (
    <main>
      <HeroHeader
        title={studentLife.title}
        description="Islamic Alta Vista School System — Nurturing Potential in Sargodha."
      />
      <div className="flex flex-col gap-4 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />

        {slug === "OLevel" && (
          <Link href="/OnlineAdmission">
            <button className="mt-4 w-fit rounded-xl bg-main px-6 py-3 text-white font-semibold hover:bg-mainD transition shadow-lg">
              Open Online Admission Form
            </button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default StudentLife;

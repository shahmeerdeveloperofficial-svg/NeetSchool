"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Quran & Sunnah Foundations",
    color: "bg-sec",
    desc: "We integrate daily Quranic recitation with Tajweed, age-appropriate Hadeeth studies, and authentic Islamic manners into the core academic routine.",
  },
  {
    title: "Rigorous Modern Academics",
    color: "bg-main",
    desc: "English, Mathematics, General Sciences, and Social Studies taught through contemporary concept-building pedagogy to ensure top competitive performance.",
  },
  {
    title: "Character & Tarbiyah Cell",
    color: "bg-secD",
    desc: "Focusing on truthfulness, respect for parents and elders, modesty, empathy, and social responsibility to develop upright Islamic personalities.",
  },
  {
    title: "Modern STEM & Computer Labs",
    color: "bg-skyBrand",
    desc: "Equipping young Muslims with digital literacy, coding foundations, and practical scientific experimentation in well-equipped laboratories.",
  },
  {
    title: "Bilingual Eloquence",
    color: "bg-sec",
    desc: "Cultivating articulate public speaking in English, Urdu, and basic Arabic through declamations, Qirat, and debate competitions.",
  },
  {
    title: "Physical Fitness & Sunnah Sports",
    color: "bg-main",
    desc: "Encouraging swimming, martial arts, cricket, football, and athletics to foster physical vigor, stamina, and cooperative team spirit.",
  },
  {
    title: "Dedicated Early Years Montessori",
    color: "bg-secD",
    desc: "A warm, nurturing environment for Playgroup, Nursery, and KG where little learners build foundational cognitive, linguistic, and sensory skills.",
  },
  {
    title: "Safe & Moral Campus in Sargodha",
    color: "bg-skyBrand",
    desc: "A secure, air-cooled, CCTV-monitored campus with separate wings and caring faculty dedicated to student safety and moral cultivation.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function Card({ color, title, desc }) {
  return (
    <div className="flex-1 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 bg-white border border-sky-100 group flex flex-col justify-between">
      <div>
        <h3 className="text-base sm:text-xl font-bold mb-3 flex items-center gap-2 relative py-2 pl-4 text-dark">
          <div
            className={`${color} h-full w-2 group-hover:w-full transition-all duration-300 rounded-md inline-block absolute left-0 top-0 opacity-90`}
          ></div>
          <span className="inline-block relative z-10 group-hover:text-white transition-all duration-300">
            {title}
          </span>
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="maxWSec px-6 sm:px-12 py-16 flex gap-12 flex-col">
      <div className="text-center space-y-3">
        <div className="inline-block px-4 py-1 rounded-full bg-sky-50 text-sec font-semibold text-xs sm:text-sm tracking-wider uppercase border border-sky-200">
          Our Educational Pillars
        </div>
        <h2 className="h2">
          Why Families Choose <span className="text-sec">Islamic Alta Vista</span>{" "}
          <span className="text-main">Sargodha</span>
        </h2>
        <p className="h3 text-gray !font-normal text-base sm:text-xl max-w-3xl mx-auto">
          An integrated institution where academic excellence meets spiritual enlightenment and moral leadership.
        </p>
      </div>
      <div className="flex flex-wrap justify-center -m-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="w-full sm:w-1/2 lg:w-1/4 p-3 flex"
          >
            <Card {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

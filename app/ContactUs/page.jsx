import HeroHeader from "@/components/HeroHeader";
import { FaPhone, FaLocationDot, FaEnvelope, FaClock } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <main>
      <HeroHeader
        title={"Contact Us"}
        description="Connect with Islamic Alta Vista School System admissions and administrative desk in Sargodha."
      />

      <section className="maxWSec px-6 sm:px-12 py-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-sky-100 p-8 sm:p-10 bg-white shadow-lg flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 rounded-full bg-sky-50 text-sec font-bold text-xs uppercase tracking-wider border border-sky-200">
              Campus Details
            </span>
            <h2 className="h3 mt-4 mb-6 text-sec">Sargodha Campus Information</h2>
            
            <div className="space-y-5 text-base sm:text-lg text-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sec flex-shrink-0 mt-0.5">
                  <FaLocationDot className="text-lg text-sec" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Campus Address</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Islamic Alta Vista School System, Main Campus, Sargodha, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-main flex-shrink-0 mt-0.5">
                  <FaPhone className="text-lg text-main" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Admission Hotline & WhatsApp</h4>
                  <a href="tel:+923007441617" className="text-main font-semibold hover:underline text-sm sm:text-base">
                    +92 300 7441617
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sec flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-lg text-sec" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Email Inquiries</h4>
                  <p className="text-slate-600 text-sm sm:text-base">admissions@altavista.edu.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 mt-0.5">
                  <FaClock className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Visiting Hours</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Monday – Saturday: 8:00 AM – 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-sec via-[#0D1F70] to-[#060E36] text-light p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#62CBF5_0,transparent_60%)]"></div>
          
          <div className="relative z-10">
            <span className="px-3 py-1 rounded-full bg-main text-white font-bold text-xs uppercase tracking-wider">
              Admissions Open 2026-2027
            </span>
            <h2 className="h3 mt-4 mb-4 text-white">Campus Visit & Consultation</h2>
            <p className="text-base sm:text-lg leading-relaxed text-sky-100">
              Parents in Sargodha are warmly welcome to visit our purpose-built campus, tour our air-conditioned classrooms and STEM laboratories, meet our academic heads, and experience our peaceful, value-driven environment.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 relative z-10">
            <a
              href="/OnlineAdmission"
              className="rounded-xl bg-main hover:bg-mainD transition px-6 py-3.5 font-semibold text-white shadow-lg"
            >
              Online Admission Form
            </a>
            <a
              href="tel:+923007441617"
              className="rounded-xl bg-white/10 hover:bg-white/20 transition border border-sky-300/30 px-6 py-3.5 font-semibold text-white backdrop-blur"
            >
              Call Admissions Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

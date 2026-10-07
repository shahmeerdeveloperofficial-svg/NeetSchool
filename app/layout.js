import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";

// Load Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Islamic Alta Vista School System | Sargodha",
  description:
    "Islamic Alta Vista School System Sargodha integrates Islamic values, Quranic character formation, and modern 21st-century academic excellence.",
  icons: {
    icon: "/altavistalogo.png",
    shortcut: "/altavistalogo.png",
    apple: "/altavistalogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <LenisSmooth />
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

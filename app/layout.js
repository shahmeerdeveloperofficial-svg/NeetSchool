import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import LenisSmooth from "../components/LenisSmooth";
import Footer from "../components/Footer";

// Load Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "NEET School System",
  description:
    "NEET School System provides a caring and disciplined learning environment focused on academics, values, creativity, and student development.",
  icons: {
    icon: "/neetlogo.jpeg",
    shortcut: "/neetlogo.jpeg",
    apple: "/neetlogo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        {/* <TopBar /> */}
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

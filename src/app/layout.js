import { Inter } from "next/font/google";
import "./globals.css";
import RotatingBackground from "./RotatingBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyunseok Ryu",
  description:
    "Hyunseok Ryu (류현석) — AI / NLP researcher. Publications, projects, CV, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RotatingBackground />
      <div className="relative min-h-screen w-full z-10">
      {children}
      </div>
      </body>
    </html>
  );
}

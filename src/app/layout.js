import { Inter } from "next/font/google";
import "./globals.css";
import RepeatingBackground from "./RepeatingBackground";

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
      <div className="relative w-full min-h-screen">
        <RepeatingBackground />
        <div className="relative z-10">
        {children}
        </div>
      </div>
      </body>
    </html>
  );
}

import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const manrope = Manrope({ subsets: ["latin"] }) 
export const metadata = {
  title: "Take Care | Health Care DashBoard",
  description: "HealthCareDashBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <header>
          <Navbar/>
        </header>
        {children}
        </body>
    </html>
  );
}

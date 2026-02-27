import { Inter, Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const afacad = Afacad({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-afacad" });

export const metadata = {
  title: "Goshen Noodles",
  description: "Authentic Vietnamese food in Goshen, Indiana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={afacad.variable}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

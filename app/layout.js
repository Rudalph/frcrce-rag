import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800','900'] });

export const metadata = {
  title: "FrCRCE - RAG",
  description: "Retrieval-Augmented Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-scroll no-scrollbar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

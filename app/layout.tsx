import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Provider from "@/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get me A Coffee - Fund your project with coffee",
  description: "This project is a crowdfunding platform for creaters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="min-h-[83.9vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

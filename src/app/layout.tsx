import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import { HoverBorderGradientButton } from "@/components/HoverBoard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My journey",
  description: "My portfolio | my journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex item-center justify-center">
          <Navbar />
        </div>
        {/* <div className="absolute right-0 flex justify-end m-5 z-10">
          <HoverBorderGradientButton name="Toggle Theme" />
        </div> */}
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

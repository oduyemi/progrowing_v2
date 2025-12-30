import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ProGrowing",
    template: "%s | ProGrowing",
  },
  description: "Get unstuck faster with mentorship",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: "#6B21A8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

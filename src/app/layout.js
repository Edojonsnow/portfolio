import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Alexander Oronsaye",
  description: "Portfolio website of Alexander Oronsaye - Software Developer",
  openGraph: {
    title: "Alexander Osahon Oronsaye",
    description: "Portfolio website of Alexander Oronsaye - Software Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexander Oronsaye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Oronsaye",
    description: "Portfolio website of Alexander Oronsaye - Software Developer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

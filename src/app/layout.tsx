import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishab Thapliyal | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, PostgreSQL, and scalable web systems.",
  keywords: [
    "Rishab Thapliyal",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Rishab Thapliyal" }],
  openGraph: {
    title: "Rishab Thapliyal | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, and scalable web systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}

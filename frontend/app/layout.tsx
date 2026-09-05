import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HonorCode AI",
  description: "AI-powered skill assessment, learning roadmaps, and career opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

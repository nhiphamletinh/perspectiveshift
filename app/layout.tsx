import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PerspectiveShift — Reconstructing Arguments",
  description: "A thoughtful workspace for reading, mapping, and revising arguments.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

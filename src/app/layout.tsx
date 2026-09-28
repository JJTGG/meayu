import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meayu — Make something for someone",
  description:
    "Turn what you know about someone into something made specifically for them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Student Learning Dashboard",
  description:
    "Track your learning progress, manage courses, and build consistent study streaks with a premium dark-mode dashboard.",
  other: {
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg-base text-text-primary antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

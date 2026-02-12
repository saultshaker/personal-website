import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saul Schaffer - Researcher & Engineer at LLNL",
  description: "Personal website of Saul Schaffer, researcher and engineer at Lawrence Livermore National Laboratory working on machine learning, HPC, and scientific computing.",
  keywords: ["Saul Schaffer", "LLNL", "Research", "Engineering", "Machine Learning", "HPC"],
  authors: [{ name: "Saul Schaffer" }],
  openGraph: {
    title: "Saul Schaffer",
    description: "Researcher & Engineer at LLNL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

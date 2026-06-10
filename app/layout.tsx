import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF Interactive Game Builder",
  description: "Create interactive games inside PDF documents. Build games and apps that run entirely within PDF viewers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1180b8fc-1048-44df-89e1-3b2793b8fc8e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

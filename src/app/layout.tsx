import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Kintra | Create event timelines for your life and those who shape it",
  description: "Kintra is a privacy-first digital sanctuary that allows you to chronicle your life journey and weave the timelines of the people who shape it, securing your memories and media in your own Cloud Vault (Google Drive).",
  openGraph: {
    title: "Kintra | Create event timelines for your life and those who shape it",
    description: "Kintra is a privacy-first digital sanctuary that allows you to chronicle your life journey and weave the timelines of the people who shape it.",
    images: ["/images/og-card.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kintra | Create event timelines for your life and those who shape it",
    description: "Kintra is a privacy-first digital sanctuary that allows you to chronicle your life journey and weave the timelines of the people who shape it.",
    images: ["/images/og-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

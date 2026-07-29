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
  title: "Ogaga Elijah | AI Automation Specialist & Consultant",

  description:
    "I help businesses streamline operations with AI agents, workflow automation, APIs, chatbots, and intelligent business systems. I design scalable automation solutions using n8n, OpenAI, Vapi, Make, Zapier, Airtable, and custom integrations.",

  keywords: [
    "AI Automation",
    "AI Automation Specialist",
    "Automation Consultant",
    "Workflow Automation",
    "AI Agents",
    "Business Automation",
    "n8n",
    "OpenAI",
    "ChatGPT",
    "Claude",
    "Zapier",
    "Make.com",
    "Vapi",
    "Airtable",
    "API Integration",
    "CRM Automation",
    "Business Process Automation",
    "Artificial Intelligence",
    "Nigeria",
    "Port Harcourt",
    "Ogaga Elijah",
  ],

  authors: [
    {
      name: "Ogaga Elijah",
    },
  ],

  creator: "Ogaga Elijah",

  publisher: "Ogaga Elijah",

  metadataBase: new URL(
    "https://ogaga-automation-portfolio-6072f7izc-ogaga-elijah.vercel.app"
  ),

  openGraph: {
    title: "Ogaga Elijah | AI Automation Specialist & Consultant",

    description:
      "Helping businesses automate operations using AI agents, workflow automation, APIs, chatbots, and intelligent business systems.",

    url: "https://ogaga-automation-portfolio-6072f7izc-ogaga-elijah.vercel.app",

    siteName: "Ogaga Elijah Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ogaga Elijah | AI Automation Specialist & Consultant",

    description:
      "AI Automation • AI Agents • n8n • OpenAI • Workflow Automation • APIs",

    creator: "@HyperAICrypto",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}
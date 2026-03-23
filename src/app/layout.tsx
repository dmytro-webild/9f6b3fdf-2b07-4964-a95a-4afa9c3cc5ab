import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Capital Cleaning | Professional Home & Office Cleaning Services',
  description: 'Capital Cleaning offers top-tier residential and commercial cleaning services. Experience spotless results, eco-friendly products, and a reliable team. Get a free quote today!',
  openGraph: {
    "title": "Capital Cleaning | Professional Home & Office Cleaning Services",
    "description": "Capital Cleaning offers top-tier residential and commercial cleaning services. Experience spotless results, eco-friendly products, and a reliable team. Get a free quote today!",
    "url": "/",
    "siteName": "Capital Cleaning",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cleaning-products-arrangement-flat-lay_23-2148883455.jpg",
        "alt": "Sparkling clean living room"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Capital Cleaning | Professional Home & Office Cleaning Services",
    "description": "Capital Cleaning offers top-tier residential and commercial cleaning services. Experience spotless results, eco-friendly products, and a reliable team. Get a free quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/cleaning-products-arrangement-flat-lay_23-2148883455.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

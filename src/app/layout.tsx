import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Clear Smile Dental Clinic | Gentle & Expert Dental Care in Pune',
  description: 'Experience top-notch dental care at Clear Smile Dental Clinic in Karvenagar, Pune. We offer a full range of services from routine check-ups to advanced cosmetic dentistry.',
  keywords: ["dental clinic Pune, Clear Smile Dental, dentist Karvenagar, dental care, cosmetic dentistry, orthodontics, teeth whitening, best dentist Pune"],
  openGraph: {
    "title": "Clear Smile Dental Clinic | Your Path to a Brighter Smile",
    "description": "Expert dental services in Pune for a healthy and confident smile. Book your appointment today!",
    "url": "https://www.clearsmiledental.com",
    "siteName": "Clear Smile Dental Clinic",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/female-dentist-writing-report_107420-74191.jpg",
        "alt": "Dentist examining patient"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Clear Smile Dental Clinic | Gentle & Expert Dental Care in Pune",
    "description": "Experience top-notch dental care at Clear Smile Dental Clinic in Karvenagar, Pune. We offer a full range of services from routine check-ups to advanced cosmetic dentistry.",
    "images": [
      "http://img.b2bpic.net/free-photo/female-dentist-writing-report_107420-74191.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
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
        <body className={`${mulish.variable} antialiased`}>
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

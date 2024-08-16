//HTML Root Layout

import { Vazirmatn, Sarabun } from 'next/font/google';
import "./globals.css";

const vazirmatn = Vazirmatn({ 
  subsets: ['latin'], 
  weight: ['400'] 
})

const sarabunExtrabold = Sarabun({ 
  subsets: ['latin'], 
  weight: ['800'],
  variable: '--font-sarabunExtrabold',
})

const sarabun = Sarabun({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-sarabunExtrabold',
})

export const metadata = {
  title: "Portfolio",
  description: "A web development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body className={`${vazirmatn.className} ${sarabunExtrabold.variable}`}>{children}</body>
    </html>
  );
}

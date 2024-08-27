//HTML Root Layout

import { Vazirmatn, Sarabun, Sora } from 'next/font/google';
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

const soraExBold = Sora({ 
  subsets: ['latin'], 
  weight: ['800'],
  variable: '--font-soraExBold',
})

export const metadata = {
  title: "Portfolio",
  description: "A web development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body className={`${vazirmatn.className} ${sarabunExtrabold.variable} ${soraExBold.variable} dark:bg-neutral-900 dark:text-white`}>{children}</body>
    </html>
  );
}

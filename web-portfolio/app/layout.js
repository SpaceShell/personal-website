//HTML Root Layout

import { Inter } from "next/font/google";
import { Vazirmatn, Sarabun } from 'next/font/google';
import "./globals.css";
import riveWasmUrl from '@rive-app/canvas/rive.wasm';

const inter = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ 
  subsets: ['latin'], 
  weight: ['400'] 
})

const sarabun = Sarabun({ 
  subsets: ['latin'], 
  weight: ['800'],
  variable: '--font-sarabun',
})

export const metadata = {
  title: "Portfolio",
  description: "A web development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="preload" href={riveWasmUrl} as="fetch" crossOrigin="anonymous" />
      </head>
      <body className={`${vazirmatn.className} ${sarabun.variable}`}>{children}</body>
    </html>
  );
}

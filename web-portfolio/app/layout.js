//HTML Root Layout

import { Vazirmatn, Sarabun, Sora } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from 'next-themes';

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
  title: "Steve Luis - Portfolio",
  description: "My web development portfolio to showcase what I do, my skills, and my portfolio. Feel free to connect!",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={`${vazirmatn.className} ${sarabunExtrabold.variable} ${soraExBold.variable} dark:bg-neutral-900 dark:text-white`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem themes={['light', 'dark']}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

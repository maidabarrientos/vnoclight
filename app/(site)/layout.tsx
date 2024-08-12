"use client";
import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
             <Script 
            async
            id="referral-script"
            src="https://www.referrals.com/extension/widget.js?key=100"
            type="text/javascript">
              
            </Script>
          <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M6ZLWK2ZQ0"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6ZLWK2ZQ0');
          `}
        </Script>
      <body className={`dark:bg-black`}>
   

        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >

            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
        </ThemeProvider>

          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/42816889.js"></script>
       
      </body>
    </html>
  );
}

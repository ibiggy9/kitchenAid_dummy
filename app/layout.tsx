import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KitchenAid | Make It Together",
  description: "Discover iconic KitchenAid appliances — stand mixers, blenders, coffee makers, and more. Built to make every meal a masterpiece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Script
          src="https://orgfarm-234f3aac10--devpro.sandbox.my.site.com/ESWNextjsChannel1771471986612/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            try {
              (window as any).embeddedservice_bootstrap.settings.language = 'en_US';
              (window as any).embeddedservice_bootstrap.init(
                '00DAs00000tKZZs',
                'Nextjs_Channel',
                'https://orgfarm-234f3aac10--devpro.sandbox.my.site.com/ESWNextjsChannel1771471986612',
                {
                  scrt2URL: 'https://orgfarm-234f3aac10--devpro.sandbox.my.salesforce-scrt.com'
                }
              );
            } catch (err) {
              console.error('Error loading Embedded Messaging: ', err);
            }
          }}
        />
      </body>
    </html>
  );
}

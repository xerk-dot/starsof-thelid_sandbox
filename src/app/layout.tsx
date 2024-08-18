import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
export const metadata: Metadata = {
  title: "RYKR app",
  description: "created by Rykr",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider> 
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-2">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

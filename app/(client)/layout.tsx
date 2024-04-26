import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const barlow = Barlow({ subsets: ["latin"], weight: ['300', '400', '500', '700', '900']});
import NavBar from '@/components/header'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-gray-50 text-gray-900 dark:text-gray-900`}>
        <NavBar />

        <div className="flex sm:max-w-[640px] lg:max-w-[1024px] px-5 md:px-4 mx-auto md:flex-row flex-col-reverse gap-10 lg:gap-20 mb-auto">
          <div className="flex flex-col gap-10 sm:flex-row flex-wrap">
            <ul className="flex md:flex-col sm:flex-row flex-wrap md:items-end gap-2 cursor-pointer">
              <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                <Link href={'/portfolio'} className="text-inherit"> Jenkins</Link> 
              </li>
              <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                <Link href={'/portfolio'} className="text-inherit"> Docker</Link> 
              </li>
                            <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                <Link href={'/portfolio'} className="text-inherit">AWS</Link> 
              </li>
                            <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                <Link href={'/portfolio'} className="text-inherit">Terraform</Link> 
              </li>
            </ul>
          </div>
          {children}
        </div>

        <div className="max-w-[600px] w-full flex flex-wrap justify-around items-center gap-4 text-center py-12 mt-8 mx-auto border-t-[1px] border-sky-950 px-6">
          <div>
            <p className="text-sm">Home</p>
          </div>
          <ul className="flex gap-2 list-disc list-inside marker:text-sky-900 text-sm">
            <li>Twitter</li>
            <li>Github</li>
            <li>Gitlab</li>
          </ul>

        </div>
      </body>
    </html>
  );
}

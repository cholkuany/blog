import Link from "next/link";
import Gitlab from "@/components/icons/gitlab";
import Github from "@/components/icons/github";

import { Jacquard_24 } from "next/font/google";
const jacquard_24 = Jacquard_24({ subsets: ["latin"], weight: ['400']});

export default function NavBar() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-100 mb-8 lg:mb-20 flex items-center justify-center">
        <div className="flex flex-row justify-between w-full py-6 sm:max-w-[640px]">
            <div className="mr-auto">
                <Link href={'/'} className="hover:text-orange-400 inline-block w-10 h-10">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                    <p className={`${jacquard_24.className} text-3xl text-inherit`}>Chol</p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-row gap-2 items-center">
                {/* <Gitlab /> 
                <Github /> */}
                <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                    <Link href={'/contact'}>CONTACT</Link> 
                </li>
                <li className="font-extrabold text-xs hover:underline underline-offset-4 hover:text-orange-400">
                    <Link href={'/portfolio'} className="text-inherit"> PORTFOLIO</Link> 
                </li>
            </div>        
        </div>
    </div>
  )
}
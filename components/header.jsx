import Link from "next/link";
import Gitlab from "@/components/icons/gitlab";
import Github from "@/components/icons/github";
import { jacquard_24 } from "@/app/(client)/layout";

export default function NavBar() {
  return (
    <div className="w-screen bg-gray-50 dark:bg-gray-900 mb-8 lg:mb-20 flex items-center justify-center">
        <div className="flex flex-row justify-between max-w-[500px] w-full p-6">
            <div className="mr-auto">
                <Link href={'/'} className="hover:text-orange-400 inline-block w-10 h-10">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                    <p className={`${jacquard_24.className} text-3xl`}>Kuany</p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <Gitlab /> 
                <Github />
            </div>        
        </div>
    </div>
  )
}
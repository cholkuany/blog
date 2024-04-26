'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function NavBar() {
    const pathname = usePathname()
    const activeLink = 'font-extrabold text-orange-400'
    const inactiveLink = 'font-extrabold hover:underline hover:underline-offset-8 hover:text-orange-400'
  return (
    <div className="bg-gray-900 dark:bg-gray-900 py-6 px-5 text-gray-100 mb-8 lg:mb-20 flex items-center justify-center h-12 md:h-24">
        <div className="flex flex-row justify-between w-full sm:max-w-[640px]">
            <div className="mr-auto">
                <Link href={'/'} className="hover:text-orange-400">
                    <div className="flex flex-col items-center justify-center">
                       <p className="font-extrabold">Home</p>
                    </div>
                </Link>
            </div>

            <ul className="flex flex-row gap-4 justify-center items-center">
                <li className={pathname === '/about' ? activeLink : inactiveLink}>
                    <Link href={'/about'}>About</Link> 
                </li>
                <li className={pathname === '/portfolio' ? activeLink : inactiveLink}>
                    <Link href={'/portfolio'} className="text-inherit"> Portfolio</Link> 
                </li>
                <li className={pathname === '/contact' ? activeLink : inactiveLink}>
                    <Link href={'/contact'}>Contact</Link> 
                </li>
            </ul>        
        </div>
    </div>
  )
}
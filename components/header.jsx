'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function NavBar() {
    const pathname = usePathname()
    const activeLink = 'font-extrabold text-orange-400'
    const inactiveLink = 'hover:text-orange-400'
  return (
    <div className="border-b-[1px] py-6 px-5 text-black mb-8 lg:mb-20 flex items-center justify-center h-12 md:h-24">
        <div className="flex flex-row justify-between w-full sm:max-w-[640px]">
            <div className="mr-auto">
                <Link href={'/'} className="hover:text-orange-400">
                    <div className="flex flex-col items-center justify-center">
                       <p className="">Home</p>
                    </div>
                </Link>
            </div>

            <ul className="flex flex-row gap-4 justify-center items-center">
                <li className={pathname === '/gallery' ? activeLink : inactiveLink}>
                    <Link href={'/gallery'}>Gallery</Link> 
                </li>
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
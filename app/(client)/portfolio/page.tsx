import Gitlab from "@/components/icons/gitlab";
import Github from "@/components/icons/github";

export default function Page() {
  return (
    <div className='flex flex-col gap-2'>
        <Gitlab /> 
        <Github />            
        <ul className="flex flex-col gap-2 list-inside underline underline-offset-2">
            <li>Gitlab - DevOps: 
                <a href='https://gitlab.com/kuanypeter' >kuanypeter</a>
            </li>
            <li>Github - Web & iOS: 
                <a href='https://github.com/cholkuany'>cholkuany</a>
            </li>
        </ul>
    </div>
  )
}

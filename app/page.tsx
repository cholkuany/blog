import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from '../components/date';

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <div className="">
        <div className="flex flex-col">
          <ul className="flex flex-col gap-6 p-0 m-0">
            {allPostsData.map(({ id, date, title }) => (
              <li className='' key={id}>
                <Link href={`/post/${id}`} className="font-sm text-xs hover:underline underline-offset-4 hover:text-orange-400">
                  {title.toUpperCase()}
                </Link>
                <br />
                <small className='text-[#999]'>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      {/* </div> */}
      
    </div>
  );
}

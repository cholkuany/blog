import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from '../../components/date';
import { fetchPosts } from "@/sanity/fetch/fetchPosts";

export default async function Home() {
  // const allPostsData = getSortedPostsData()
  const posts = await fetchPosts()

  return (
    <div className="">
        <div className="flex flex-col">
          <ul className="flex flex-col flex-wrap gap-6 p-0 m-0">
            {posts.map(({ _id, slug, title, publishAt, except }) => (
              <li className='flex flex-col gap-2' key={_id}>
                <Link href={`/post/${slug.current}`} className="font-medium text-2xl text-gray-900 dark:text-gray-100 hover:underline underline-offset-4 hover:text-orange-400">
                  {title}
                </Link>
                <p className="text-gray-300 text-sm">{except}</p>
                <small className='text-[#797575]'>
                  <Date dateString={publishAt.toString()} />
                </small>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

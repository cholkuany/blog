import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from '../../components/date';
import { fetchPosts } from "@/sanity/fetch/fetchPosts";

export default async function Home() {
  // const allPostsData = getSortedPostsData()
  const posts = await fetchPosts()

  return (
    <div className="flex flex-row sm:flex-col gap-8">
      <ul className="flex flex-col gap-6">
        {posts.map(({ _id, slug, title, publishAt, except }) => (
          <li className='flex flex-col gap-2' key={_id}>
            <Link href={`/post/${slug.current}`} className="font-medium text-2xl text-gray-950 dark:text-gray-950 hover:underline underline-offset-4 hover:text-orange-400">
              {title}
            </Link>
            <p className="text-gray-900 dark:text-gray-900 text-sm">{except}</p>
            <small className='text-[#797575]'>
              <Date dateString={publishAt.toString()} />
            </small>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <h3 className="from-gray-950 font-bold">Recent Blogs</h3>
        <ul className="flex flex-col gap-2 list-inside underline underline-offset-1">
          <li>Lorem Ipsum has been the industry's standard</li>
          <li>It was popularised in the 1960s with the release of Letraset</li>
          <li>Contrary to popular belief, Lorem Ipsum</li>
          <li>Why do we use it?</li>
        </ul>
      </div>
    </div>

  );
}

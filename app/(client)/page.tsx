import Image from "next/image";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from '../../components/date';
import { client } from "@/sanity/lib/client";
import { Post } from "@/lib/definitions";
import { revalidatePath } from "next/cache";

async function fetchPosts() {
  const query = `
  *[_type == 'post']{
    _id,
    title,
    slug,
    publishAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name,
    },
    authors[]-> {
      name,
      email,
    },
  }`
  const posts: Array<Post> = await client.fetch(query)
  revalidatePath('/')
  return posts
}

export default async function Home() {
  // const allPostsData = getSortedPostsData()
  const posts = await fetchPosts()
  return (
    <div className="">
        <div className="flex flex-col">
          <ul className="flex flex-col flex-wrap gap-6 p-0 m-0">
            {posts.map(({ _id, slug, title, publishAt }) => (
              <li className='' key={_id}>
                <Link href={`/post/${slug.current}`} className="font-bold text-2xs hover:underline underline-offset-4 hover:text-orange-400">
                  {title}
                </Link>
                <br />
                <small className='text-[#545252]'>
                  <Date dateString={publishAt.toString()} />
                </small>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

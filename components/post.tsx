import { Post } from "@/lib/definitions";
import Link from "next/link";

export default function PostComponent({post}: {post: Post}) {
  return (
    <div className="">
        <div className="flex flex-col">
              <div className="flex flex-col flex-wrap gap-6 p-0 m-0" key={post._id}>
                <Link href={`/post/${post._id}`} className="font-bold text-2xs hover:underline underline-offset-4 hover:text-orange-400">
                  {post.title}
                </Link>
                <br />
                <small className='text-[#545252]'>
                  {/* <Date dateString={post.publishAt.toISOString} /> */}
                </small>
              </div>
        </div>
    </div>
  );
}

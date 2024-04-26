import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/definitions';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import Author from '@/components/ArticleWriter';

import { fetchPosts } from '@/sanity/fetch/fetchPosts';
import { queryPost } from '@/sanity/fetch/fetchPost';
import Link from 'next/link';
import Date from '@/components/date';

export default async function Page({ params }: { params: {id: string}}) {
    const post = await queryPost(params.id)
    const posts = await fetchPosts()

    return (
        <div className='prose prose-slate flex flex-col gap-10 sm:max-w-[640px] lg:max-w-[800px] mx-auto'>   
            <div className='prose flex flex-col'>
                <article className='flex flex-col flex-wrap gap-2'>
                    <h1 className={`font-medium my-4 tracking-tight border-b-2 text-gray-950 dark:text-gray-950`}>{post.title}</h1>

                    <Author date={post.publishAt.toString()} name={post.authors[0].name}/>

                    <div className={`${richTextStyles} font-normal text-base text-gray-950 dark:text-gray-950`}>
                        <PortableText
                            value={post.content}
                            components={myPortableTextComponents}
                        />
                    </div>
                </article>
            </div>

            <div className="mt-8">
                <div className="flex flex-col">
                    <h3 className='text-gray-950 dark:text-gray-950'>Recent articles</h3>
                    <ul className="flex flex-col flex-wrap gap-2 marker:text-sky-900">
                        {posts.map(({ _id, slug, title, publishAt }) => (
                        <li className='list-inside flex flex-col text-gray-900 dark:text-gray-900' key={_id}>
                            <Link href={`/post/${slug.current}`} className="text-inherit font-bold text-sm hover:underline underline-offset-4 hover:text-orange-400">
                                {title}
                            </Link>
                            <small className='text-gray-700'>
                                <Date dateString={publishAt.toString()} />
                            </small>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

const myPortableTextComponents = {
  types: {
    image: ({value}: any) => (
    <Image 
        src={urlForImage(value)} 
        alt='post'
        width={500}
        height={300}
    />)
  },
}


const richTextStyles = `
mt-2
text-justify
max-w-2xl
m-auto
prose
prose-gray
dark:prose-invert
prose-headings:my-5
prose-headings:text-lg
prose-li:list-disc
prose-li:leading-7
prose-p:leading-7
prose-strong:text-gray-700
prose-strong:text-base
list-disc 
list-inside 
marker:text-sky-900
prose-li:ml-4
`

async function queryTagPosts(slug: string) {
    const query = `
    *[_type == 'post' && references(*[_type == tag && slug.current == "${slug}"]._id)]{
        title,
        slug,
        publishAt,
        excerpt,
        content,
        tags[]-> {
        _id,
        slug,
        name,
        }
        authors[]-> {
        name,
        email
        },
    }`
    const post: Post = await client.fetch(query)
  return post;
}
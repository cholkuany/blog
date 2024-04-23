import { getAllPostIds, getPostData } from '../../../../lib/posts';
import Head from 'next/head';
import Date from '../../../../components/date';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/definitions';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';

async function queryPost(slug: string) {
    const query = `
    *[_type == 'post' && slug.current == "${slug}"][0]{
        title,
        slug,
        publishAt,
        excerpt,
        content,
        tags[]-> {
        _id,
        slug,
        name,
        },
        authors[]-> {
        name,
        email
        },
    }`
    const post: Post = await client.fetch(query)
  return post;
}

export default async function Page({ params }: { params: {id: string}}) {
    // const postData = await getPostData(params.id);
    const post = await queryPost(params.id)

    return (
        // <div className='prose prose-slate flex flex-col gap-10 sm:max-w-[640px] lg:max-w-[800px] px-4 mx-auto'>

        <div className='prose flex flex-col w-full overflow-x-hidden'>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className='flex flex-col flex-wrap gap-2'>
                <h1 className='leading-8 font-extrabold my-4 tracking-tighter border-b-2'>{post.title}</h1>
                <div className='text-[#545252] flex gap-2 items-center'>
                    <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border border-lime-700'>
                        <Image
                            src={'/46662114-251E-4C4A-A808-03CCE230A68B_1_105_c.jpeg'}
                            width={40}
                            height={40}
                            alt='profile image'
                            className='w-full h-full rounded-full'
                            style={{objectFit: "cover"}}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='leading-3 text-sm font-extrabold'>{post.authors[0].name.toUpperCase()}</div>
                        <Date dateString={post.publishAt.toString()} />
                    </div>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} className='m-0 p-0'/> */}
                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} className='m-0 p-0'/> */}
                <div className={richTextStyles}>
                    <PortableText value={post.content} />
                    <PortableText
                    value={[post.content]}
                    components={myPortableTextComponents}
                    />
                </div>
            </article>
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
prose-headings:my-5
prose-headings:text-2xl
prose-li:list-disc
prose-li:leading-7
prose-p:leading-7
prose-h1:text-[35px]
prose-p:text-[#000000b0]
prose-p:text-[18px]
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
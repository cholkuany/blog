import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Date from '../../../components/date';

export default async function Post({ params }: { params: {id: string}}) {
    const postData = await getPostData(params.id);
    return (
        // <div className='prose prose-slate flex flex-col gap-10 sm:max-w-[640px] lg:max-w-[800px] px-4 mx-auto'>

        <div className='prose prose-zinc flex flex-col'>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className='leading-6 text-3xl font-extrabold my-4 tracking-tighter'>{postData.title}</h1>
                <div className='text-[#666]'>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    );
}

import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/definitions';

export async function queryPost(slug: string) {
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
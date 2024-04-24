import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/definitions';
import { revalidatePath } from 'next/cache';

export async function fetchPosts() {
  const query = `
  *[_type == 'post']{
    _id,
    title,
    slug,
    publishAt,
    except,
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
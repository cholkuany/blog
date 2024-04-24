export type HeadMeta = {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

export type ContentType = {
  content: string
  data: {
    title: string,
    date: string
  },
}

export type Tag = {
  name: string;
  slug: {current: string}
}

export type Author = {
  name: string;
  email: string;
}

export type Post = {
  title: string,
  slug: {current: string},
  publishAt: Date,
  except: string,
  content: any,
  tags: Array<Tag>
  authors: Array<Author>,
  _id: string,
}
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
import { title } from "process";

export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title'},
        },
        {
            name: 'publishAt',
            title: 'Publish At',
            type: 'datetime',
            initialValue: () => new Date().toISOString
        },
        {
            name: 'except',
            title: 'Except',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',

            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt',
                            type: 'text',
                        }
                    ]
                }
            ]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'tag'}]}]
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'author'}]}]
        }
    ]
}
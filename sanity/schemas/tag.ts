import { defineType } from "sanity";

export const tag = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'tag',
            title: 'Tag Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'tag'}
        }
    ]
})
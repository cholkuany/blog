import { defineType } from "sanity";

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: "Author's Name",
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        }
    ]
})
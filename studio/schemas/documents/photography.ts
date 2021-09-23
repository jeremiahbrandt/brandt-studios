import { HiOutlinePhotograph } from 'react-icons/hi'

export default {
    name: 'photography',
    title: 'Photography',
    type: 'document',
    icon: HiOutlinePhotograph,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'enabled',
            title: 'Shown',
            type: 'boolean',
            description: 'Show the photograph to users.'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The slug is used in the url to identify the artwork',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'artist',
            title: 'Photographer',
            type: 'reference',
            to: [{ type: 'person' }]
        }
    ],
}
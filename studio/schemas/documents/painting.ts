import { FaPaintBrush } from 'react-icons/fa'

export default {
    name: 'painting',
    title: 'Painting',
    type: 'document',
    icon: FaPaintBrush,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
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
            title: 'Artist',
            type: 'reference',
            to: [{ type: 'person' }]
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number'
        }
    ],
}
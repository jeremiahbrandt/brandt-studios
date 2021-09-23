import { GiPaintedPottery } from 'react-icons/gi'

export default {
    name: 'pottery',
    title: 'Pottery',
    type: 'document',
    icon: GiPaintedPottery,
    fields: [
        {
            name: 'title',
            title: 'NewTitle',
            type: 'string'
        },
        {
            name: 'enabled',
            title: 'Shown',
            type: 'boolean',
            description: 'Show the pottery to users.'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The slug is used in the url to identify the pottery',
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
            title: 'Potter',
            type: 'reference',
            to: [{ type: 'person' }]
        }
    ],
}
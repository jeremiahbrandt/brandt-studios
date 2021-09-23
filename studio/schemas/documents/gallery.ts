import { FcGallery } from 'react-icons/fc'

export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    icon: FcGallery,
    fields: [
        {
            name: 'items',
            title: 'Gallery Items',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'painting' },
                        { type: 'photography' },
                        { type: 'pottery' }
                    ]
                }
            ]
        },
    ]
}
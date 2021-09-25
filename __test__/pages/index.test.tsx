import HomePage, { IndexProps } from '../../pages/index'
import { render, screen } from '@testing-library/react'

jest.mock('../../utils/api')

it('gallery items are displayed as list items', async () => {
    // Arrange
    expect.assertions(3)
    const props: IndexProps = {
        galleryItems: [
            { 
                artist: 'Artist 1',
                image: 'example.com/item-1',
                title: 'Item 1',
                slug: 'item-1',
            },
            { 
                artist: 'Artist 2',
                image: 'example.com/item-2',
                title: 'Item 2',
                slug: 'item-2',
            },
            { 
                artist: 'Artist 3',
                image: 'example.com/item-3',
                title: 'Item 3',
                slug: 'item-3',
            },
        ]
    }

    // Act
    render(<HomePage {...props} />)

    // Assert
    props.galleryItems.forEach(propItem => {
        expect(screen.getByText(propItem.title)).toBeInTheDocument()
    })
})
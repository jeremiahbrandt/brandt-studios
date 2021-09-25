/**
 * @jest-environment jsdom
 */
import HomePage, { IndexProps } from '../../pages/index'
import { render, screen } from '@testing-library/react'

jest.mock('../../utils/api')

it('gallery items are displayed as list items', async () => {
    // Arrange
    expect.assertions(3)
    const props: IndexProps = {
        galleryItems: [
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
        ]
    }

    // Act
    render(<HomePage {...props} />)

    // Assert
    const items = screen.getAllByRole('listitem')
    props.galleryItems.forEach(propItem => {
        expect(items.some(item => item.textContent === propItem.title)).toBeTruthy()
    })
})
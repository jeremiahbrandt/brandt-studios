import PhotographyPage from '../../../pages/photography'
import { render, screen } from '@testing-library/react'
import { PhotographyPageProps } from '../../../pages/photography'

jest.mock('../../../utils/sanity')

it('gallery items are displayed as list items', async () => {
    // Arrange
    expect.assertions(3)
    const props: PhotographyPageProps = {
        photography: [
            {
                title: 'Item 2',
                slug: { current: 'item-1' },
            }, {
                title: 'Item 2',
                slug: { current: 'item-2' },
            }, {
                title: 'Item 3',
                slug: { current: 'item-3' },
            }
        ]
    }

    // Act
    render(<PhotographyPage {...props} />)

    // Assert
    const items = screen.getAllByRole('listitem')
    props.photography.forEach(propItem => {
        expect(items.some(item => item.textContent === propItem.title)).toBeTruthy()
    })
})
import PotteryPage from '../../../pages/pottery'
import { render, screen } from '@testing-library/react'
import { PotteryPageProps } from '../../../pages/pottery'

jest.mock('../../../utils/sanity')

it('gallery items are displayed as list items', async () => {
    // Arrange
    expect.assertions(3)
    const props: PotteryPageProps = {
        pottery: [
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
    render(<PotteryPage {...props} />)

    // Assert
    const items = screen.getAllByRole('listitem')
    props.pottery.forEach(propItem => {
        expect(items.some(item => item.textContent === propItem.title)).toBeTruthy()
    })
})
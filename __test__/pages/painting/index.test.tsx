 import PaintingPage from '../../../pages/paintings'
 import { render, screen } from '@testing-library/react'
 import { PaintingPageProps } from '../../../pages/paintings'
 
 jest.mock('../../../utils/sanity')
 
 it('gallery items are displayed as list items', async () => {
     // Arrange
     expect.assertions(3)
     const props: PaintingPageProps = {
         paintings: [
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
     render(<PaintingPage {...props} />)
 
     // Assert
     const items = screen.getAllByRole('listitem')
     props.paintings.forEach(propItem => {
         expect(items.some(item => item.textContent === propItem.title)).toBeTruthy()
     })
 })
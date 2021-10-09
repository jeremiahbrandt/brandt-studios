import { screen, render } from '@testing-library/react'
import GalleryItem, { GalleryItemProps } from './GalleryItem'

describe('galleryItem tests', () => {
  it('renders without crashing', () => {
    // Arrange
    expect.assertions(2)
    const props: GalleryItemProps = {
      artist: 'Test Artist',
      image: 'https://cnd.example.com/images/test-artist/test-image',
      title: 'Test Image',
      slug: 'https://test.com/slug',
    }
      
    // Act
    render(<GalleryItem {...props} />)
      
    // Assert
    expect(screen.getByRole('img')).toBeInTheDocument() // Only test if exists since we are using next/image
    expect(screen.getByText(props.title)).toBeInTheDocument()
  })
})
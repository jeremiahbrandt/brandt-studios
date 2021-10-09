import { screen, render } from '@testing-library/react'
import ContactPage from './contact'

describe('contactPage tests', () => {
  it('renders contact page', () => {
    // Arrange
    expect.assertions(1)
  
    // Act
    render(<ContactPage />)
  
    // Assert
    expect(screen.getByText('This is the contact page.')).toBeInTheDocument()
  })
})
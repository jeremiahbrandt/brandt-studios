import { screen, render } from '@testing-library/react'
import AboutPage from '../../pages/about'

jest.mock('../../utils/api')

describe('aboutPage tests', () => {
  it('renders about page', () => {
    // Arrange
    expect.assertions(1)
  
    // Act
    render(<AboutPage />)
  
    // Assert
    expect(screen.getByText('This is the about page')).toBeInTheDocument()
  })
})
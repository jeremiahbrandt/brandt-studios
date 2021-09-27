import { screen, render } from '@testing-library/react'
import AboutPage from './about'

jest.mock('../utils/api')

it('renders about page', () => {
    // Arrange
    expect.assertions(1)

    // Act
    render(<AboutPage />)

    // Assert
    expect(screen.getByText('This is the about page')).toBeInTheDocument()
})
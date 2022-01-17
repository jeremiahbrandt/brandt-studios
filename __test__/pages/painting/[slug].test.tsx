import { render, screen } from "@testing-library/react"
import PaintingSlugPage, { PaintingSlugProps } from "../../../pages/paintings/[slug]"

jest.mock('../../../utils/sanity')
jest.mock('next/router', () => require('next-router-mock'))
it('shopPagePreviewWrapper displays correct title', () => {
    // Arrange
    expect.assertions(1)
    const props: PaintingSlugProps = {
        preview: false,
        painting: {
            artist: {
                name: 'John Doe',
                photo: 'test.com/john-doe'
            },
            description: 'Lorem ipsum',
            enabled: true,
            image: 'test.com/image',
            slug: 'test-painting',
            title: 'Test Painting',
            year: 2021
        },
        siteConfig: {
            title: 'Test Site'
        }
    }

    // Act
    render(<PaintingSlugPage {...props} />)

    // Assert
    expect(screen.getByText(`Shop page for ${props.painting.title}`)).toBeInTheDocument()
})
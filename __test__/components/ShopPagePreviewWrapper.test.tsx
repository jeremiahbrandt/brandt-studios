/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import ShopPagePreviewWrapper, { GetStaticPropsHelperResult } from "../../components/ShopPagePreviewWrapper"

jest.mock('../../utils/sanity')
jest.mock('next/router', () => require('next-router-mock'))
it('shopPagePreviewWrapper displays correct title', () => {
    // Arrange
    expect.assertions(1)
    const props: GetStaticPropsHelperResult = {
        preview: false,
        shopData: {
            title: 'Test Shop',
            slug: { current: 'test-shop' },
        },
        query: 'some-query'
    }

    // Act
    render(<ShopPagePreviewWrapper {...props} />)

    // Assert
    expect(screen.getByText(`Shop page for ${props.shopData.title}`)).toBeInTheDocument()
})
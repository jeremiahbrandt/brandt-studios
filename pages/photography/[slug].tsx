import { getClient } from '../../utils/sanity'
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';
import { getPhotographyPathsQuery, getPhotographyPropsQuery } from '../../utils/queries';

export default function PotteryPageContainer({ photographyData, preview }): JSX.Element {
    return <ShopPagePreviewWrapper preview={preview} query={getPhotographyPropsQuery} shopData={photographyData} />
}

export async function getStaticProps({ params, preview = false }) {
    const photography = await getClient(preview).fetch(getPhotographyPropsQuery, { slug: params.slug })
    return {
        props: { preview, photography },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const slugs = await getClient().fetch(getPhotographyPathsQuery)
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: true
    }
}
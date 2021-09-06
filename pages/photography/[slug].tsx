import { getClient } from '../../utils/sanity'
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';
import { getPhotographyPathsQuery, getPhotographyPropsQuery } from '../../utils/queries';

export default function PotteryPageContainer({ photography, preview, params }): JSX.Element {
    return <ShopPagePreviewWrapper preview={preview} query={getPhotographyPropsQuery} shopData={photography} params={params} />
}

export async function getStaticProps({ params, preview = false }) {
    const photography = await getClient(preview).fetch(getPhotographyPropsQuery, { slug: params.slug })
    return {
        props: { preview, photography, params },
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
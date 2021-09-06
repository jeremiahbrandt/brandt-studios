import { getClient } from '../../utils/sanity';
import { getPotteryPathsQuery, getPotteryPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';

export default function PotteryPageContainer({ pottery, preview, params }) {
  return <ShopPagePreviewWrapper preview={preview} query={getPotteryPropsQuery} shopData={pottery} params={params} />
}

export async function getStaticProps({ params, preview = false }) {
  const pottery = await getClient(preview).fetch(getPotteryPropsQuery, { slug: params.slug })
  return {
    props: { preview, pottery, params },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const slugs = await getClient().fetch(getPotteryPathsQuery)
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
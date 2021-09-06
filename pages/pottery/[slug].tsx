import { getClient } from '../../utils/sanity';
import { getPotteryPathsQuery, getPotteryPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';

export default function PotteryPageContainer({ potteryData, preview }) {
  return <ShopPagePreviewWrapper preview={preview} query={getPotteryPropsQuery} shopData={potteryData} />
}

export async function getStaticProps({ params, preview = false }) {
  const pottery = await getClient(preview).fetch(getPotteryPropsQuery, { slug: params.slug })
  return {
    props: { preview, pottery },
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
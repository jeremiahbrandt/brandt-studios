import { getClient } from '../../utils/sanity';
import { getPotteryPathsQuery, getPotteryPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function PotteryPageContainer({ pottery, preview, params }) {
  return <ShopPagePreviewWrapper preview={preview} query={getPotteryPropsQuery} shopData={pottery} params={params} />
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const pottery = await getClient(preview).fetch(getPotteryPropsQuery, { slug: params?.slug });
  return {
    props: { preview, pottery, params },
    revalidate: 1
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getClient().fetch(getPotteryPathsQuery)
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
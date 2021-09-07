import { getPotteryPathsQuery, getPotteryPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper, { getStaticPathsHelper, getStaticPropsHelper, GetStaticPropsHelperResult } from '../../components/ShopPagePreviewWrapper';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { getClient } from '../../utils/sanity';

export default function PotteryPageContainer(props: GetStaticPropsHelperResult) {
  return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getStaticPropsHelper({...context, query: getPotteryPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  const slugs = await getClient().fetch(getPotteryPathsQuery) as string[]
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
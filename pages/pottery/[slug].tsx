import { getPotteryPathsQuery, getPotteryPropsQuery } from '../../utils/queries'
import ShopPagePreviewWrapper, { getStaticPathsHelper, getStaticPropsHelper, GetStaticPropsHelperResult } from '../../components/ShopPagePreviewWrapper'
import { GetStaticPathsContext, GetStaticPropsContext } from 'next'

export default function PotteryPageContainer(props: GetStaticPropsHelperResult) {
  return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getStaticPropsHelper({...context, query: getPotteryPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return await getStaticPathsHelper({...context, query: getPotteryPathsQuery})
}
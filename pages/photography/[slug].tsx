import ShopPagePreviewWrapper, { GetStaticPropsHelperResult, getStaticPathsHelper, getStaticPropsHelper } from '../../components/ShopPagePreviewWrapper'
import { getPhotographyPathsQuery, getPhotographyPropsQuery } from '../../utils/queries'
import { GetStaticPathsContext, GetStaticPropsContext } from 'next'

export default function PotteryPageContainer(props: GetStaticPropsHelperResult): JSX.Element {
  return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getStaticPropsHelper({...context, query: getPhotographyPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return await getStaticPathsHelper({...context, query: getPhotographyPathsQuery})
}
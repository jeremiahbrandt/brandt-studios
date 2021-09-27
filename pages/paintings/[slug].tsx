import { getPaintingPathsQuery, getPaintingPropsQuery } from '../../utils/queries'
import ShopPagePreviewWrapper, { GetStaticPropsHelperResult, getStaticPathsHelper, getStaticPropsHelper } from '../../components/ShopPagePreviewWrapper'
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { PageProps } from '..'

export type PaintingSlugProps  = PageProps & {
  
}

export default function PaintingPageContainer(props: GetStaticPropsHelperResult): JSX.Element {
  return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<GetStaticPropsHelperResult>> {
  return await getStaticPropsHelper({...context, query: getPaintingPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult> {
  return await getStaticPathsHelper({...context, query: getPaintingPathsQuery})
}
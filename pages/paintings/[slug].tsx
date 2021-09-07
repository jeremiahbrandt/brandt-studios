import { getPaintingPathsQuery, getPaintingPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper, { getStaticPathsHelper, getStaticPropsHelper, GetStaticPropsHelperResult } from '../../components/ShopPagePreviewWrapper';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';

export default function PaintingPageContainer(props: GetStaticPropsHelperResult): JSX.Element {
  return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getStaticPropsHelper({...context, query: getPaintingPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return getStaticPathsHelper({ ...context, query: getPaintingPathsQuery})
}
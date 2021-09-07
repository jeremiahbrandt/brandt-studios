import ShopPagePreviewWrapper, { getStaticPathsHelper, getStaticPropsHelper, GetStaticPropsHelperResult } from '../../components/ShopPagePreviewWrapper';
import { getPhotographyPathsQuery, getPhotographyPropsQuery } from '../../utils/queries';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

export default function PotteryPageContainer(props: GetStaticPropsHelperResult): JSX.Element {
    return <ShopPagePreviewWrapper {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return getStaticPropsHelper({...context, query: getPhotographyPropsQuery})
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult> {
    return getStaticPathsHelper({...context, query: getPhotographyPathsQuery})
}
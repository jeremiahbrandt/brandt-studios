import { getClient } from '../../utils/sanity'
import { getPaintingPathsQuery, getPaintingPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';

export default function PaintingPageContainer({ paintingData, preview }): JSX.Element {
  return <ShopPagePreviewWrapper preview={preview} query={getPaintingPropsQuery} shopData={paintingData} />
}

export async function getStaticProps({ params, preview = false }) {
  const painting = await getClient(preview).fetch(getPaintingPropsQuery, { slug: params.slug })
  return {
    props: { preview, painting },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const slugs = await getClient().fetch(getPaintingPathsQuery)
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
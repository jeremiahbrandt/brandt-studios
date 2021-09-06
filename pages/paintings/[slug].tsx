import { getClient } from '../../utils/sanity'
import { getPaintingPathsQuery, getPaintingPropsQuery } from '../../utils/queries';
import ShopPagePreviewWrapper from '../../components/ShopPagePreviewWrapper';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';

export default function PaintingPageContainer({ painting, preview, params }): JSX.Element {
  return <ShopPagePreviewWrapper preview={preview} query={groq`*[_type == "painting" && slug.current == $slug][0]`} shopData={painting} params={params} />
}

export async function getStaticProps({ params, preview = false }) {
  const painting = await getClient(preview).fetch(groq`*[_type == "painting" && slug.current == $slug][0]`, { slug: params.slug })
  return {
    props: { preview, painting, params },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const slugs = await getClient().fetch(groq`*[_type == "painting" && defined(slug.current)][].slug.current`)
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
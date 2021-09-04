import Error from 'next/error';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity'
import { PaintingPage } from '../../components/PaintingPage';

const query = groq`*[_type == "painting" && slug.current == $slug][0]`

export default function PaintingPageContainer({ painting }): JSX.Element {
  const router = useRouter()

  const title = painting.title

  if (!router.isFallback && !painting.slug) {
    return <Error statusCode={404} />
  }

  return (<PaintingPage title={title} />)
}

export async function getStaticProps({ params }) {
  const client = getClient()
  const painting = await client.fetch(query, { slug: params.slug })
  return {
    props: { painting },
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
import Error from 'next/error';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity'
import { getSinglePaintingQuery } from '../../utils/queries';

export default function PaintingPageContainer({ painting }): JSX.Element {
  const router = useRouter()

  if (!router.isFallback && !painting.slug) {
    return <Error statusCode={404} />
  }

  return (
    <div>
      <h1>Page for {painting.title}</h1>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const client = getClient()
  const painting = await client.fetch(getSinglePaintingQuery, { slug: params.slug })
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
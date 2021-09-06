import Error from 'next/error';
import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity';

const query = groq`*[_type == "pottery" && slug.current == $slug][0]`

export default function PotteryPageContainer({ pottery }) {
    if (!pottery.isFallback && !pottery.slug) {
        return <Error statusCode={404} />
      }

    return (
        <div>Pottery page for {pottery.title}</div>
    );
}

export async function getStaticProps({ params, preview = false }) {
    const pottery = await getClient(preview).fetch(query, { slug: params.slug })
    return {
      props: { preview, pottery },
      revalidate: 1
    }
  
  }
  
  export async function getStaticPaths() {
    const slugs = await getClient().fetch(groq`*[_type == "pottery" && defined(slug.current)][].slug.current`)
    return {
      paths: slugs.map(slug => ({ params: { slug } })),
      fallback: true
    }
  }
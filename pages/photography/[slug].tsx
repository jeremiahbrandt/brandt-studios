import Error from 'next/error';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity'

const query = groq`*[_type == "pottery" && slug.current == $slug][0]`

export default function PotteryPageContainer({ photography }): JSX.Element {
    const router = useRouter()

    if (!router.isFallback && !photography.slug) {
        return <Error statusCode={404} />
    }

    return (<div>
        <h1>{photography.title}</h1>
    </div>)
}

export async function getStaticProps({ params, preview = false }) {
    const photography = await getClient(preview).fetch(query, { slug: params.slug })
    return {
        props: { preview, photography },
        revalidate: 1
    }

}

export async function getStaticPaths() {
    const slugs = await getClient().fetch(groq`*[_type == "photography" && defined(slug.current)][].slug.current`)
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: true
    }
}
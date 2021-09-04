import Link from "next/link"
import React from "react"
import { getClient } from "../../utils/sanity"

const query = `*[_type == "painting" && defined(slug.current)]`

export default function Paintings({paintings}): JSX.Element {
    return (
        <div>
            <h1>Paintings</h1>
            <ul>
                {paintings.map(painting => (
                    <li key={painting.slug.current}>
                        <Link href={`/paintings/${painting.slug.current}`}>
                            {painting.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps({ preview = false }): Promise<{ props: any }> {
    const paintings = await getClient(preview).fetch(query)

    return {
        props: {
            paintings: paintings,
        },
    }
}
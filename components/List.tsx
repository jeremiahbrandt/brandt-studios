import Link from 'next/link'
import React from 'react'

export type ListItem = {
    title: string
    slug: { current: string }
}

type ListProps = {
    title: string
    slugPrefix: string
    items: ListItem[]
}

export function List(props: ListProps): JSX.Element {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.items.map(item => (
                    <li key={item.slug.current}>
                        <Link
                            href={`/${props.slugPrefix}/${item.slug.current}`}
                            as={`/${props.slugPrefix}/${item.slug.current}`}
                        >
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
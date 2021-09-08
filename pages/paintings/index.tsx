import React from 'react'
import { List, ListItem } from '../../components/List'
import { getAllPaintingsQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export default function Paintings({ paintings }: { paintings: ListItem[] }): JSX.Element {
    return (
        <List title="Paintings" slugPrefix="paintings" items={paintings} />
    )
}

export async function getStaticProps({ preview = false }): Promise<{ props: any }> {
    const paintings = await getClient(preview).fetch(getAllPaintingsQuery) as {
        title: string
        slug: {
            current: string
        }
        image: {
            asset: {
                _ref: string
            }
        }
    }[]


    return {
        props: { paintings }
    }
}
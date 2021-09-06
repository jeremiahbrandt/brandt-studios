import Link from "next/link"
import React from "react"
import { List } from "../../components/List"
import { getAllPaintingsQuery } from "../../utils/queries"
import { getClient } from "../../utils/sanity"

export default function Paintings({ paintings }): JSX.Element {
    return (
        <List title="Paintings" slugPrefix="paintings" items={paintings} />
    )
}

export async function getStaticProps({ preview = false }): Promise<{ props: any }> {
    const paintings = await getClient(preview).fetch(getAllPaintingsQuery)

    return {
        props: { paintings }
    }
}
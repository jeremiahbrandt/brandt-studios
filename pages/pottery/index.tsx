import Link from "next/link"
import React from "react"
import { List } from "../../components/List"
import { getAllPotteryQuery } from "../../utils/queries"
import { getClient } from "../../utils/sanity"

export default function Pottery({ pottery }) {
    return (
        <List title="Pottery" slugPrefix="pottery" items={pottery} />
    )
}

export async function getStaticProps({ preview = false }): Promise<{ props: any }> {
    const pottery = await getClient(preview).fetch(getAllPotteryQuery)

    return {
        props: { pottery }
    }
}
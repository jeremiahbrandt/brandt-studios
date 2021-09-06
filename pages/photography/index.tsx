import Link from "next/link"
import React from "react"
import { List } from "../../components/List"
import { getAllPhotographyQuery } from "../../utils/queries"
import { getClient } from "../../utils/sanity"

export default function Photography({ photography }): JSX.Element {
    return (
        <List title="Photography" slugPrefix="photography" items={photography} />
    )
}

export async function getStaticProps({ preview = false }): Promise<{ props: any }> {
    const photography = await getClient(preview).fetch(getAllPhotographyQuery)

    return {
        props: { photography }
    }
}
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React from 'react'
import { List, ListItem } from '../../components/List'
import { getAllPhotographyQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export type PhotographyPageProps = {
  photography: ListItem[]
}

export default function Photography({ photography }: PhotographyPageProps): JSX.Element {
  return (
    <List title="Photography" slugPrefix="photography" items={photography} />
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<PhotographyPageProps>> {
  const photography = await getClient(preview).fetch(getAllPhotographyQuery)

  return {
    props: { photography },
  }
}
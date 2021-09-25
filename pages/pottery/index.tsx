import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React from 'react'
import { List, ListItem } from '../../components/List'
import { getAllPotteryQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export type PotteryPageProps = {
  pottery: ListItem[]
}

export default function Pottery({ pottery }: PotteryPageProps): JSX.Element {
  return (
    <List title="Pottery" slugPrefix="pottery" items={pottery} />
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<PotteryPageProps>> {
  const pottery = await getClient(preview).fetch(getAllPotteryQuery)

  return {
    props: { pottery },
  }
}
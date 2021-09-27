import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React from 'react'
import { List, ListItem } from '../../components/List'
import { getSiteConfig, SiteConfigResponse } from '../../utils/api'
import { getAllPotteryQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export type PotteryPageProps = {
  pottery: ListItem[],
  siteConfig: SiteConfigResponse
}

export default function Pottery({ pottery }: PotteryPageProps): JSX.Element {
  return (
    <List title="Pottery" slugPrefix="pottery" items={pottery} />
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<PotteryPageProps>> {
  const pottery = await getClient(preview).fetch(getAllPotteryQuery)
  const siteConfig = await getSiteConfig(preview)

  return {
    props: { pottery, siteConfig },
  }
}
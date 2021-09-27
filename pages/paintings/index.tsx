import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React from 'react'
import { PageProps } from '..'
import { List, ListItem } from '../../components/List'
import { getSiteConfig } from '../../utils/api'
import { getAllPaintingsQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export type PaintingPageProps = PageProps &  {
  paintings: ListItem[]
}

export default function Paintings({ paintings }: PaintingPageProps): JSX.Element {
  return (
    <List title="Paintings" slugPrefix="paintings" items={paintings} />
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<PaintingPageProps>> {
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

  const siteConfig = await getSiteConfig(preview)


  return {
    props: { paintings, siteConfig },
  }
}
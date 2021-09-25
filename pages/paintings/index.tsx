import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React from 'react'
import { List, ListItem } from '../../components/List'
import { getAllPaintingsQuery } from '../../utils/queries'
import { getClient } from '../../utils/sanity'

export type PaintingPageProps = {
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


  return {
    props: { paintings },
  }
}
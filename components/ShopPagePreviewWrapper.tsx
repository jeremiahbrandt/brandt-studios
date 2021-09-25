import Error from 'next/error'

import { getClient, usePreviewSubscription } from '../utils/sanity'
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'

type GetStaticPropsHelperContext = GetStaticPropsContext & {
  query: string
}

type ShopData = {
  title: string
  slug: {
    current: string
  }
}

export type GetStaticPropsHelperResult = {
  preview: boolean
  shopData: ShopData
  query: string
}

type GetStaticPathsHelperContext = GetStaticPathsContext & {
  query: string
}

export default function ShopPagePreviewWrapper({ shopData, preview, query }: GetStaticPropsHelperResult): JSX.Element {
  const router = useRouter()

  const { data: shop = {} as ShopData } = usePreviewSubscription(query, {
    params: { slug: shopData?.slug?.current },
    initialData: shopData,
    enabled: preview || router.query.preview !== null,
  })

  const {
    title,
  } = shop


  if (!router.isFallback && !shop.slug) {
    return <Error statusCode={404} />
  }

  return (
    <div>Shop page for {title}</div>
  )
}

export async function getStaticPropsHelper({ params, preview = false, query }: GetStaticPropsHelperContext): Promise<GetStaticPropsResult<GetStaticPropsHelperResult>> {
  const shopData = await getClient(preview).fetch(query, { slug: params?.slug })
  return {
    props: { preview, query, shopData },
    revalidate: 1,
  }
}

export async function getStaticPathsHelper({ query }: GetStaticPathsHelperContext): Promise<GetStaticPathsResult> {
  const slugs = await getClient().fetch(query) as string[]
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true,
  }
}
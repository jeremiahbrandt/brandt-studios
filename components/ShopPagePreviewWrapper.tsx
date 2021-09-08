import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

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
  params: any
  query: string
}

type GetStaticPathsHelperContext = GetStaticPathsContext & {
  query: string
}

export default function ShopPagePreviewWrapper({ shopData, preview, query, params }: GetStaticPropsHelperResult) {
  const router = useRouter()

  const { data: shop = {} as ShopData } = usePreviewSubscription(query, {
    params: { slug: shopData?.slug?.current },
    initialData: shopData,
    enabled: preview || router.query.preview !== null
  })

  const {
    title
  } = shop

  if (!router.isFallback && !shop.slug) {
    return <Error statusCode={404} />
  }

  return (
    <div>Shop page for {title}</div>
  );
}

export async function getStaticPropsHelper({ params, preview = false, query }: GetStaticPropsHelperContext): Promise<GetStaticPropsResult<GetStaticPropsHelperResult>> {
  const shopData = await getClient(preview).fetch(query, { slug: params?.slug })
  return {
    props: { params, preview, query, shopData },
    revalidate: 1
  }
}

export async function getStaticPathsHelper({ query }: GetStaticPathsHelperContext): Promise<GetStaticPathsResult> {
  const slugs = await getClient().fetch(query) as string[]
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true
  }
}
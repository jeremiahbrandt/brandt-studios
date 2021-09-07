import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

type GetStaticPropsHelperContext = GetStaticPropsContext & {
  query: string
}

export type GetStaticPropsHelperResult = {
  preview: boolean
  shopData: any
  slugParams: string | string[] | undefined
  query: string
}

type GetStaticPathsHelperContext = GetStaticPathsContext & {
  query: string
}

export default function ShopPagePreviewWrapper({ shopData, preview, query, slugParams }: GetStaticPropsHelperContext & GetStaticPropsHelperResult) {
  const router = useRouter()

  const { data: shop } = usePreviewSubscription(query, {
    params: { slug: slugParams },
    initialData: shopData,
    enabled: preview || router.query.preview !== null,
  })

  if (!router.isFallback && !shopData.slug) {
    return <Error statusCode={404} />
  }

  console.log(shop)

  const {
    title
  } = shop

  return (
    <div>Shop page for {title}</div>
  );
}

export async function getStaticPropsHelper({ params, preview = false, query }: GetStaticPropsHelperContext): Promise<GetStaticPropsResult<GetStaticPropsHelperResult>> {
  const shopData = await getClient(preview).fetch(query, { slug: params?.slug })
  return {
    props: { preview, shopData, slugParams: params?.slug, query },
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
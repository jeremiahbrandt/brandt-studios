import Error from 'next/error';
import { usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';

export type ShopPageWrapperProps = {
    query: string,
    preview: boolean,
    shopData: any
}

export default function ShopPagePreviewWrapper({ shopData, preview, query } : ShopPageWrapperProps) {
  const router = useRouter()

  const { data: shop = {} } = usePreviewSubscription(query, {
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
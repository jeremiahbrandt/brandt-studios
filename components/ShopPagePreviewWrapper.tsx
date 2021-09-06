import Error from 'next/error';
import { usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';

export type ShopPageWrapperProps = {
    query: string,
    preview: boolean,
    shopData: any,
    params: any
}

export default function ShopPagePreviewWrapper({ shopData, preview, query, params } : ShopPageWrapperProps) {
  const router = useRouter()

  const { data: shop } = usePreviewSubscription(query, {
    params: { slug: params.slug },
    initialData: shopData,
    enabled: preview || router.query.preview !== null,
  })

  if (!router.isFallback && !shopData.slug) {
    return <Error statusCode={404} />
  }
  
  const {
    title
  } = shop

  return (
    <div>Shop page for {title}</div>
  );
}
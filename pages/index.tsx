import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import GalleryItem from '../components/GalleryItem'
import { getHomePageProps, getSiteConfig, SiteConfigResponse } from '../utils/api'

export type PageProps = {
  siteConfig: SiteConfigResponse
}

export type IndexProps = PageProps & {
  galleryItems: {
    artist: string,
    image: string,
    slug: string,
    title: string
  }[]
}

export default function IndexPage({ galleryItems }: IndexProps): JSX.Element {
  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {galleryItems.map(galleryItem => {
        return <GalleryItem key={`${galleryItem.title}-${galleryItem.slug}`} {...galleryItem} />
      })}
    </div>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const galleryItems = await getHomePageProps(preview) ?? []
  const siteConfig = await getSiteConfig(preview)
  return {
    props: { galleryItems, siteConfig },
  }
}
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
    <div>
      Welcome to Brandt Studios!
      <h1>Gallery Items</h1>
      <div className="container grid grid-cols-3 grid-gap-2 max-auto">

        {galleryItems.map((galleryItem, index) => {
          return <GalleryItem key={`${galleryItem.title}-${galleryItem.slug}`} {...galleryItem} />
        })}
      </div>
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
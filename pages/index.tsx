import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import GalleryItem from '../components/GalleryItem'
import { getHomePageProps } from '../utils/api'

export type IndexProps = {
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

        {galleryItems.map(galleryItem => {
          return <GalleryItem key={`${galleryItem.title}-${galleryItem.slug}`} {...galleryItem} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const galleryItems = await getHomePageProps(preview) ?? []
  return {
    props: { galleryItems },
  }
}
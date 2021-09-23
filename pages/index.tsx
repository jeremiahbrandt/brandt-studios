import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getGalleryItems } from '../utils/queries'
import { getClient } from '../utils/sanity'

type IndexProps = {
  galleryItems: {
    title: string
  }[]
}

export default function IndexPage({ galleryItems }: IndexProps): JSX.Element {
  return (
    <div>
      Welcome to Brandt Studios!
      <h1>Gallery Items</h1>
      <ul>
        {galleryItems.map((galleryItem, index) => {
          return <li key={`gallery-item-${index}`}>{galleryItem.title}</li>
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const galleryItems = await getClient(preview).fetch(getGalleryItems)
  return {
    props: { galleryItems },
  }
}
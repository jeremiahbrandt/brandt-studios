import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { getIndexProps } from '../utils/api'

export type IndexProps = {
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
  const galleryItems = await getIndexProps(preview)
  return {
    props: { galleryItems },
  }
}
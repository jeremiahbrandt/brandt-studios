import { getIndexProps } from '../utils/api'

export default function IndexPage({ galleryItems }) {
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

export async function getStaticProps({ preview = false }) {
  const galleryItems = await getIndexProps(preview)
  return {
    props: { galleryItems },
  }
}
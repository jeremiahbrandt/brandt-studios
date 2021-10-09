import Image from 'next/image'

export type GalleryItemProps = {
    artist: string
    image: string
    slug: string
    title: string
}

export default function GalleryItem({ image, title }: GalleryItemProps): JSX.Element {
  return (
    <div className='rounded'>
      <Image src={image} alt={title} width={1600} height={900} />
      <h3>{title}</h3>
    </div>
  )
}
export type GalleryItemProps = {
    artist: string
    image: string
    slug: string
    title: string
}

export default function GalleryItem({ image, title }: GalleryItemProps): JSX.Element {
    return (
        <div className='rounded'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}
import { groq } from "next-sanity"

export const getSiteTitleQuery = groq`
* [_id == "siteConfig"] {
	title
}[0]
`

export const getGalleryItems = `
* [_id == "gallery"] {
    items[] -> {
        "artist": artist -> {
            name
        }.name,
       "image": image {
            asset -> { 
                url 
            }
        }.asset.url,
        "slug": slug.current,
        title
    }
}[0].items
`

export const getAllPaintingsQuery = `* [_type == "painting" && defined(slug.current) && enabled == true]`
export const getPaintingPropsQuery = `
*[_type == "painting" && slug.current == $slug && enabled == true][0] {
    artist -> {
        name,
        "photo": photo.asset -> {
            url
          }.url
      },
      description,
      enabled,
      "image": image.asset -> {
      url
    }.url,
    "slug": slug.current,
    title,
      year
  }
`
export const getPaintingPathsQuery = `*[_type == "painting" && defined(slug.current) && enabled == true][].slug.current`
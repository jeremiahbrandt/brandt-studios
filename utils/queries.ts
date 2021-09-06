import { groq } from "next-sanity"

export const getAllPaintingsQuery = `*[_type == "painting" && defined(slug.current)]`
export const getPaintingPropsQuery = groq`*[_type == "painting" && slug.current == $slug][0]`
export const getPaintingPathsQuery = groq`*[_type == "painting" && defined(slug.current)][].slug.current`

export const getAllPotteryQuery = `*[_type == "pottery" && defined(slug.current)]`
export const getPotteryPropsQuery = groq`*[_type == "pottery" && slug.current == $slug][0]`
export const getPotteryPathsQuery = groq`*[_type == "pottery" && defined(slug.current)][].slug.current`

export const getAllPhotographyQuery = `*[_type == "photography" && defined(slug.current)]`
export const getPhotographyPropsQuery = groq`*[_type == "photography" && slug.current == $slug][0]`
export const getPhotographyPathsQuery = groq`*[_type == "photography" && defined(slug.current)][].slug.current`
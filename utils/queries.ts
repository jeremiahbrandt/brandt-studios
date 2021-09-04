import { groq } from "next-sanity"

export const getAllPaintingsQuery = `*[_type == "painting" && defined(slug.current)]`
export const getSinglePaintingQuery = groq`*[_type == "painting" && slug.current == $slug][0]`

export const getAllPotteryQuery = `*[_type == "pottery" && defined(slug.current)]`
export const getSinglePotteryQuery = groq`*[_type == "pottery" && slug.current == $slug][0]`

export const getAllPhotographyQuery = `*[_type == "photography" && defined(slug.current)]`
export const getSinglePhotographyQuery = groq`*[_type == "photography" && slug.current == $slug][0]`
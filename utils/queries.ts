import { groq } from "next-sanity"

export const getAllPaintingsQuery = `*[_type == "painting" && defined(slug.current) && enabled == true]`
export const getPaintingPropsQuery = groq`*[_type == "painting" && slug.current == $slug && enabled == true][0]`
export const getPaintingPathsQuery = groq`*[_type == "painting" && defined(slug.current) && enabled == true][].slug.current`

export const getAllPotteryQuery = `*[_type == "pottery" && defined(slug.current) && enabled == true]`
export const getPotteryPropsQuery = groq`*[_type == "pottery" && slug.current == $slug && enabled == true][0]`
export const getPotteryPathsQuery = groq`*[_type == "pottery" && defined(slug.current) && enabled == true][].slug.current`

export const getAllPhotographyQuery = `*[_type == "photography" && defined(slug.current) && enabled == true]`
export const getPhotographyPropsQuery = groq`*[_type == "photography" && slug.current == $slug && enabled == true][0]`
export const getPhotographyPathsQuery = groq`*[_type == "photography" && defined(slug.current) && enabled == true][].slug.current`

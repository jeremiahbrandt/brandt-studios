import { getGalleryItems, getPaintingPathsQuery, getPaintingPropsQuery, getSiteTitleQuery } from "./queries";
import { getClient } from "./sanity";

export type GetHomePagePropsResponse = {
    artist: string,
    image: string,
    slug: string,
    title: string
}

export async function getHomePageProps(preview: boolean): Promise<GetHomePagePropsResponse[]> {
    return getClient(preview).fetch(getGalleryItems)
}

export type SiteConfigResponse = {
    title: string
}

export async function getSiteConfig(preview: boolean): Promise<SiteConfigResponse> {
    return await getClient(preview).fetch(getSiteTitleQuery)
}

export type PaintingResponse = {
    artist: {
        name: string
        photo: string
    }
    description: string
    enabled: boolean
    image: string
    slug: string
    title: string
    year: number
}

export async function getPaintingSlugStaticProps(preview: boolean, slug: string | string[] | undefined): Promise<PaintingResponse> {
    return await getClient(preview).fetch(getPaintingPropsQuery, { slug: slug })
}

export async function getPaintingSlugStaticPaths(): Promise<string[]> {
    return await getClient().fetch(getPaintingPathsQuery) as string[]
}
import { getGalleryItems, getSiteTitleQuery } from "./queries";
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
    return await getClient().fetch(getSiteTitleQuery)
}
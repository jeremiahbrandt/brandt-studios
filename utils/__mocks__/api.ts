import { SiteConfigResponse } from "../api";

export function getIndexProps(preview: boolean) {
    return [
        {
            title: "Item 1"
        }, {
            title: "Item 2"
        }
    ]
}

export async function getSiteConfig(): Promise<SiteConfigResponse> {
    return {
        title: "My Site",
    }
}
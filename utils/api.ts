import { getGalleryItems } from "./queries";
import { getClient } from "./sanity";

export function getIndexProps(preview: boolean) {
    return getClient(preview).fetch(getGalleryItems)
}
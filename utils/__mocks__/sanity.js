import { SanityClient } from "@sanity/client";

export function getClient() {
    function usePreviewSubscription(data) {
        return { data }
    }

    return {
        fetch: jest.fn().mockResolvedValue([])
    }
}

export function usePreviewSubscription(query, { initialData }) {
    return {data: initialData}
}
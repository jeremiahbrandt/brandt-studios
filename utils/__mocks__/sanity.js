import { SanityClient } from "@sanity/client";

export function getClient() {
    return {
        fetch: jest.fn().mockResolvedValue([]),
    }
}
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { PageProps } from ".";
import { getSiteConfig } from "../utils/api";

export type ContactPageProps = PageProps & {

}

export default function ContactPage() {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                This is the contact page.
            </p>
        </div>
    );
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<ContactPageProps>> {
    const siteConfig = await getSiteConfig(preview)

    return {
        props: {
            siteConfig
        }
    }
}

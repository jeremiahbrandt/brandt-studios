import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { PageProps } from '.'
import { getSiteConfig } from '../utils/api'

export type AboutPageProps = PageProps & {

}

export default function AboutPage(): JSX.Element {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<AboutPageProps>> {
  const siteConfig = await getSiteConfig(preview)

  return { props: { siteConfig } }
}

import Error from 'next/error'

import { getPaintingPropsQuery } from '../../utils/queries'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { PageProps } from '..'
import { getPaintingSlugStaticPaths, getPaintingSlugStaticProps, getSiteConfig, PaintingResponse } from '../../utils/api'
import { useRouter } from 'next/router'
import { usePreviewSubscription } from '../../utils/sanity'

export type PaintingSlugProps = PageProps & {
  painting: PaintingResponse
  preview: boolean
}
export default function PaintingPageContainer(props: PaintingSlugProps): JSX.Element {
  const router = useRouter()

  const { data: painting = {} as PaintingResponse } = usePreviewSubscription(getPaintingPropsQuery, {
    params: { slug: props.painting.slug },
    initialData: props.painting,
    enabled: props.preview || router.query.preview !== null,
  })

  const {
    title,
    slug,
  } = painting


  if (!router.isFallback && !slug) {
    return <Error statusCode={404} />
  }

  return (
    <div>Shop page for {title}</div>
  )
}

export async function getStaticProps({ preview = false, params }: GetStaticPropsContext): Promise<GetStaticPropsResult<PaintingSlugProps>> {
  const slugProps = await getPaintingSlugStaticProps(preview, params?.slug)
  const siteConfig = await getSiteConfig(preview)

  return {
    props: {
      painting: slugProps,
      siteConfig: siteConfig,
      preview: preview,
    },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const slugs = await getPaintingSlugStaticPaths()
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true,
  }
}
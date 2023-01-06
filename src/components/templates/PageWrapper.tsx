import * as React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '_components/templates/Layout'
import Aside from '_components/modules/Aside'
import Nav from '_components/modules/Nav'

import useContentsList from '_hooks/useContentsList'

import { ContentsListNodeType } from '_types/contents.types'

const TITLE = 'Holymoly Blog'
const DESCRIPTION = '일해라 최주녕.'
const URL = 'https://www.holymoly-jun.dev/'
const IMAGE = ''
const USER_NAME = 'Holymoly.jun'

type PageWrapperProps = {
  children: React.ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  const edges: ContentsListNodeType[] = useContentsList()

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>

        <meta name="description" content="일해라 최주녕." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:url" content={URL} />
        <meta property="og:site_name" content={TITLE} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />
        <meta name="twitter:site" content={USER_NAME} />
        <meta name="twitter:creator" content={USER_NAME} />
      </Helmet>

      <Layout>
        <Layout.Content>
          <Nav />
          {children}
        </Layout.Content>
        <Layout.Side>
          <Aside menuList={edges} />
        </Layout.Side>
      </Layout>
    </>
  )
}

export default PageWrapper

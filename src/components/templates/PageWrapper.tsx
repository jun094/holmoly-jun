import * as React from 'react'

import Layout from '_components/templates/Layout'
import Aside from '_components/modules/Aside'
import Nav from '_components/modules/Nav'

import useContentsList from '_hooks/useContentsList'

import { ContentsListNodeType } from '_types/contents.types'

type PageWrapperProps = {
  children: React.ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  const edges: ContentsListNodeType[] = useContentsList()

  return (
    <Layout>
      <Layout.Content>
        <Nav />
        {children}
      </Layout.Content>
      <Layout.Side>
        <Aside menuList={edges} />
      </Layout.Side>
    </Layout>
  )
}

export default PageWrapper

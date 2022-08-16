import * as React from 'react'

import Layout from 'components/templates/Layout'
import Aside from 'components/modules/Aside'
import Nav from 'components/modules/Nav'

import useContentsList from 'hooks/useContentsList'

import { ContentsListNodeType } from 'types/contents.types'

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

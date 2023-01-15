import * as React from 'react'
import PageWrapper from '_components/templates/PageWrapper'

function NotFoundPage() {
  return (
    <PageWrapper>
      <article className="flex justify-center items-center h-full">
        <h1 className="text-center">404 :(</h1>
      </article>
    </PageWrapper>
  )
}

export default NotFoundPage

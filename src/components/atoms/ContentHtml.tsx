import * as React from 'react'

type ContentHtmlProps = {
  html: string
}

function ContentHtml({ html }: ContentHtmlProps) {
  return (
    <article
      className="prose px-3 py-24 my-0 mx-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

ContentHtml.defaultProps = {
  html: '',
}

export default ContentHtml

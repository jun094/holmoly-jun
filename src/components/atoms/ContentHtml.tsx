import * as React from 'react'

type ContentHtmlProps = {
  html: string
}

function ContentHtml({ html }: ContentHtmlProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

ContentHtml.defaultProps = {
  html: '',
}

export default ContentHtml

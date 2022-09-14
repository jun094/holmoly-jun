import * as React from 'react'
import cn from 'classnames'

type ContentHtmlProps = {
  html: string
  className?: string
}

function ContentHtml({ html, className }: ContentHtmlProps) {
  return (
    <div
      className={cn(
        '[&_h1]:-mt-20 [&_h1]:pt-20 [&_h2]:-mt-20 [&_h2]:pt-20',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default ContentHtml

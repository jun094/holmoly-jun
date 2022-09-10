import * as React from 'react'

type ContentHeaderProps = {
  title: string
  date: string
  image?: string
}

function ContentHeader({ title, date, image }: ContentHeaderProps) {
  return (
    <div className="mb-8">
      <h1>{title}</h1>
      <div className="text-right">
        <sub>
          <i>created: {date}</i>
        </sub>
      </div>
    </div>
  )
}

export default ContentHeader

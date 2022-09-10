import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { ContentThumbnailType } from '_types/contents.types'

type ContentHeaderProps = {
  title: string
  date: string
  image?: ContentThumbnailType
}

function ContentHeader({ title, date, image }: ContentHeaderProps) {
  return (
    <div className="mb-8">
      <h1>{title}</h1>
      <div className="text-right mb-4">
        <sub>
          <i>{date}</i>
        </sub>
      </div>

      {image && (
        <GatsbyImage
          alt="Cotents Image"
          image={image?.childImageSharp.gatsbyImageData}
          className="rounded-2xl"
        />
      )}
    </div>
  )
}

export default ContentHeader

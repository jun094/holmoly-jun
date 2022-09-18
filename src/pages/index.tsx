import * as React from 'react'

import PageWrapper from '_components/templates/PageWrapper'

function IndexPage() {
  return (
    <PageWrapper>
      <div className="prose px-2 py-24 my-0 mx-auto">
        <h2>About</h2>
        <div className="text-right">
          <sub>
            <i>Last updated: 2022.08.15</i>
          </sub>
        </div>
        <p>
          저는 프론트엔드 개발자 holymoly.jun입니다. 현재 구름에서 B2B 서비스와
          디자인 시스템을 개발하고 있습니다.
        </p>

        <p>
          해당 블로그는 JAM Stack을 활용한{' '}
          <a target="_blank" href="https://www.gatsbyjs.com/">
            Gatsby.js
          </a>
          로 만들어졌습니다. Markdown을 활용해 블로그 포스팅을 하고 있습니다.
        </p>
        <hr />
        <ul>
          <li>
            GitHub{' '}
            <a target="_blank" href="https://github.com/jun094">
              @jun094
            </a>
          </li>
          <li>
            Email <a href="mailto:cwd094@gmail.com">cwd094@gmail.com</a>
          </li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default IndexPage

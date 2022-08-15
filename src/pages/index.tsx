import * as React from 'react'

import PageWrapper from 'components/templates/PageWrapper'

function IndexPage() {
  return (
    <PageWrapper>
      <div className="prose px-2 py-24 my-0 mx-auto">
        <h1>안녕하세요! Holymoly.jun 입니다. </h1>
        <div className="text-right">
          <sub>
            <i>Last updated: 2022.08.15</i>
          </sub>
        </div>
        <h3>저는 이런것에 관심이 많습니다 :)</h3>
        <ul>
          <li>사용자 경험 향상에 관심이 많습니다.</li>
          <li>개발자 경험 향상에 관심이 많습니다.</li>
          <li>Internal 제품에 관심이 많습니다.</li>
        </ul>
        <h2>이런 능력이 있어요.</h2>
        ...
        <h2>이런 업무 경험이 있어요.</h2>
        ...
        <h2>이런 교육 / 프로젝트를 해왔어요.</h2>
        ...
      </div>
    </PageWrapper>
  )
}

export default IndexPage

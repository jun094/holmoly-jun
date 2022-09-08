---
date: '2022-08-11'
title: 'Figma API로 Storybook 아이콘 동기화시키기'
summary: 'Figma API로 Storybook 과 Figma의 아이콘을 동기화시키는 작업을 진행해봤습니다.'
category: 'React'
thumbnail: './images/thumbnail.png'
---

# 개요

필자 회사의 디자이너들은 피그마에서 아이콘들을 관리하고, 개발자들은 피그마에 있는 아이콘들을 SVG 또는 PNG로 추출해서 아이콘을 관리하고 있었습니다. 대부분의 회사가 이렇게 관리하고 있을 겁니다.

그러나, 입사 4개월 차인 저에게는 해당 프로세스가 다소 비효율적이게 보였고, 해당 상황에 대해서 팀 리더에게 말씀 드리자 조언을 해주셨습니다.

> 원래 기존에 있는 사람들은 기존 프로세스가 불편한지 몰라요. 뉴비들이 새로운 눈으로 당연한 걸 당연하게 생각하지 않고, 해결하려는 시도가 중요해요 !

팀 리더분의 조언과 우쭈쭈(?)에 힘입어, 저는 해당 프로세스를 조금 더 효율적이게 해결해보겠다고 선언하고, 기존 프로세스의 paint point를 노션에 정리해봤습니다.
(회사 생활에서 문서화는 사랑 받는 지름길입니다.)

<br/>

# 기존 아이콘 추출 작업의 Pain Point

---

### 단순 반복 작업

- 새로운 아이콘이 생겼을 때마다 아래의 단순 반복 작업을 해야 했습니다.
  > `Figma SVG 추출` > `SVG 코드 복사` > `Storybook에 JSX 형태로 변환` > `Storybook의 스토리 파일 생성` > `Storybook 릴리즈`
- 사내 아이콘 리뉴얼을 앞두고 있는 상황에서 해당 과정을 여러 번하기에는 무리가 있었습니다.

### 휴먼 에러

- Figma와 Storybook이 완벽히 동기화되지 않는 문제가 있었습니다. ( Figma에 있는 아이콘은 292개, Storybook에는 285개 )
- 오타와 같은 휴먼에러로 Figma와 Storybook의 아이콘 이름이 다른 경우가 있었습니다. ( ex. `FatchIcon` <-> `PatchIcon`)

<br/>
<br/>

# 기술적 문제 해결

## tl;dr

>

1. [Figma API](https://www.figma.com/developers/api#intro)는 Figma Node 정보들을 json객체로 뿌려줍니다.
   <br/>
1. 해당 API에는 `GET` 메소드들만 있으며, `POST`, `PUT`, `DELETE`의 다양한 작업을 원한다면, [Figma Plugin API](https://www.figma.com/plugin-docs/intro/)를 활용해야합니다.
   <br/>
1. Node 정보를 추출하기 위해 Figma API의 [GET File Nodes](https://www.figma.com/developers/api#get-file-nodes-endpoint)를 활용해, `Node Type = 'COMPONENT'` 인 Node들의 Node Id를 가져옵니다.
   <br/>
1. [GET image](https://www.figma.com/developers/api#get-images-endpoint)를 활용해, 추출된 NodeId의 이미지들을 `SVG Type`으로 가져옵니다.
   <br/>
1. Icon 컴포넌트 전용 JSX 템플릿을 만든 뒤, 해당 템플릿을 활용하여 SVG들을 Storybook에 컴포넌트로 만들어줍니다.
   <br/>
1. Storybook에서 생성된 아이콘들을 볼 수 있도록, 스토리들을 생성합니다.
   <br/>
1. 위의 과정을 한꺼번에 할 수 있는 Script를 작성하고, 사내 디자이너분들이 해당 자동화 과정을 사용할 수 있도록 Script를 돌릴 수 있는 UI를 만듭니다.

<br/>
<br/>

## Figma단 작업

---

### STEP 1 : Figma Token 생성

![](https://velog.velcdn.com/images/jun094/post/22c6c968-1881-4c18-9c3f-a2c64aa67f64/image.png)

Figma REST API를 사용하기 위해서는 개인 token값이 필요합니다. Token 아래 과정을 통해 생성 가능합니다.

> `Profile(Avatar)` > `settings` > `Account` > `Personal access tokens`

<br/>

### STEP 2 : Figma FileKey와 NodeId 생성

![](https://velog.velcdn.com/images/jun094/post/c36c41cc-789c-4b9c-8caa-df1113bba6ec/image.png)

FigmaAPI를 사용하기 위해서는 사용하려는 파일의 `FileKey`와 여러 Node들 중에 특정 Node의 정보를 원한다면 `NodeId`가 필요합니다. 만약, 해당 페이지 전체 Node들의 정보를 원한다면 음영(회색) 부분을 클릭하면 됩니다.

FileKey와 NodeId 값은 상단 이미지에서 보이듯이 URL에서 확인이 가능합니다.

> Figma에서 [Node](https://www.figma.com/developers/api#global-properties)는 왼쪽 사이드바의 계층 구조에서 하나 하나를 의미합니다.

각각의 Node들을 클릭할 때마다 URL에서 `NodeId` 값이 바뀌는 것을 확인할 수 있습니다.

<br/>

### STEP 3 : 아이콘들을 모두 컴포넌트 정의하기

![](https://velog.velcdn.com/images/jun094/post/b604c97a-5288-42ca-9515-8bcf3c4db511/image.png)
Figma API에서 데이터 파싱으 용이하시 위해서는 Node들을 특정 Type으로 정의해주는게 좋습니다. 그래서, 저는 피그마 단에서 아이콘들을 모두 `COMPONENT`로 정의해주었습니다.

> 각각의 Node들은 모두 [Type](https://www.figma.com/developers/api#node-types)( `DOCUMENT`, `CANVAS`, `TEXT`, `COMPONENT`, ... )들을 가지고 있습니다.

![](https://velog.velcdn.com/images/jun094/post/26fbcc6f-c51a-453a-9da9-eb23ed68e641/image.png)

Figma에서 여러개 Node들을 한꺼번에 컴포넌트로 변경하려면, `Create multiple components` 기능을 사용하면 됩니다. (좌: `INSTANCE`, 우: `COMPONENT`)

<br/>

### STEP 4 : 디자이너분들만의 룰 정하기

아이콘 추출 작업은 AI가 아닌, script화 과정이므로 디자이너분들이 아이콘을 만들 때 지켜야 할 룰이 필요했습니다.

>

- **아이콘은 동일한 사이즈로 제작합니다.**
  -> 동일한 `viewBox` 사이즈 유지하기 위함
- **한가지 color만 사용합니다.**
  -> SVG를 컴포넌트로 만들 때 용이함
- **아이콘의 이름은 PascalCase로 표기합니다.**
  -> 커뮤니케이션 비용 절감에 용이함

<br/>

## Storybook단 작업

### STEP 1 : Figma Json Data 가져오기

```
GET https://api.figma.com/v1/files/ :FileKey /nodes?ids= :NodeId
```

위에서 준비해놓은 FileKey과 NodeId로 API 로 요청해봅니다.

> API를 요청하기 위해서는 헤더의 `X-FIGMA-TOKEN`에 Figma Token을 실어서 보내야합니다.

```jason
{
  "name": "MyIcons",
  "nodes": {
    "2:2": {
      "document": {
        "id": "2:2",
        "name": Frame 1",
        "type": "FRAME",
        "blendMode": "PASS_THROUGH",
        "children": [
          {
            "id": "2:4",
            "name": "Rectangle 1",
            "type": "RECTANGLE",
            "blendMode": "PASS_THROUGH",
            "absoluteBoundingBox": {
            //...
```

FigmaAPI는 Figma파일의 모든 정보를 Json형식으로 내려줍니다.

### STEP 2 : token 세팅 및 폴더 구조 잡기

본격적으로 Fetch 작업을 하기 전에 Figma에서 준비해놓은 token값들을 환경변수에 세팅해주고, 각 역할에 맞게 폴더와 파일을 구분시켜줍니다.

```shell
//.env
FIGMA_TOKEN=[STEP1에서 생성한 Token]
FILE_KEY=[STEP2에서 생성한 FileKey]
FILE_ID=[STEP2에서 생성한 NodeId]
```

```
.
|-- utils
|   |-- api.js (Figma API 호출)
|   |-- getIconJSXTemplate.js (FigmaAPI로 추출한 SVG를 Icon 컴포넌트로 변환)
|   |-- getStoryIconJSXTemplate.js (생성된 컴포넌트의 Story를 생성)
|   `-- index.js
`-- main.js
```

### STEP 3 : GET Figma Data

위의 내려오는 Json 데이터 예시에서 보듯, 데이터는 `nodes` > `document` > `children` 의 계층형 구조로 되어있습니다.

이는 위의 _Figma단 STEP 2_ 이미지의 사이드바의 계층형 구조와 같은 구조입니다.

먼저, 최상단의 Document 객체를 가져와 보겠습니다.

```javascript
// api.js

const api = require('axios')
require('dotenv').config()

const FigmaToken = process.env.FIGMA_TOKEN
const FigmaFileKey = process.env.FILE_KEY
const FigmaFileId = process.env.FILE_ID

const headers = {
  'X-FIGMA-TOKEN': FigmaToken,
}
const figmaFiles = fileId =>
  api.create({
    baseURL: `https://api.figma.com/v1/files/${FigmaFileKey}/nodes?ids=${FigmaFileId}`,
    headers,
  })

const getDocument = async fileId => {
  const { data } = await figmaFiles(fileId).get()

  return data
}
```

### STEP 4 : GET componets

저는 위의 Figma단에서 작업에서 데이터 파싱을 용이하게 하기 위해, 미리 Node Typedmf `COMPONENT`로 정의해놨습니다.

1. Document 객체에서 `type === 'COMPONENT'` 인 것을 filter 함수로 걸러줍니다.
2. `COMPONENT`들의 node id와 name을 배열로 저장합니다.

```javascript
// api.js

// ...
const getComponents = async fileId => {
  const document = await getDocument(fileId)
  const nodeId = decodeURIComponent(FigmaFileId)

  return document.nodes[nodeId].document.children
    .filter(child => child.type === 'COMPONENT') // (1)
    .map(frame => {
      return {
        name: frame.name,
        id: frame.id,
      }
    }) // (2)
}
```

해당 작업을 하면 아래와 같은 배열을 추출할 수 있습니다. 해당 배열은 *Figma단 작업 STEP 3*의 이미지에 있는 아이콘 정보들입니다.

```
[
	0: {name: 'SearchIcon', id: '226:0'}
	1: {name: 'HomeIcon', id: '155:84'}
	2: {name: 'GroupIcon', id: '150:1'}
    3: {name: 'BellOnIcon', id: '152:20'}
]
```

### STEP 5 : GET SVG Data

1. 추출한 Node들의 id와 [GET image API](https://www.figma.com/developers/api#get-images-endpoint)를 활용하 SVG 데이터들을 추출해줍니다.

2. 정규표현식을 활용하여, SVG를 JSX형태로 만들어줍니다.

```javascript
// api.js

//...
const figmaImages = api.create({
  baseURL: `https://api.figma.com/v1/images/${FigmaFileKey}`,
  headers,
})

// (1) GET image : getComponents에서 얻은 node id 배열을 활용하여 다시 api 작업을 진행한다.
const getSvgData = async fileId => {
  const componets = await getComponents(fileId)
  const ids = componets.map(comp => comp.id).join(',')
  const total = componets.length

  // NOTE: id값들을 ,로 join하여 string으로 변환한 뒤, api를 호출하면 svg 데이터를 객체로 한 번에 받을 수 있다.
  const { data } = await figmaImages.get(
    `?ids=${ids}&format=svg&svg_include_id=false`,
  )
  const { images } = data

  return {
    total,
    datas: componets.map(component => {
      return {
        id: component.id,
        name: component.name,
        url: images[component.id],
      }
    }),
  }
}
```

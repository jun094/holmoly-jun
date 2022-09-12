---
date: '2021-04-08'
title: '서버통신부터 DOM의 등장까지'
summary: '서버 통신 공부를 하다보니, 자연스럽게 JavaScript DOM 의 등장 배경을 알 수 있었다.'
thumbnail: './images/server-to-DOM-thumbnail.png'
---

> 나는 상대적으로 SPA 서비스를 일찍 접하게 되면서,정적웹 방식의 서비스를 많이 보지도 못했으며, 개발해 볼 일이 적었다. 이렇게 되면서, 자연스럽게 과거의 HTTP 통신과 관련된 깊은 내용에 대해서는 그냥 넘어가는 경우가 많았다.
> 그러나, React 서비스를 SSR 방식으로 개발하게 되면서 네트워크 통신에 대한 깊은 공부를 해야겠다고 마음을 먹었다. 공부를 하다보니, SPA 서비스에서 가장 중요한 DOM이 서버 통신의 한계를 극복하기 위해 생겨났다는 것을 깨닫게 되었다.
> 아래는 깨닫게 된 과정을 시간 순서대로 설명하였다.

<br/>
<br/>

# 1. HTTP 등장과 한계점

HTTP는 HyperText Transfer Protocal의 약자로써, 하이퍼 본문 전송 통신 규약 또는 약속을 말한다. Web에서 가장 중요한 통신 규칙이다.

HTTP는 추상적인 개념으로써, **클라이언트**와 **서버** 간에 이루어지는 의사소통이다. 소통 도구는 **request header**(요청 메시지)와 **response header**(응답 메시지)를 통해 이루어지며, 주로 html을 주고 받는다.
![](<https://images.velog.io/images/jun094/post/b00b36f4-4749-4160-bf59-7bdb6302ca68/Group%201%20(2).png>)

<br/>

### 1.1 Request Headers (client->server)

Request Headers는 **Message Header**와 **Message Body**로 구성되어있다. Message Header에는 메소드 방식(ex. GET, POST, ..), 파일 이름, 그리고 Http 버전 정보가 담겨져있으며, Message Body에는 host를 포함한 여러 개의 정보가 담겨져있다.

![](https://images.velog.io/images/jun094/post/56324ec1-081e-47b0-adad-4da016490df6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.08.57.png)

<br/>

### 1.2 Response Headers (server->client)

![](https://images.velog.io/images/jun094/post/0ff3291e-edd4-436e-8141-1632e299a932/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.09.36.png)
Response Headers에는 Http 버전, 상태코드, 그리고 content-type 등이 포함되어있다. 여기서 **상태코드**는 번호대로 응답 상태에 대해서 말해주기 때문에, 웹 프로그래밍 개발 시 매우 중요한 요소이다. (ex. 404: 존재하지 않는 페이지 접근, 405 : admin 페이지 접근 )

```
- 1xx : 정보응답
- 2xx : 성공
- 3xx : redirection
- 4xx : client error
- 5xx : server error
```

<br/>

### 1.3 과거 Http 한계점

과거 Http는 서버 통신 시, Html을 통째로 주고받았다. 즉, 사소한 서버 통신이 이루어질 때마다 서버 자원을 소모한다는 이야기이다. 서버 비용을 한 푼이라도 아껴야 하는 마당에, 이러한 방식은 여러 가지 한계점을 야기했다.

- 서버 요청을 보낼 때마다, 페이지가 새로고침됨. (UX의 문제)
- 쓸데없는 서버 자원이 소모됨.
- 상호작용이 어려움.

이러한 문제는 요즘과 같이 서버 상호작용이 많은 서비스에서 정말 많은 UX 문제를 야기한다. 예를 들어, 페이스북 타임라인에서 _'좋아요'_ 를 누를 때마다, 페이지 전체가 새로 고침이 되는 것이다. 타임라인 새로 고침이 되면, 당연히 스크롤은 최상단으로 가있을 것이고, 사용자는 전에 보았던 콘텐츠까지 다시 스크롤 다운 해야하는 문제점이 발생한다.

<br/>
<br/>

# 2. 비동기 방식으로 주고 받기

과거의 Http 통신 방법의 문제를 해결하기 위해 _비동기 통신_ 의 개념이 생기게된다. 비동기 방식은 서버에 요청시, 전체를 받는 것이 아니라, **필요한 부분만 주고 받는 식**이다.

### 2.1 XMLHttpRequest와 DOM의 등장

#### XMLHttpRequest

- `new` 연산자로 XHR 객체 인스턴스를 생성한다.
  `const httpRequest = new XMLHttpRequest();`
- 주고받는 데이터 형식은 xml이 주를 이루고 있다.
- JSON 데이터 형식도 내장 메소드를 통해 변환하여 보낼 수 있다.
  `xhr.send(JSON.stringify(data));`
- JS 뿐만 아니라, c++에서도 호출이 가능하다.
  `XMLHttpRequest.init();`
- 가독성이 떨어진다.

<br/>

#### DOM

> 예전에 DOM에 대해서 공부한 적이 있다. 과거에 React의 렌더링 원리를 공부하다가 Virtual DOM 의 개념이 나와서 잠깐 훑고 넘어갔다. 그때까지는 그냥 독립적인 객체? 컴포넌트? 같은 개념 인줄만 알고 넘어갔는데, 서버 통신을 공부하다보니 DOM 등장 배경에는 서버 통신이 있다는 것을 깨달았다.. ㅎㅎ

- Document Object Model 이며, html 파일 내에 태그로 묶여있는 하나의 객체들을 말하며, 그 객체에 접근할 수 있도록 도와준다.
- DOM은 Web API이며, API가 Brower에 내장되어있다.
  ex. Brower내에 `CSSOM` 이 CSS를 js로 번역해준다.
- DOM 에 접근하기 위해는 여러가지 메소드가 존재한다.

`document.createElement(name)` : tagName의 HTML 요소를 만들어 반환한다.
`document.getElementById(name)` : 해당 id 속성을 가진 요소를 찾는다.
`document.querySelector(name)` : 해당 선택자 또는 이름을 가진 요소를 찾느다.
`Node.appendChild(name)` : 자식을 추가한다.
`Node.cloneNode(name)` : 자식을 복제한다.

<br/>
<br/>

### 2.2 AJAX 통신 기법

![](https://images.velog.io/images/jun094/post/44ca51bf-4da6-4555-8db1-5061a36c16af/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.01.30.png)
AJAX는 비동기 프로그래밍 방식 중 하나이다. AJAX 엔진은 서버에 데이터 요청 후 업데이트가 이루어질 때 페이지 전체가 아닌, 일부만 리로드 한다. 또한, 서버에 요청하고 응답받는 시간 동안에 독립적으로 다른 작업을 할 수 있게 도와준다.

AJAX 엔진은 **Object(객체)** 를 활용해 서버와 상호작용하게 되며, **일부분**만 변경한다. 여기서 객체는 `XMLHttpRequest` 객체이며, 일부분은 `DOM` 을 말한다.

<br/>
<br/>

### 2.3 가독성 해결을 위한 비동기 통신 라이브러리

XMLHttpRequest의 가독성 문제를 해결하기 위해 DOM에 접근하는 여러가지 라이브러리가 등장했다.

#### JQuery.ajax

- 제이쿼리에서 제공하는 메소드로써, 가독성이 훌륭하다.
- 주로, csv, json, xml 데이터 형식으로 주고 받는다.
- `CRUD Operation`이 모두 가능하다.
- 통신 기능 이외에 여러가지 기능이 포함되어 있어, JQuery를 불러와야하므로 무겁다는 단접이 있다.
- promise 기반이 아니다.
- 예시 코드는 아래와 같다.

```javascript
$.ajax({
  url : '요청 url',
  [,Options]
})
```

#### Axios

- 호환성이 뛰어나다. (구형 부라우저 지원)
- JSON 데이터 자동 변환이 가능하다.
- npm 설치를 통해 import 해주어야 하는 단점이 존재한다.
- 반환값으로 Promise를 사용한다.
- 예시 코드는 아래와 같다.

```javascript
axios({
  url : '요청 url',
  method : '요청 방식',
  data:{
    json도 가능..
  }
})
```

#### ES6 내장 API, Fetch API

- ES6에 추가되었으며, 별도의 설치가 필요없다는 장점이있다.
- 라이브러리 업데이트가 필요없다.
- 네트워크 에러에 대한 대응이 어렵다.
- 반환값으로 Promise를 사용한다.

```javascript
fetch(resource, init).then(callback).catch(callback)
```

<br/>
<br/>

**출처**

- [깜찍한 프로그래머들을 위한 간단한 프로그래밍 상식](https://medium.com/@icehongssii/%EA%B9%9C%EC%B0%8D%ED%95%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EB%93%A4%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%83%81%EC%8B%9D-2-1-http%EB%A5%BC-%EB%84%98%EC%96%B4%EC%84%9C-ajax-79dc163488c4)
- [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [XMLHttpRequest of MDN](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
- [DOM of MDN](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)

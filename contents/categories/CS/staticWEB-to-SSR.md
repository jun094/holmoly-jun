---
date: '2021-06-17'
title: '정적 웹에서 SSR의 등장까지'
summary: '정적 웹에서 SSR 방식이 등장하기까지 시간 순으로 정리해보았다.'
thumbnail: './images/staticWEB-to-SSR-thumbnail.png'
---

# 구분 방식으로 나열

### 1. 정적 웹 vs 동적 웹 : 웹사이트 종류 차이

---

**정적 웹**

- Local에서 작성한 파일들을 그대로 Server에 올리고, 그것을 매번 같은 모습으로 Client에게 보여줌.
- ex. 과거 전통적인 신문사 홈페이지들, 상호작용이 적은 소개 페이지

**동적 웹**

- Server가 DB와 통신하면서 JS에 의해 매번 다른 모습으로 Client에게 보여줌
- ex. SNS

<br/>

### 2. MPA vs SPA : 페이지 개수 차이

---

**MPA**

- 페이지가 2개 이상인 어플리케이션
- 주로 SSR 방식 채택

**SPA**

- 최초의 개념은 페이지가 한 개인 어플리케이션
- ex. G메일, 구글지도
- 이후, 한 페이지에서 여러 페이지를 보여주는 효과가 가능해짐 -> CSR

<br/>

### 3. CSR vs SSR : 렌더링 방식 차이

---

**CSR**

- client가 사용자의 요청에 따라 server에게 필요한 부분만 요청 후, 응답받아 렌더링하는 방식
- 장점
  - 인터렉션 발생시, 필요한 부분만 요청
  - 빠른 페이지 전환(좋은 UX)과 서버 부하 감소
- 단점
  - SEO에 불리함
  - 느린 초기 로딩 속도 -> 모든 Js 파일도 함께 다운받으므로

**SSR**

- client가 server에서 조합된 html파일을 JS와 함께 렌더링하는 방식
- 장점
  - SEO 유리함 -> html파일 크롤링이 가능하므로
  - 빠른 초기 로딩 속도
- 단점
  - 인터렉션 발생시, 페이지 새로고침 -> 불편한 UX
  - 서버 부하 증가

<br/>
<br/>

## 시간순으로 나열

### 1. 정적웹(Static site) 등장

---

- 페이지 내에서, 동적인 활동은 불가능 (Js로 동적효과를 주기 어렵던 시기..)
- 페이지 이동시, 해당 Html 파일 전체를 서버로부터 받아옴.
- ex. 전통적인 신문사 홈페이지, 상호작용이 없는 소개 페이지

![](https://images.velog.io/images/jun094/post/937e6bd8-8b17-4000-a678-63f08849c45c/Group%2012.png)

<br/>

### 2. 여러가지 도구들로 인한, 동적웹(Dynamic site) 등장

---

- XMLHttpRequest와 DOM의 등장으로 부분 변경이 가능해짐. [[more]](https://velog.io/@jun094/서버통신부터-DOM의-등장까지)
- 필요한 데이터만 JSON형식으로 받아온 뒤, DOM API로 필요한 html 부분에 접근하여 업데이트해줌.

![](<https://images.velog.io/images/jun094/post/45b5a65d-1846-47db-906e-3f1b67bc9a2a/Group%2012%20(1).png>)

<br/>

### 3. SPA 서비스와 CSR 렌더링 방식

---

- AJAX 비동기 프로그래밍 등장
- **한 페이지** 내에서 서비스가 가능한 어플리케이션**(SPA)** 등장 ex.구글 지도
- 프레임워크의 등장(Angular, React 등)으로 한 개의 html 파일로 **여러 페이지** 렌더링 가능해짐 -> CSR 방식

![](https://images.velog.io/images/jun094/post/fcaa46b9-f304-4b8b-bd2e-9351661a2a5c/Group%2013.png)

<br/>

### 4. SSR 등장

---

- Cilent에서 모두 처리하여 서버 부화가 심하고, SEO에 취약한 CSR 방식을 해결하기 위한 대안이 필요.
- 정적웹에서 착안한 렌더링 방식인 SSR 등장.
- Server측에서 필요한 데이터가 포함된 html을 만듦 -> 해당 html과 동적제어가 가능한 JS파일을 함께 client에게 보냄.

![](https://images.velog.io/images/jun094/post/932bc711-c959-47e8-a2de-00239e6415c4/Group%2015.png)

<br/><br/>

#### 출처

- https://www.youtube.com/watch?v=iZ9csAfU5Os&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9by%EC%97%98%EB%A6%AC%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9by%EC%97%98%EB%A6%AC

---
date: '2023-08-07'
title: 'Blog 오픈 : 무지와 게으름에서 벗어나기 위한 몸부림'
categories: ['Blog']
summary: '안드로이드 개발자의 웹 개발 도전기'
thumbnail: './blog_intro.png'
---

## ➡️ Intro

안녕하세요, 처음으로 인사드리게 된 블로그 주인장 **케빈**입니다. <br/>
이 글에 앞서서 올라간 **[Android에서 MVVM 패턴이 중요한 이유](https://kevinlim17.com/test1/)** 이라는 포스트는 이 도메인에 쓰여질 목적으로 기획한 것은 아닙니다. 글쓴이가 재학중인 대학교의 학술 동아리 내부 자료 공유를 위해 짜여진 일종의 Encyclopedia 느낌의 글이지요. 블로그의 포스트라고 하기에는 부족한 점이 많은 것이 사실입니다. URL에서 그 흔적을 찾을 수 있습니다. 온전히 테스트를 위한 것이었음이 말이지요. 본격적인 시작에 앞서, 그 점을 먼저 밝혀 두겠습니다. 

그러니,
**글쓴이와 독자가 나눌 공유의 대서사시는 지금부터 쓰여질 것입니다.**

---

## 🧭 개설 목적

개발을 시작할 때에는 전혀 정리되지 않은 형태였지만, 블로그를 열게 된 지금에 이르러서야 그 틀이 잡히게 된, 이 공간의 탄생 배경입니다. 개인적인 이야기가 다수를 차지할 예정이니, (**공들여서 작업한**) 오른쪽 ToC(Table of Contents)를 활용하셔서 슬기롭게 넘기셔도 좋을 듯합니다.

### 플랫폼 독립하기

객관적인 실력과 경험이 어찌 되었든 간에 **저는 개발자입니다.**  확고한 글쓴이의 정체성 중 하나로 기능하고 있지요. 언젠가, 언제나 뜬구름과 같았지만, 내 이름을 건 도메인을 가지고 싶었습니다. 그리고 온전히 글쓴이 자신의 공간으로 기능하게 하고 싶었습니다. 드넓고 드넓은 웹의 바다에서 제가 머물 섬 하나가 필요했다고나 할까요. 그 섬을 억만장자들로부터 빌리기 보다는, 직접 탐험하고 개척하고 싶었습니다. (물론 도메인은 구글로부터 구매.......?) 

사실 이는 개발자가 가지는 성향에 따라 천차만별인 것이기 때문에, 어느 작업에 시간과 가치를 더 부여할지는 온전히 개인의 몫이므로, 플랫폼(Velog, Medium, Tistory 등)을 활용하는 것이 **"개발자스럽지 못하다"라고 이야기하는 것은 아님을 밝힙니다.** 경험과 노하우, 심지어 작업 내용 그 자체를 열린 공간에 공유한다는 행위 자체가 "개발자스러운" 것이지, 그러한 공간을 "직접 만드는 것"만이 그러하다는 것은 아니니까요. 어디까지나 저라는 개발자의 동인(動因)이, 어느 한 순간, '독립된 웹 공간'을 만드는 방향으로 작동했을 뿐입니다.    

---

### 웹의 세계에 다가서기

블로그를 만들어야겠다고 결심하기 전까지, 저는 웹 애플리케이션 개발에 거의 무지(無知)한 상태였습니다. 기본적인 자바스크립트(Javascript) 문법은 익힌 상태였지만, 할 수 있는 게 없었습니다. 프로그래밍 자체를 자바(Java)로, 서비스 개발은 안드로이드 네이티브(Android Native)로 시작한 덕분(?)에 웹 생태계에 익숙하지 못했던 터라 ("`npm`이 뭐죠? `yarn`은 어디에서 온 단어인가요?" 수준....까지는 아니긴 합니다만.) 왠지 모를 거부감과 두려움이 해묵은 안개가 되어 눈을 가렸습니다.

그래서 올해 초, 묵었다 못해 쉬어버린 안개를 걷으려, 배움의 즐거움을 되찾으려 시작한 것이 **TypeScript와 React 였습니다.**  (Javascript는 음... Java와 Kotlin에 익숙한 사람들은 아무래도 Type Safety에 민감하므로... 시도하지 않았습니다. 그리고 어떤 방식으로 학습했는지는 **🧑🏻‍💻개발 방법** 파트에서 더 이야기하겠습니다. ) 다행히 안개를 걷을 의미는 충만했습니다. 안드로이드에 비해 더 쉽고 직관적인 React의 View Component 구성은 약간의 힐링마저 선사했습니다. 그렇게 인내와 배움, 지적 유희로 가득찬 세 달 동안 뚝딱뚝딱 만들어낸 것이 지금의 결과물입니다.

---

### 생산한 텍스트에 대해 오롯이 책임지기

이는, 다시 한 번, 주인장의 정체성에 관한 이야기라고 볼 수도 있습니다. 글쓴이가 가진 자기표현의 수단은 '프로그래밍' 뿐만이 아닙니다. 제가 지금 이 순간, 행하고 있는, 글쓰기도 그 중 하나입니다. 이렇게 작성하고 나니, 이미 책이라도 몇 권 낸 사람처럼 여기실 수도 있지만, (아쉽게도...) 그렇지는 않습니다. 그래도 글을 쓰는 생태계에 진입하려 꾸준히 노력하고 있습니다. 블로그에 조그맣게 마련된 [**Writer's Space**](https://kevinlim17.com/brunch_stories/)는 그러한 시도의 산물입니다. (<i>무려 브런치 스토리 등단 작가 두둥 ! </i> )

브런치 스토리에는 예술, 사회, 문학, 과학에 대한 이야기, 그리고 여러 분야를 통섭하는 모험담을 써내려 갈 예정이라면, 이곳에는 오롯이 **Code**에 대한 글을 남길 예정입니다.
(자세한 포스트 로드맵은 **📝 앞으로의 계획** 에서...) 브런치 스토리에 남긴 글들이 책이 될 수 있듯(실제로 작가 지원 프로젝트의 일환으로 가능한 일입니다), **이 블로그도 하나의 책이 될 것입니다.** 그리고 책의 제본에는 작가의 각인이 남기 마련입니다. 그렇게 주인장이 생산해낸 텍스트는  그 어떤 필터도 거치지 않고 온전히 주인장 자신의 책임으로 남겨집니다. 

**개발자와 글쓴이으로서의 정체성을 동시에 지닌 하나의 개인이,** </br>
**웹의 세계에서, 직업 윤리와 창작자의 양심을 꿋꿋이 지켜내며,** 
**써내려 간 뒤 배포하는 것 그리고 공유하는 것.**

이 블로그가 지닌, 그리고 주인장이 지켜나가야 할 가장 중요한 가치입니다.

---


## 🧑🏻‍💻 개발과 배포

### TypeScript & React

<p align="left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="15%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="15%"/>
</p>

> Image Reference: Wikipedia

일단 **Gatsby라는 정적 웹 사이트 생성기**를 사용하여 블로그 개발을 하기로 마음먹은 이상, React를 공부하는 건 당연한 일이었습니다.(이유는 후술.) [**인프런**](https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8)에서 HTML, CSS, JS에 대한 가벼운 복습부터 미니프로젝트까지 이어지는, 무료 강의임을 감안해도 커리큘럼이 탄탄한 강의를 찾을 수 있었습니다. (클릭하면 해당 강의로 이동합니다.) 책으로도 출간된 강의라는 점이, (어쩌면 지루하더라도,)  분명 새내기 단계에서 큰 도움이 될 것이라 생각했고, 그 예상은 얼추 들어맞았습니다. 

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/36062cc0-943d-4f54-b07b-8b795efb644f" width="70%">
</p>

개인 Notion에 강의 내용을 핵심 개념 위주로 정리하며 공부했고, 블로그 개발 중에도 기본적인 것들에 혼동이 생기면 찾아보는 Document로 활용했습니다. 그렇게 JS를 통한 React 기초 쌓기가 얼추 마무리되었습니다. 그리고 글쓴이는 또 선택의 기로에 서게 되지요.

**JavaScript와 TypeScript 중 무슨 언어를 사용하여 개발할 것인가?**

쓸데없이 "엄청난" 양자택일처럼 강조해 놓았지만, (위에서 언급했듯이) Java와 Kotlin을 주로 사용하는 개발자가 선택할 수 있는 길은 정해져 있습니다. **"Type"** 이 덧씌워진 언어를 사용하는 것입니다. 사실 아래 사진과 같은 상황을 보고도 화(?)가 나지 않을 개발자가 있을지 모르겠습니다. 

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/95895680-7075-48d0-8b8f-78dd9c72af59" width="70%">
</p>

Array에 Boolean을 더했는데, 짜잔(?!) String이 되었습니다!

글쓴이는 '**개발자의 의도를 어떤 방식으로든 이해하려는 프로그래밍 언어**'는 그렇게 바람직하지 않다고 생각합니다. 가끔은 코드를 작성하는 사람에게 가벼운 실수라도 다시금 복기할 수 있게끔 경종을 울리는 것이 Language의 역할이라고 생각합니다. 우리가 사용하는 "음성 언어"와 "문자"처럼 말이지요. JavaScript는 웹의 알파이자 오메가이지만, 지속적으로 대체될 필요성은 충분하다고 느낍니다. 

그리고 TypeScript는, 웹 개발을 시작하는 모든 이에게 기꺼이 추천할 만한, 최고의 개발 인플루언서, [**노마드 코더(Nomad Coder)의 강의**](https://nomadcoders.co/typescript-for-beginners/)로 기초를 쌓았습니다. 이미 Java 등의 객체지향(Object-Oriented) 언어를 접해보신 분들에게는 TypeScript에서 Class와 Interface를 어떤 방식으로 다루는지 비교하면서 공부하시는 것도 추천드립니다.

### Gatsby & GraphQL

<p align="left">
    <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png" width="15%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" width="15%"/>
</p>

> Image Reference: Wikipedia </br>
> 이 문단의 GraphQL 관련 내용은 **99CORN**님의 [**[간단정리] GraphQL이란? (REST api와 차이점)**](https://hahahoho5915.tistory.com/63)을 참고해 작성하였음을 밝힙니다.

> **Gatsby** is an open-source static site generator <br/>
> built on top of Node.js using **React and GraphQL.**

[위키피디아](https://en.wikipedia.org/wiki/Gatsby_(JavaScript_framework))의 설명에서 쉽게 알 수 있듯이, Gastby는 정적 웹 사이트 개발을 지원하는 JavaScript 프레임워크입니다. React라는 프론트엔드 라이브러리와 GraphQL라는 데이터 쿼리 언어를 활용하지요. 기본적으로, '**정적(Static)**'이므로, 백엔드 프레임워크를 필요로 하지 않습니다. (물론 백엔드가 구현되어 있는 경우에만 제작할 수 있는 기능을 구현하는 데 제약이 있다는 의미입니다.) **웹사이트를 방문하는 사람과 UI 간의 상호작용이 극히 제한된 형태로만 필요한 경우** -댓글 기능을 제외한 블로그 혹은 포트폴리오 사이트가 이에 해당됩니다- 에 Gatsby는 매우 좋은 선택지입니다. 지금 이 포스트를 읽는 여러분이 방문한 웹의 '무인도'도, [Github Utterances](https://github.com/utterance)를 활용한 댓글 기능을 제외하면, 바로 그러한 상황에 해당되기에 기꺼이 '블로그 건설 방법론'으로 택했음을 밝힙니다. 

**Gatsby**가 방법론이었다면, **GraphQL**은 새로 지을 건물에 어떻게 '데이터'라는 물자를 공급할 것인지에 대한 해답입니다. 사용자가 보는 '뷰(View)'에 데이터를 나르는, 백엔드에서 API를 설계한다고 하면, **REST API**를 작성하는 것이 일반적입니다. 

이런 식의 관계형 데이터베이스가 존재한다고 가정해 봅시다. (출처는 개인 Notion입니다.)
<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/519710e7-0629-40c0-84f3-23794856ab60" width="100%">
    
</p>

위를 바탕으로 구성한 REST API는 다음과 같은 엔드포인트(Endpoint)를 가질 수 있습니다.
```

-> 장르를 기준으로 작성하는 경우
phrases-database.dev/api/sf
phrases-database.dev/api/sf/{reading_status}

// reading_status는 시작전 / 읽는중 / 완료에 따라 각각 0 / 1 / 2의 값을 가짐.

-> 상태를 기준으로 작성하는 경우
phrases-database.dev/api/done
phrases-database.dev/api/in_progress
phrases-database.dev/api/in_progress/{genre} 

```

아래는 특정 책의 정보에 대한 request와 response의 예시입니다. </br>
(실제 안드로이드 네이티브에서 사용하는 Api Client 코드와 유사한 형태입니다. 비약이 많으니 안드로이드 개발자분들의 너른 양해🙏를 부탁드립니다.)

</br>

**Data Request from Client(Android Native)**

```kotlin

data class Book {
    val title: String,
    val genre: String,
    val status: Int,
    val writer: String,
    val phrases: List<String>,
    val summary: String,
    val pros: String,
    val cons: String
}

interface APIClient {

    // REST API Request
    @GET("sf/{reading_status}")
    suspended fun getSFBookDetailbyStatus(@Path{reading_status} reading_status: Int): List<Book>

    ...

    companion object {

        private const val baseUrl = "https://phrases-database.dev/api"

        fun create(): ApiClient {

            ...
        }
    }
}


```

**Data Response**

```json
[
    {
        name: "멋진 신세계",
        genre: "sf",
        status: 0,
        writer: "올더스 헉슬리",
        phrases: [],
        summary: "",
        pros: "",
        cons: "",
    }
]
```

예시가 길었지만, 말하고자 하는 이야기는 단순합니다. 
위에 언급된 데이터베이스는 적은 양의 정보만을 담고 있으나, 책이 수천-수만 권이 쌓이고, 필터에 적용되는 조건들이 많아질수록 엔드포인트도 늘어납니다. 서비스에서 필요한 응답마다 엔드포인트를 새로 구성해야 하기 때문이죠. 그만큼 필요한 HTTP 요청도 증가합니다. 그렇다면 **GraphQL이 가지는 이점**에는 무엇이 있을까요?

1. HTTP 요청 횟수를 줄일 수 있다.
2. 응답 사이즈를 임의로 조정할 수 있다.
3. 프론트엔드 개발자와 백엔드 개발자의 소통 부담이 줄어든다.

[Apollo Kotlin](https://github.com/apollographql/apollo-kotlin)의 예시를 살펴 보면서, 조금만 더 이야기 나누어 보겠습니다. (어째 글이 다른 길로 새고 있는 듯하지만... )

**Execute Query**

```graphql
query BookQuery($id: String!) {
  book(id: $id) {
    name
    genre
    writer
  }
}
```
```kotlin
 // Create Client
  val apolloClient = ApolloClient.Builder()
      .serverUrl("https://phrases-database.dev/graphql")
      .build()

  // Execute your query. This will suspend until the response is received.
  val response = apolloClient.query(BookQuery(id = "1")).execute()
```

**GraphQL Response**

```graphql
{
    "data": {
        "book": {
            "name": "멋진 신세계",
            "genre": "sf",
            "writer": "올디스 헉슬리"
        }
    }
}
```

GraphQL이 가지는 이점을 위의 세 코드로 다시 정리해 보았습니다. 
임의로 쿼리를 구성하여 그때그때 필요한 데이터만을 가져올 수 있다는 것(첫 번째 그리고 세 번째 예시), 그러므로 필요한 엔드포인트가 줄어들고, 당연하게도 HTTP 요청 횟수도 감소한다는 것(두 번째 예시)이 자명합니다. 

사실 Meta(구 Facebook)에서 위와 같은 쿼리 언어를 개발하고 사용하기 시작한 이유도, Data Request 부담을 줄여 모바일 환경에서도 쾌적한 사용자 경험을 제공하기 위함이었습니다. 어떻게 보면, Gatsby로 개발하며 GraphQL을 공부할 수 밖에 없었던 상황 자체가, 모바일 개발자인 저로서는 행운이었다고 할 수 있겠네요.

GraphQL과 안드로이드에 대한 자세한 이야기는 추후에 다른 포스트로 찾아뵙겠습니다.


### Github Action
<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/2fca0b4b-66f0-4560-ad99-2808d2cd14df" width="15%">
    
</p>

> Image Reference: [Github Group: action](https://github.com/actions)

마지막으로, 배포입니다. 페이지를 수정하거나 포스트를 올릴 때마다 매번 `gatsby build` 명령어를 입력하기는... 귀찮았습니다. (개발 완료 시점에서) **앞으로 제한된 환경**에서 블로그에 글을 쓰게 될 텐데, 미리 배포를 자동화시켜 놓으면, 불확실성을 조금이나마 줄일 수 있을 것이라 생각했습니다. (물론 그 제한된 환경이라 함은.. 네 맞습니다. 군대입니다.)

```yml
name: Deploy kevinlim17-blog
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v3

      - name: Gatsby GH Pages Action
        uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.GATSBY_DEPLOY_API_KEY }}
          deploy-branch: release
```

Gatsby는 또 한 번 해냅니다. 배포하기도 굉장히 쉽습니다. [**Gatsby Publish**](https://github.com/enriikke/gatsby-gh-pages-action)를 활용하면 위와 같이 간단한 `.yml` 파일 작성으로 간단히 자동화 프로세스을 구현할 수 있습니다. 

위 코드를 간단하게 설명해 보자면,

1. main branch에 `push`가 이루어지면, (`on: push: branches`)
2. ubuntu 최신 환경에서
3. Source Code를 Checkout하고,
4. 제공된 Action을 사용해 release branch에 deploy합니다.

이렇게 구성하면, 로컬에서 `git push origin main`만 입력하면 (조금 기다린 뒤에) </br>
짜잔(?!) 여러분이 보고 계신 포스트가 나타납니다. 

---

## 📈 개선 사항

### Mobile UI 

### ToC(Table of Contents)

### Categorize
---

## 📝 앞으로의 계획

### Android: Architecture

### Android: Never been tried

### Machine-Learning Standard

### Code through Words

> <i> 저는 프로그래머와 변호사, 소설가라는 저의 세 가지 직업이 서로 관련되어 있다고 생각합니다.<br/>
> 결국에는 모두 '현대의 기호룰 다루는 직업'이기 때문입니다. <br/>
> 다시 말해 이들 직업은 기호적 인공물을 쌓아 올려서 의미 있는 것을 만들어 낸다는 뜻입니다. <br/>
> 예컨대 프로그래머는 프로그래밍 언어라는 기호를 적어서 <br/>
> 어떤 기능을 지닌 프로그램을 만듭니다. <br/>
> 변호사는 계약이라는 법률 시스템 안에서 태어난 기호적 인공물을 다루어 <br/>
> 의뢰인을 지키기 위한 논거를 만듭니다. <br/>
> 그리고 작가는 말을 사용하여 감정을 움직이는 이야기를 만듭니다. <br/> </i>
> 
> 켄 리우(Ken Liu). (2018). **종이 동물원**(The Paper Menagerie and Other Stories) (pp. 565). 황금가지. <br/>
> <<와이어드닷컴 저팬>> 2017.05.20자 인터뷰에서 인용 및 번역.

### Bug & Fix Report
---

## 🔚 마치며
> 당신과 나, 우리는 서로 다르고,
> 우리가 지닌 의식의 특질도 우주 양 끝의 두 별 만큼이나 서로 다르다. <br/>
> 그럼에도, 내 사유가 문명의 미로를 지나 당신의 정신에 닿는 기나긴 여정에서 <br/>
> 번역을 거치며 아무리 많은 것을 잃어버린다 해도, <br/>
> 나는 당신이 나를 진정으로 이해하리라 믿고,
> 당신은 당신이 나를 진정으로 이해한다고 믿는다. <br/>
> 우리 정신은 어떻게든 서로에게 닿는다. 비록 짧고 불완전할지라도. <br/>
> 사유는 우주를 조금 더 친절하게,
> 좀 더 밝게 좀 더 따뜻하고 인간적이게 하는 것이 아닐까? <br/>
> 우리는 그런 기적을 바라며 산다.
>
> 켄 리우(Ken Liu). (2018). **종이 동물원**(The Paper Menagerie and Other Stories) (pp. 8-9). 황금가지.

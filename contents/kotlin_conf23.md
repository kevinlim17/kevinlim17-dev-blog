---
date: '2023-09-02'
title: "Kotlin Conf'2023 Global with Inflearn 후기"
categories: ['Kotlin', 'Review']
summary: '안드로이드 생초보의 첫 개발자 컨퍼런스'
thumbnail: './kotlin_conf23.png'
---

## ➡️ Intro

안녕하세요, 케빈입니다. 

블로그를 오픈한지 얼마 되지도 않았는데, 벌써 계획과 다른 방향으로 나아가는 게 아니냐([**블로그 소개 글 참고**](https://kevinlim17.com/blog_intro/)) 우려를 표명하실 수 있으리라 생각하실 수 있습니다. 계획에 포함되어 있지 않을 뿐이지, 이런 리뷰 포스트를 아예 쓰지 않겠다고 한 것은 전혀 아니었으니, 부디 양해해 주시길 바랍니다. (당연히 다른 글도 올릴 겁니다. 쓸 글이 산더미예요.) 수업을 듣거나, 온라인 강의를 수강하거나, 컨퍼런스에 참석하거나, 동아리에 참여한 경우에도, 조금씩 써내려갈 생각입니다. 물론 인트로 포스트에서 얘기한 시리즈들과는 다르게 '온전한 형태의 비정기' 연재가 될 것임은 자명합니다.

뜬 구름 잡는 이야기는 과감히 각설하고, 이 공간에서 다룰 내용은 '**컨퍼런스 리뷰**'입니다. 
무려 글쓴이가 사회인이던 시절(그래봤자 고작 4달 전 이야기지만)에 다녀온 것이라, 매우 늦은 감이 없지 않아 있지만, 그래도 개인 노션에 후기를 Raw한 형태로라도 정리해 두었으니, 정돈된 형태로 다듬어 보자는 결심에서 공유해 봅니다. 

지난 4월 25일, 판교 인프랩 오피스에서, 저녁 6시 30분부터 두 시간 가량 진행된, "**인프런 퇴근길 밋업 with KotlinConf'23 Global**"에 대한 짤막한 소감과 **코틀린(Kotlin)이라는 언어의 미래**에 대한 제 생각들을 중심으로 이야기 나누어 보겠습니다. 

함께 가시죠.

---

## 🧑🏻‍💻 What is Kotlin?
<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/152e3746-7086-4fe9-86f2-ba0d987a2df7" width="20%">
</p>

> 
> **컬러풀하고 거대한 K.** <br/>
> 이 파트에서는 [**Kotlin Programming Language Official Site**](https://kotlinlang.org/) 에서 언급하는 내용들과 <br/>[**영문 위키피디아: Kotlin(Programming Language)**](https://en.wikipedia.org/wiki/Kotlin_(programming_language))를 번역하고 요약해 작성했습니다.
>

한 언어의 미래에 대해 논하려면, 먼저 과거와 현재를 알아야겠지요. 기꺼이 한 단락을 할애할 가치가 충분합니다. 
우선 Kotlin FAQ(Frequently Asked Questions) 페이지에 언급된, '[**Kotlin이 무엇이냐**](https://kotlinlang.org/docs/faq.html#what-is-kotlin)'라는 질문에 대한 답을 살펴보도록 하겠습니다.

>
> Kotlin is an open-source statically typed programming language that targets the JVM, Android, JavaScript, Wasm, and Native. <br/>
> It's developed by JetBrains. <br/>
> The project started in 2010 and was open source from very early on. <br/>
> The first official 1.0 release was in February 2016.
>
> Kotlin은 오픈소스 정적 타입 언어로서, JVM(Java Virtual Machine), 안드로이드, 자바스크립트, 웹어셈블리, 네이티브를 타겟으로 지원합니다. <br/>
> Jetbrains 사에 의해 개발되었으며, Kotlin 프로젝트는 2010년에 [**첫 발걸음**](https://github.com/JetBrains/kotlin/commit/3e4dce385331c91c9059fcdcea3eae2394f34942)을 떼었습니다. <br/>
> 1.0 버전의 공식 배포는 2016년 2월에 이루어졌습니다. <br/>
>

답변을 찬찬히 뜯어보면, 크게 두 가지 지점에서 눈길이 멈춥니다.

'**정적 타입(Statically Typed)**' 그리고 수많은 '**타겟**'.

먼저 정적 타입에 대한 이야기입니다. Kotlin은 Java를 기반으로 출발한 언어답게, 강한 Type-Safety(타입 안정성)를 추구합니다. 정적 타입의 언어는 컴파일 시에 변수의 타입을 결정합니다. (이와 반대로 JavaScript와 같은 동적(Dynamically-Typed) 언어는 런타임 시에 변수의 타입이 결정됩니다.) 여기에서 조금 더 개념을 확장해, 바인딩(Binding)에 대한 이야기로 넘어가 보죠.

>
> **| 코틀린은 동적 바인딩보다 정적 바인딩을 더 선호한다 |** <br/>
> 
> 코틀린은 타입 안전한, 합성적인 코딩 스타일을 장려한다. 확장 함수는 정적으로 바인딩된다. <br/>
> 기본적으로 클래스는 확장될 수 없고, 메서드는 다형적이지 않다. <br/>
> 여러분은 명시적으로 다형성과 상속을 활성화해야 한다.
> 
> 덩컨 맥그레거, 냇 프라이스, <i>자바에서 코틀린으로</i>, 오현석 역, (서울: 한빛미디어), 30p.
>

프로그래밍 세계에서 바인딩은 간단하게 ['**호출과 본문의 연결(Association of method call to the method body)**'](https://beginnersbook.com/2013/04/java-static-dynamic-binding/)이라고 정의할 수 있습니다. (원래는 '묶다'라는 의미로 널리 알려져 있지요.) Kotlin이라는 언어에서 정적 바인딩을 선호한다는 것은 크게 두 가지 의미를 지닙니다.

1. 기본적으로 Class는 상속을 지원하지 않습니다. Overriding도 마찬가지입니다. 
   (`open` 키워드를 추가하지 않으면, `final`로 설정됩니다.)
2. Method Overriding은 컴파일 타임(JVM 기준, .kt 코드가 .javac 바이트코드로 바뀔 때)이 아니라, 런타임에 이루어집니다. 
    ( **Runtime Polymorphism** 에 대한 이해가 필요합니다. )

**Polymorphism (다형성)** 과 **Binding** 에 대한 이야기는 ["[Android: Architecture #1] 객체지향이 뭔가요?"](https://kevinlim17.com/object_oriented/) 와 추후 포스트에서 조금 더 다뤄보기로 하고, 여기서는 Kotlin이 **"안정성"** 을 중시하는 언어라는 것만 짚고 넘어가도록 하겠습니다.


> 아름다운 도식. 컬러풀한 매력을 가진 언어.

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/cf150554-f464-4da4-91e6-6efffa1d0ad0" width="80%">
</p>

그리고 <i>크고 아름다운</i> 타겟의 수입니다. Kotlin이 가진 강력함은 사실 여기서 출발합니다. 
Kotlin은 Java와 <u>**100% 상호 호환**</u>됩니다. 거대한 Java 생태계를 흡수할 수 있다는 사실 하나만으로, 이 언어가 가진 무한한 '가능성'을 보여줍니다. (이게 가능한 이유는, JVM이나 Android를 타겟으로 했을 때, Kotlin은 일차적으로 자바 바이트코드(`.javac`)로 컴파일되기 때문입니다.) 

그 밖에도, Javascript, Native(MacOS, iOS, Windows, Linux, Android NDK를 지원하며, 코틀린 코드를 네이티브 바이너리로 바로 바꿔야 하는 경우 사용), WebAssembly(아직 시험 단계)를 위한 컴파일러를 각각 제공합니다. 단순히 Android Native나 Spring를 이용한 Backend 개발에서 Java라는 언어의 역할을 대체하는 것 이상을 바라보고 있다고 생각하셔도 좋을 것 같습니다. 웹 애플리케이션이나 데이터 사이언스, 임베디드 분야에서도 다른 언어의 지위를 넘보고 싶다는 의도가 다분하니 말이죠. (궁금하신 분들은 [**Kotlin PlayGround**](https://play.kotlinlang.org/)에서 직접 여러 환경을 체험보시는 것도 좋습니다.)

이렇게 공식 답변만 뜯어보더라도 흥미로운 내용이 한 바가지라니! 
이어서 Definition으로는 채 다 서술하지 못하는 Kotlin의 특성에 대해 조금 더 알아보고, 이 언어가 과연 궁극적으로 지향하는 바가 어디에 있는지 힌트를 조금만 더 얻어보도록 하겠습니다. 조금 더 힘내어, 걸어 보자구요.

___

### Kotlin의 특성
<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/cb67d5e7-e732-41e0-aaee-6ae1cd63d31a" width="80%">
</p>

> **일단은 재밌어야 한다. 배우는 게 뭐든.** </br>
> [Official Site](kotlinlang.org) 대문에서 가져온 인상깊은 문구.

#### Concise

#### Cross-platform

#### Safety

#### Asynchronous

#### Object-oriented & Functional

___

### Kotlin의 지향점
<p align="left">
    <img src="https://kotlinlang.org/lp/multiplatform/static/multiplatform-diagram-d716356ba4b4f2488c98714db033bd53.svg" width="80%">
</p>

>  한 장으로 요약 가능.



---
## 🔙 Kotlin Conf' is Back!

### Growing of Kotlin

---
### K2 Compiler

---
### Kotlin 2.0

---
### Multiplatform

---

## 💬 Networking

___

## 🧭 Reference
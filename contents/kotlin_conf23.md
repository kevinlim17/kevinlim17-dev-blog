---
date: '2023-09-02'
title: "지금의 Kotlin 그리고 Kotlin Conf'2023"
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
먼저, Kotlin은 Java와 <u>**100% 상호 호환**</u>됩니다. 거대한 Java 생태계를 흡수할 수 있다는 사실 하나만으로, 이 언어가 가진 무한한 '가능성'을 보여줍니다. (이게 가능한 이유는, JVM이나 Android를 타겟으로 했을 때, Kotlin은 일차적으로 자바 바이트코드(`.javac`)로 컴파일되기 때문입니다.) 

 
그 밖에도, Javascript, Native(MacOS, iOS, Windows, Linux, Android NDK를 지원하며, 코틀린 코드를 네이티브 바이너리로 바로 바꿔야 하는 경우 사용), WebAssembly(아직 시험 단계)를 위한 컴파일러를 각각 제공합니다. 단순히 Android Native나 Spring를 이용한 Backend 개발에서 Java라는 언어의 역할을 대체하는 것 이상을 바라보고 있다고 생각하셔도 좋을 것 같습니다. 웹 애플리케이션이나 데이터 사이언스, 임베디드 분야에서도 다른 언어의 지위를 넘보고 싶다는 의도가 다분하니 말이죠. (궁금하신 분들은 [**Kotlin PlayGround**](https://play.kotlinlang.org/)에서 직접 여러 환경을 체험보시는 것도 좋습니다.)

이렇게 공식 답변만 뜯어보더라도 흥미로운 내용이 한 바가지라니! 
이어서 Definition으로는 채 다 서술하지 못하는 Kotlin의 특성에 대해 조금 더 알아보고, 이 언어가 과연 궁극적으로 지향하는 바가 어디에 있는지 힌트를 조금만 더 얻어보도록 하겠습니다. 조금 더 힘내어, 걸어 보자구요.

___

### Kotlin의 특성
<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/cb67d5e7-e732-41e0-aaee-6ae1cd63d31a" width="80%">
</p>

> **일단은 재밌어야 한다. 배우는 게 뭐든.** </br>
> [Official Site](kotlinlang.org) 대문에서 가져온 인상깊은 문구. </br>
> (Functional의 `fun`은 아니겠지요..?)

#### Concise

비교적 최근에 개발된 언어답게, 문법 자체가 **간결한** 편입니다. </br>
이러한 면에서 Kotlin과는 대척점에 서 있는, 코드 길이라 하면 둘째가기 서러운 Java와 비교하며 살펴 보겠습니다.

<table>
<tr align="left">
<th > Java Code </th>
<th> Kotlin Code </th>
</tr>
<tr>
<td valign= "top";>

```java

class HelloWorld {
    public static void main(String[] args) {
        String name = "stranger";
        System.out.println("Hi, " + name);
        System.out.print("Current count:");
        for (int i = 0; i<= 10; i++) {
            System.out.print(" " + i);
        }
    }
}


 ```

</td>
<td valign= "top";>

 ```kotlin

 fun main(){
    val name = "stranger"        
    println("Hi, $name!")        
    print("Current count:")
    for (i in 0..10) {           
        print(" $i")https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/e4a4c768-b89c-4cd2-a373-6a4ed07665f0
    }
 }


 ```

</td>
</tr>
</table>

 > Kotlin Code 출처: [Official Site Code Example](kotlinlang.org), Java Code는 글쓴이가 작성.

두 코드는 정확히 같은 결과를 출력합니다. 그러나 결과를 도출하는 방식에는 많은 차이가 있는데요.
크게 세 가지 부분이 눈에 띕니다.

1. Class의 작성을 강요하지 않는다.
2. Java System Class에 속한 Method임을 명시적으로 작성하지 않아도 된다.
3. Type Inference(타입 추론)를 지원한다. 

위의 첫 번째 포인트가 바로 Kotlin과 Java라는 언어의 결을 완전히 다르게 만든 분기점이라고 볼 수 있습니다. Kotlin Community는 객체지향(Object-Oriented)은 물론이고, **함수형 프로그래밍(Functional Programming)** 도 "우리 언어가 가진 특성"이라 적극적으로 홍보합니다. 이 부분은 다섯 번째 특성에서 더 자세히 다뤄볼게요.
(그리고 아래에서 다룰 거지만, Kotiln에는 함수형 프로그래밍의 중요한 특성 중 하나인 First-Class Citizen이 존재합니다. 이는 언어의 간결함을 결정짓는 요소라 볼 수도 있습니다.)

두 번째 포인트입니다. Kotlin은 [**Standard Library**](https://github.com/JetBrains/kotlin/tree/master/libraries/stdlib)를 통해 기본적인 작업에 필요한 함수들을 구현해 두었습니다. 타겟에 따라, 기존 언어(Java, Javascript)의 메서드를 그대로 가져온 경우도 있고, [Native가 타겟](https://github.com/JetBrains/kotlin/tree/7a7d392b3470b38d42f80c896b7270678d0f95c3/kotlin-native/runtime/src)인 경우 C++과 Kotlin 자체를 활용해 작성한 것이 보입니다. 꼭 명시해야하나... 싶은 부분을 감췄다는 데에 의의가 있겠네요.

마지막 포인트입니다. 위 Kotlin code에서 `name`이라는 변수를 선언할 때, 따로 타입을 명시하지 않았습니다. 이는 **타입 추론(Type Inference)** 를 지원한다는 의미입니다. 굳이 `val name: String = "stranger"` 이런 식으로 작성하지 않아도 된다는 것입니다.

또 하나의 예시를 볼까요. 이번에는 Class에 대한 이야기입니다. 

<table height="500">
<tr align="left">
<th > *1. Java class </th>
<th> *2. Kotlin class </th>
</tr>
<tr valign="top">
<td>

```java

class Developer {
    private final String githubUsername;
    private final String favoriteLang;

    public Developer(String githubUsername, String favoriteLang) {
        this.githubUsername = githubUsername;
        this.favoriteLang = favoriteLang;
    }

    public String getGithubUsername() {
        return githubUsername;
    }

    public String getFavoriteLang() {
        return favoriteLang;
    }

    public void setGithubUsername(String newUsername) {
        this.githubUsername = newUsername;
    }

    public void setFavoriteLang(String newFavoriteLang) {
        this.favoriteLang = newFavoriteLang;
    }

    @Override 
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Developer that = (Developer) o;
        return githubUsername.equals(that.githubUsername) &&
                favoriteLang.equals(that.favoriteLang);
    }

    @Override
    public int hashCode() {
        return Objects.hash(githubUsername, favoriteLang);
    }
}


 ```

</td>

<td valign="top">https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/e4a4c768-b89c-4cd2-a373-6a4ed07665f0

```kotlin

class Developer(
    val githubUsername: String,
    val favoriteLang: String
) {
    override fun equals(o: Any?): Boolean {
        if (this === o) return true
        if (o == null || javaClass != o.javaClass) return false
        val that = o as Developer
        return githubUsername == that.githubUsername 
            && favoriteLang == that.favoriteLang
    }

    override fun hashCode(): Int {
        return Objects.hash(githubUsername, favoriteLang)
    }
}


```

</td>



</td>
</tr>
</table>



Kotlin으로 코드를 작성하면 얻을 수 있는 이점은 Class를 구성할 때 더욱 도드라집니다. 
가장 간단하게 Intellij IDEA(또는 Android Studio)에서, <b>*1</b>과 같은 코드를 묶어 <b>'Convert Java File to Kotlin File'</b> 를 클릭하면, <b>*2</b> 와 같은 코드가 됩니다. 줄 수가 무려 반 이상 감소한 모습을 볼 수 있는데요. 정확히 어떤 부분들이 생략되었는지 변환 과정을 톺아보면,

1. `constructor`가 Class Header 안으로 들어갔습니다. </br>
   => 여기 들어간 Constructor를 Primary Constructor라고 합니다. (객체지향을 지원하는 다른 언어들처럼) Class 본문에서 추가로 만들 수 있습니다.
2. `constructor`에서 사용되는 프로퍼티(Property)는 Class Header의 Parameter로 들어갑니다.
3. Class Header 안에서 선언된 프로퍼티의 private 필드(field)와 getter/setter 메서드는 명시적으로 표시되지 않고, Kotlin Complier가 자
</td>



</td>
</tr>
</table>


동으로 생성합니다.

기본적으로 Class를 생성할 때 필요한 Boilerplate Code(찍어내듯이 매번 생성해야 하는 코드)가 Kotlin에서는 눈에 띄게 줄어들었습니다. 하지만, 조금 더 나아가, 한 번 더 마법을 써 볼까요?

 ```kotlin

data class Developer(
    val githubUsername: String,
    val favoriteLang: String
)


 ```



이번에는, 그나마 남아있던 메서드(`equals`, `hashCode`)마저 사라졌습니다. `class` 앞에 `data`를 붙이면, Kotlin Compiler가 사용자가 작성하지 않은 `equals`, `hashCode`, `toString`, `copy`. `componentN` 메서드를 대신 생성해 줍니다. 

물론 `data class`는 일반 Class와 1:1 대응 관계에 있는 것은 아닙니다. 몇 가지 한계가 있는데요, 간단하게만 이야기해 보자면, ([Data Classes | Kotlin Documentation](https://kotlinlang.org/docs/data-classes.html) 참고)

</td>



</td>
</tr>
</table>



1. `abstract`, `sealed`, `inner`, `open`을 앞에 붙일 수 없습니다. 
2. Primary Constructor는 최소 1개 이상의 프로퍼티를 가져야 합니다.
3. `val` 또는 `var`로 선언해야 합니다.

위 가정을 충족하지 않는 상황 말고도, `data class`를 사용하지 말아야 하는 경우가 존재하는데요. (기본적으로 캡슐화(Encapsulation)을 지원하지 않기 때문입니다.) 적절히 사용한다면, 생산성 향상에 이만한 툴도 없습니다. (여담으로,  Android Native에서 Model Class 작성 시 매우 편리합니다.) 

더 많이, 이 언어의 간결함을 설명하기에, 더 이상의 지면을 할애하기는 글쓴이도 독자도 모두 지치기에 아쉽게 마칩니다만, 
아직 배워나갈 건, 써내려 가야 하는 건 더 많으니까요. <br/>
**`takeIf`, `when`, `.let`** 등 흥미로운 구문들은 안드로이드 포스트에서 조금 더 다루도록 하겠습니다. 

#### Safety
</td>



</td>
</tr>
</table>




> 
> 반대로 코틀린은 널을 포용한다. <br/>
> 선택성을 표준 라이브러리 대신 타입 시스템의 일부로 넣는다는 말은 <br/>
> 코틀린 코드 기반(codebase)가 없음을 뜻하는 값을 일관성 있게 다룰 수 있다는 뜻이다, <br/>
> (그러나) 코틀린의 널 처리는 완벽하지는 않다.
> 
> 덩컨 맥그레거, 냇 프라이스, <i>자바에서 코틀린으로</i>, 오현석 역, (서울: 한빛미디어), 62p.
>

Kotlin에서 안전성(Safety)이라 하면, 십중팔구 'Null Safety'를 이야기하는 것입니다.'Type-Safety'를 지원하는 정적 타입의 언어는 Kotlin을 제외하고라도 이미 많이 존재하기 때문입니다. 그러니 타입에 대한 내용은 앞에서 바인딩(Binding)에 대해 언급하며 짚어보았으니, 여기에서는 Null이라는 '타입 시스템의 일부'에 대해 더 자세히 살펴보겠습니다. 

[공식 문서](https://kotlinlang.org/docs/null-safety.html#nullable-types-and-non-nullable-types)에서도 구현의 의도를 비교적 명확히 했습니다.

>  Kotlin's type system is aimed at eliminating the danger of null references, also known as [The Billion Dollar Mistake](https://en.wikipedia.org/wiki/Null_pointer#History). </br>
> One of the most common pitfalls in many programming languages, including Java, 
> is that accessing a member of a null reference will result in a null reference exception. </br>
> In Java this would be the equivalent of a `NullPointerException`, or an ***NPE*** for short. </br>
>
> </br>
>
> Kotlin의 타입 시스템은, ‘***백만 불짜리 실수***’로 흔히 언급되는 널 참조의 위험을 없애는 데 초점을 맞추어 개발되었습니다. </br>
> Java를 포함해, 수많은 프로그래밍 언어가 가진 함정은, </br>
> 널 참조의 멤버에 접근하는 시도 자체가 “null reference exception”으로 이어진다는 것입니다. </br>
> 이를 Java에서는 `NullPointerException` 으로 취급하며, 짧게 ***NPE***라고 부르기도 합니다.
>

**"그래서 우리는 Null을 타입으로 만들기로 했어요."** </br>
가 핵심 논지입니다. 정확히는 Kotlin Type System이 참조(Reference)의 방식을 크게 두 가지로 분류한 것입니다. `null`을 포함할 수 있는 참조(nullable reference)과 그렇지 않은 참조(non-nullable reference)가 그것입니다. 간단한 예시를 살펴 보죠. 


<table>
<tr align="left">
<th></th>
<th >non-nullable </th>
<th>nullable </th>
</tr>
<tr>
<td>Code</td>
<td valign= "top";>

```kotlin

fun main() {
    var num: Int = 10
    num = null
    print(num)
}


 ```

</td>
<td valign= "top";>

 ```kotlin

 fun main() {
    var num: Int? = 10
    num = null
    print(num)
 }

 
 ```

</td>
</tr>
<tr>
<td>Result</td>
<td valign="top">

```
Compilation Error:
Null can not be a value 
of a non-null type Int
```

</td>
<td valign="top">

```
null
```

</td>
</tr>
</table>

위 코드에서, (Generic를 아는 독자라면 익숙한 알파벳) **`T?`** 는 **`T`** 를 포함한다는 것을 쉽게 알아챌 수 있습니다. 뒤에 `?`을 붙임으로써, 기존 타입이 `null`을 포함할 수 있음을 표현한 것이죠. (즉, `null`이 다른 원시 타입들처럼 메서드를 가지거나 독립적으로 그것의 Instance를 생성할 수 없다는 이야기입니다. 그럴 이유도 없고 말이죠.) `null`이 기존 타입 시스템에 편입됨으로써 가지는 가장 큰 이점은 **Runtime Error**를 크게 줄여준다는 것입니다. (어느 정도 규모를 가진) Codebase를 (Java에서 이야기하는) <i>NPE</i> 없이 유지하기는 매우 어려운 일이기 때문에, 이는 생산성 향상과 소프트웨어의 안정성에 큰 도움을 줄 수 있습니다.

<i>하지만 Kotlin의 Null-Safety가 완전한 것은 아닙니다.</i>
다시 말해서, Kotlin에서 '없음'을 표현하는 것이 항상 `null`이라는 건 아니란 이야기입니다. 몇 가지 예시를 들어보죠.


<table>
<tr align="left">
<th>Collection</th>
<th >Code</th>
<th>Result </th>
</tr>
<tr>
<td>Map</td>
<td valign= "top";>

```kotlin

fun main() {
    val playerMap : Map<Int, String> 
    	= mapOf(10 to "Messi", 
                5 to "Sergio", 
                18 to "Jordi Alba")
   	println(playerMap.get(7))
}


 ```

</td>
<td valign= "top";>

```
null
```

</td>
</tr>
<tr>
<td>List</td>
<td valign="top">

 ```kotlin

fun main() {
    val playerList : List<String> 
    	= listOf("Messi", 
                 "Sergio", 
                 "Jordi Alba")
   	println(playerList.get(3))
}


 ```

</td>
<td valign="top">

```
Exception in thread "main"
java.lang.ArrayIndexOutOfBoundsException:
Index 3 out of bounds for length 3
```

</td>
</tr>
<tr>
<td>Iterable</td>
<td> 

```kotlin

fun main() {
    val iterable: Iterable<Int> = emptyList()
    print(iterable.first())
}


 ```
 
 </td>
<td valign="top">

```
Exception in thread "main" 
java.util.NoSuchElementException: 
List is empty.
```

</td>
</tr>
</table>

`Map<K,V>.get(key)`는 key에 해당하는 값이 없을 때 `null`을 반환하지만, `List<T>.get(index)`는 `index`에 해당하는 값이 없을 때 `ArrayIndexOutOfBoundsException`을 던지고, 이와 비슷하게 `Iterable<T>.first()`는 `NoSuchElementException`을 던집니다. 

**결국 이는 Java와의 호환성을 유지하려고 생긴 문제인데요.** 하지만 `null`을 타입 시스템 안으로 끌어안을 때 생기는 이점이 압도적으로 많기에, 이러한 예외들은 기꺼이 감수해야 하지 않을까.. 싶기는 합니다. 하지만 앞으로 Kotlin 생태계에서 논의해볼 문제이기는 합니다. 일관성 있는 예외 처리는 독립된 언어의 정체성을 구성하는 데 중요한 요소이기 때문입니다. 


#### Asynchronous

비동기 처리는 어떤 (웹이던 앱이던) 애플리케이션을 제작하든 간에 핵심적인 로직을 차지합니다. </br>
**동시 실행(Concurrency)에 대한 강력한 지원**, Kotlin은 (뒤에서 다룰) 방대한 야망의 일각을 1.3 release에서부터 **Coroutine**으로 드러내기 시작했습니다. 

언제나 그랬듯이, [공식 문서](https://kotlinlang.org/docs/coroutines-basics.html#your-first-coroutine)로부터 우리의 이야기는 출발합니다.

> A coroutine is an instance of a suspendable computation. </br>
> It is conceptually similar to a thread, in the sense that it takes a block of code to run that works concurrently with the rest of the code. </br>
> However, a coroutine is not bound to any particular thread. </br>
> It may suspend its execution in one thread and resume in another one. </br>
> </br>
>  코루틴은 **<u>Suspendable Computation</u>** 의 인스턴스입니다. </br>
>  일정한 블록의 코드를 가져다, 나머지 코드와 병렬적으로 실행토록 한다는 컨셉 자체는 스레드와 유사합니다. </br>
> 하지만 코루틴은 어떠한 특정 스레드에도 (1:1로 대응되어) 바인딩되지 않습니다. </br>
> 이는 (특정 코루틴이) 하나의 스레드에서 실행을 잠시 멈추었다가, 다른 스레드에서 재개될 수도 있다는 것입니다.

</br>
<h5> 첫 번째 질문. 여기서 Suspendable Computation이라는 게 무엇을 의미하나요? </h5>


말 그대로 <u>중단(suspend) 그리고 재개(resume)가 가능한</u> **Computation** (이 맥락에서 '계산'으로 직역하기 어려운 까닭에 앞으로도 그대로 옮겨 적겠습니다)을 의미합니다. 그리고 Suspendable Computation은 Kotlin에서 `suspend fun`으로 구현됩니다. 그렇다면 공식 문서에서 코루틴을 `suspend fun`의 인스턴스로 언급하는 이유는 뭘까요? 이는 코루틴을 생성하는 함수인 `CoroutineScope.launch`를 [깊게 들여다보면](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/common/src/Builders.common.kt#L47) 조금이나마 힌트를 얻을 수 있습니다. 


```kotlin

public fun CoroutineScope.launch(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> Unit
): Job {
    val newContext = newCoroutineContext(context)
    val coroutine = if (start.isLazy)
        LazyStandaloneCoroutine(newContext, block) else
        StandaloneCoroutine(newContext, active = true)
    coroutine.start(start, coroutine, block)
    return coroutine
}


```

`CoroutineScope.launch`의 파라미터 중 `block`은 주어진 CoroutineScope에서 실행될 `Coroutine Code`를 의미합니다. 즉, `launch()`는 `suspend fun`인 코드의 **block** 으로부터 Coroutine을 생성하는 함수라는 것입니다.

그러니 '코루틴이 Suspendable Computation의 인스턴스이다'를 다시 이야기하면, Class가 인스턴스를 찍어내듯 Supendable function은 Coroutine을 (`launch()`나 `async()`와 같은 Coroutine Builder를 통해) 생성한다는 이야기입니다. 

</br>
<h5> 두 번째 질문. Suspendable function은 정확히 코루틴에서 어떤 역할을 하고 있나요? </h5>

<blockquote>
    <p align="left">
        <img src="https://kotlinlang.org/docs/images/suspension-process.gif" width="60%">
    </p>
    <i>
        When the computation is ready to be continued, it is returned to a thread (not necessarily the same one).</br>
        Computation이 동작을 재개할 준비를 마치면, 스레드로 복귀합니다. (복귀하기 전 스레드와 같은 필요는 없습니다.)  
    </i>
    </br>
</blockquote>

> 이미지 및 텍스트 출처: [Kotlin Docs: Coroutines and channels - tutorial](https://kotlinlang.org/docs/coroutines-and-channels.html#starting-a-new-coroutine)

위 그림은 코루틴이 스레드 위에서 주로 어떤 동작을 수행하는지 알기 쉽게 알려주는 도식입니다. 사실은 혼란을 가중시킬 수 있는 그림이기도 한데요. 정의(Definition)를 저 멀리 눈에 보이지 않는 곳에 두고, 도형이 움직이는 것만 보자 하면 <i>"코루틴이 suspendable한 function을 생성하는 것인가?"</i>라고 오해할 가능성도 다분하기 때문입니다. (사실은 그 **반대**라는 건 앞에서 언급했습니다.) 정확히는 **"코루틴 안에서만 suspendable한 function을 실행할 수 있는 것"** 입니다. (그리고 `suspend fun` 안에서 다른 `suspend fun`을 실행할 수 있습니다. 전자나 후자 모두 코루틴 안에서 실행되는 것이기 때문입니다.) 이를 다시 이야기하면, 일반적인 function에 <u>코루틴의 실행을 정지하는 역할</u>이 부여되었다고 보아도 무방합니다. 

</br>

<h5> 세 번째 질문. 그렇다면 (스레드와는 다르게) 코루틴은 어떻게 생성되고 관리되나요? </h5>

> 이 단락은 [[Suhwan Jee: Kotlin Coroutine의 Structured Concurrency 구현 상세]](https://suhwan.dev/2022/01/21/Kotlin-coroutine-structured-concurrency/)에게 많은 빚을 지고 있습니다. 언급되는 코드와 도식은 위 포스트의 자료를 편집한 것임을 밝힙니다.

기본적으로 코루틴은 CoroutineScope 안에서만 생성될 수 있습니다. 이를 멋지게 표현하면, **Scoped Execution**을 지원한다고 하는데요. CoroutineScope는 (Scope 안에서 생성된) 코루틴을 언제 시작할지, 멈출지, 재개할지 결정합니다. (즉 `launch()`나 `async()`와 같은 Builder를 CoroutineScope 안에서만 쓸 수 있다는 것입니다.) 굳이 Scope 안에서의 사용을 강제하는 이유에는 크게 두 가지가 있습니다.

1. **코루틴의 Grouping을 가능하게 합니다.** </br>
   => 이는 Scope가 Cancel되면, Scope 안에서 시작되었던 코루틴은 모두 Cancel된다는 것입니다. </br>
   => 특정 코루틴이 더 이상 불필요한 경우, 이는 리소스의 낭비를 막는 효과를 낳습니다.
2. **Coroutine Scope는 코루틴이 실행되는 Context를 정의하는 데 도움을 줍니다.**
- 출처: [5 Common Kotlin Coroutines interview questions](https://medium.com/@theAndroidDeveloper/5-common-kotlin-coroutines-interview-questions-f084d098f51d)

</br>

위와 같은 사실은 코루틴의 구현이 **Structured Concurrency(구조적 병렬성)** 의 원칙을 충실하게 따랐기 때문입니다. 사실 처음에 언급했던 **"Kotlin이 동시 실행에 강력함을 지닌다"** 라는 이야기는 (세 번의 질문을 돌고 돌아) 여기에서 그 근거를 찾을 수 있게 된 것입니다. 간단한 도식과 함께 코드를 살펴볼까요.

```Kotlin

fun doConcurrentJob 
     = coroutineScope { /* coroutine 1 */
        launch { /* coroutine 2 */
            launch { /* coroutine 3 */
                launch { /* coroutine 4 */
                }
            }
            launch { /* coroutine 5 */
            }
        }
}


```

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/e4a4c768-b89c-4cd2-a373-6a4ed07665f0" width="75%" border="1px">
    </br>
    <i>
        위 코드를 도식화.
    </i>
</p>

**Structured Concurrency** 를 지원하기 위해, 코루틴은 트리 구조의 형태로 작성되어 있습니다. 즉, 부모-자식(parent-child) 관계를 지니고 있다는 의미입니다. 위에서는 **Grouping**이라는 개념으로 뭉뚱그려 설명했지만, 정확히는 트리 형태를 갖추고 있다고 이야기하는 것이 맞습니다. 또한 Context를 정의하는 데 도움이 된다는 것도, 결국 자식 코루틴이 자신의 Context를 정의하는 데 부모 코루틴의 Context를 가져오기 때문입니다. (간단하게, `myContext` **=**  `this` **+** `parentContext`, 이런 식으로 말이지요.) 이와 같은 구현은 다음과 같은 것들을 가능하게 합니다. 

1. Structured concurrency ensures that they are not lost and do not leak. An outer scope cannot complete until all its children coroutines complete. </br>
   <i> 구조적 병렬성은 코루틴이 누수되거나 손실되지 않을 것임을 보장합니다. <b>외부 Scope는 모든 자식 Scope의 작업이 끝날 때까지 (생명 주기를) 완결하지 않습니다.</b></i> </br>
2. Structured concurrency also ensures that any errors in the code are properly reported and are never lost.</br>
   <i> 또한 코드 상의 모든 에러가 누락 없이 정확하게 보고될 것임을 보장합니다. </i>

- 출처: [Coroutines-Basics | Kotlin Documentation](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency)


조금은, 코드를 작성하는 관점에서, 풀어서 이야기하면, </br>
 <u>(<b>1.</b>) 부모 Coroutine이 어떤 이유로든 취소되면, 모든 자식 Coroutine은 취소됩니다.</u> </br>
또한, </br>
<u>(<b>2.</b> 명시적으로 취소를 하지 않는 한,) 자식 Coroutine이 Exception을 던지면, 부모 Coroutine으로 Exception이 전달되어 parent를 취소시킵니다. </u>



#### Object-oriented or Functional



#### Cross-platform



___

### Kotlin의 지향점
<p align="left">
    <img src="https://kotlinlang.org/lp/multiplatform/static/multiplatform-diagram-d716356ba4b4f2488c98714db033bd53.svg" width="80%">
</p>

>  사진 한 장으로 요약 가능.



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
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

지난 4월 25일, 판교 인프랩 오피스에서, 저녁 6시 30분부터 두 시간 가량 진행된, "**인프런 퇴근길 밋업 with KotlinConf'23 Global**"에 대한 짤막한 소감과 **코틀린(Kotlin)이라는 언어의 현재와 미래**에 대한 제 생각들을 중심으로 이야기 나누어 보겠습니다. 

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


한 언어의 미래에 대해 논하려면, 먼저 과거와 현재를 알아야겠지요. 
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
</br>

답변을 찬찬히 뜯어보면, 크게 두 가지 지점에서 눈길이 멈춥니다.

'**정적 타입(Statically Typed)**' 그리고 수많은 '**타겟**'.

먼저 정적 타입에 대한 이야기입니다. Kotlin은 Java를 기반으로 출발한 언어답게, 강한 Type-Safety(타입 안정성)를 추구합니다. 정적 타입의 언어는 컴파일 시에 변수의 타입을 결정합니다. (이와 반대로 JavaScript와 같은 동적(Dynamically-Typed) 언어는 런타임 시에 변수의 타입이 결정됩니다.) 여기에서 조금 더 개념을 확장해, 바인딩(Binding)에 대한 이야기로 넘어가 보죠.

</br>

>
> **| 코틀린은 동적 바인딩보다 정적 바인딩을 더 선호한다 |** <br/>
> 
> 코틀린은 타입 안전한, 합성적인 코딩 스타일을 장려한다. 확장 함수는 정적으로 바인딩된다. <br/>
> 기본적으로 클래스는 확장될 수 없고, 메서드는 다형적이지 않다. <br/>
> 여러분은 명시적으로 다형성과 상속을 활성화해야 한다.
> 
> 덩컨 맥그레거, 냇 프라이스, <i>자바에서 코틀린으로</i>, 오현석 역, (서울: 한빛미디어), 30p.
>

</br>

프로그래밍 세계에서 바인딩은 간단하게 ['**호출과 본문의 연결(Association of method call to the method body)**'](https://beginnersbook.com/2013/04/java-static-dynamic-binding/)이라고 정의할 수 있습니다. (원래는 '묶다'라는 의미로 널리 알려져 있지요.) Kotlin이라는 언어에서 정적 바인딩을 선호한다는 것은 크게 두 가지 의미를 지닙니다.

1. 기본적으로 Class는 상속을 지원하지 않습니다. Overriding도 마찬가지입니다. 
   (`open` 키워드를 추가하지 않으면, `final`로 설정됩니다.)
2. Method Overriding은 컴파일 타임(JVM 기준, .kt 코드가 .class 바이트코드로 바뀔 때)이 아니라, 런타임에 이루어집니다. 
    ( **Runtime Polymorphism** 에 대한 이해가 필요합니다. )

**Polymorphism (다형성)** 과 **Binding** 에 대한 이야기는 ["[Android: Architecture #1] 객체지향이 뭔가요?"](https://kevinlim17.com/object_oriented/) 와 추후 포스트에서 조금 더 다뤄보기로 하고, 여기서는 Kotlin이 **"타입 안정성"** 을 중시하는 언어라는 것만 짚고 넘어가도록 하겠습니다.

</br>

<p align="left" style="background-color:rgba(184, 184, 184, 0.1); padding-left:1rem;">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/40c41566-1cf2-4947-a79c-69cc731e2a69" width="80%"> </br>
    ⬆️ 아름다운 도식. 컬러풀한 매력을 가진 언어.
</p>

</br>

그리고 <i>크고 아름다운</i> 타겟의 수입니다. Kotlin이 가진 강력함은 사실 여기서 출발합니다. 
먼저, Kotlin은 Java와 <u>**100% 상호 호환**</u>됩니다. 거대한 Java 생태계를 흡수할 수 있다는 사실 하나만으로, 이 언어가 가진 무한한 '가능성'을 보여줍니다. (이게 가능한 이유는, JVM이나 Android를 타겟으로 했을 때, Kotlin은 일차적으로 자바 바이트코드(`.class`)로 컴파일되기 때문입니다.) 

 
그 밖에도, Javascript, Native(MacOS, iOS, Windows, Linux, Android NDK를 지원하며, 코틀린 코드를 네이티브 바이너리로 바로 바꿔야 하는 경우 사용), WebAssembly(아직 시험 단계)를 위한 컴파일러를 각각 제공합니다. 단순히 Android Native나 Spring를 이용한 Backend 개발에서 Java라는 언어의 역할을 대체하는 것 이상을 바라보고 있다고 생각하셔도 좋을 것 같습니다. 웹 애플리케이션이나 데이터 사이언스, 임베디드 분야에서도 다른 언어의 지위를 넘보고 싶다는 의도가 다분하니 말이죠. (궁금하신 분들은 [**Kotlin PlayGround**](https://play.kotlinlang.org/)에서 직접 여러 환경을 체험보시는 것도 좋습니다.)

</br>

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
        print(" $i")
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
3. Type Inference(타입 추론)를 지원한다. (이는 Java도 지원.)

위의 첫 번째 포인트가 바로 Kotlin과 Java라는 언어의 결을 완전히 다르게 만든 분기점이라고 볼 수 있습니다. Kotlin Community는 객체지향(Object-Oriented)은 물론이고, **함수형 프로그래밍(Functional Programming)** 도 "우리 언어가 가진 매력"이라 적극적으로 홍보합니다. 이 부분은 네 번째 특성에서 더 자세히 다뤄볼게요.
(Kotiln의 함수는 First-Class Citizen의 조건을 충족합니다. 이는 언어의 간결함을 결정짓는 요소라 볼 수도 있습니다.)

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

<td valign="top">

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
3. Class Header 안에서 선언된 프로퍼티의 private 필드(field)와 getter/setter 메서드는 명시적으로 표시되지 않고, Kotlin Complier가 자동으로 생성합니다.
</td>



</td>
</tr>
</table>


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

</br>

#### Safety

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
<th >Code</th>
<th>Result </th>
</tr>
<tr>
<td valign= "top" style="background-color:white;";>

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
<td valign="top" style="background-color:white;">

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
<td style="background-color:white;"> 

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

</br>

**결국 이는 Java와의 호환성을 유지하려고 생긴 문제인데요.** 하지만 `null`을 타입 시스템 안으로 끌어안을 때 생기는 이점이 압도적으로 많기에, 이러한 예외들은 기꺼이 감수해야 하지 않을까.. 싶기는 합니다. 하지만 앞으로 Kotlin 생태계에서 논의해볼 문제이기는 합니다. 일관성 있는 예외 처리는 독립된 언어의 정체성을 구성하는 데 중요한 요소이기 때문입니다. 

</br>

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
    <i>
        ⬇️ 위 코드를 도식화.
    </i>
    </br>
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/ecc9e516-0789-4f0d-bffa-974770fca630" width="75%">
    </br>
    
</p>

**Structured Concurrency** 를 지원하기 위해, 코루틴은 트리 구조의 형태로 작성되어 있습니다. 즉, 부모-자식(parent-child) 관계를 지니고 있다는 의미입니다. 위에서는 **Grouping**이라는 개념으로 뭉뚱그려 설명했지만, 정확히는 트리 형태를 갖추고 있다고 이야기하는 것이 맞습니다. 또한 Context를 정의하는 데 도움이 된다는 것도, 결국 자식 코루틴이 자신의 Context를 정의하는 데 부모 코루틴의 Context를 가져오기 때문입니다. (간단하게, `myContext` **=**  `this` **+** `parentContext`, 이런 식으로 말이지요.) 이와 같은 구현은 다음과 같은 것들을 가능하게 합니다. 

1. Structured concurrency ensures that they are not lost and do not leak. An outer scope cannot complete until all its children coroutines complete. </br>
   <i> 구조적 병렬성은 코루틴이 누수되거나 손실되지 않을 것임을 보장합니다. <b>외부 Scope는 모든 자식 Scope의 작업이 끝날 때까지 (생명 주기를) 완결하지 않습니다.</b></i> </br>
2. Structured concurrency also ensures that any errors in the code are properly reported and are never lost.</br>
   <i> 또한 코드 상의 모든 에러가 누락 없이 정확하게 보고될 것임을 보장합니다. </i>

- 출처: [Coroutines-Basics | Kotlin Documentation](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency)

</br>

코루틴을 사용해 코드를 작성하는 관점에서, 위의 이야기를 풀어서 이야기하면, </br>
 <u>(<b>1.</b>) 부모 Coroutine이 어떤 이유로든 취소되면, 모든 자식 Coroutine은 취소됩니다.</u> </br>
또한, </br>
<u>(<b>2.</b> 명시적으로 취소를 하지 않는 한) 자식 Coroutine이 Exception을 던지면, 부모 Coroutine으로 Exception이 전달되어 parent를 취소시킵니다. </u>

</br>

이는 일반적인 (즉 Structured가 아닌) 동시성 프로그래밍이 가지는 수많은 난점을 해결합니다. (C와 C++을 제외한 고수준 언어에서는 거의 사용되지 않는) `goto`와 크게 다르지 않게, 코드의 가독성(그리고 구조적 프로그래밍)을 해치던 예약어들, (예를 들어 `callback`, `promise`, `future` 등등..)의 구속에서 드디어 해방될 수 있는 것입니다. 코루틴을 사용하면, 큰 힘 들이지 않고, 동시에 실행되는 로직에 대해 명확한 역할과 한계를 부여할 수 있고, 오류에 대한 명확한 Report를 받아볼 수 있습니다. 

</br>

#### Object-oriented or Functional

> <u>객체 지향 프로그래밍</u>은 메시지를 객체에 보내서 문제를 해결하는 기술이다. </br>
> `myString`의 길이를 알고 싶은가? 그 객체에 `myString.length()`라고 메시지를 보내라. </br>
> 콘솔에 문자열을 출력하고 싶은가? 문자열을 메시지에 넣고 콘솔을 표현하는 객체에 `System.out.println(myString)`처럼 출력을 요청하라. </br>
> 고전적인 객체 지향 언어에서는 클래스에 메서드를 정의해서 객체가 메시지에 반응하는 방법을 정의한다.
>
> (중략)
>
> 반대로 <u>함수형 프로그래밍</u>에서는 값을 사용해 함수를 호출함으로써 문제를 해결한다. </br>
> `myString`의 길이를 알고 싶으면 `length(myString)`처럼 함수에 값을 넘긴다. </br>
> 콘솔에 문자열을 출력할 때는 `println(myString)`을 호출하고, </br>
> 다른 장치에 문자열을 출력하고 싶다면 `println(myString, System.err)` 같이 원하는 장치를 함수에 전달해야 한다. </br>
> 함수는 타입 **위에** 정의되지 않고, 함수의 파라미터와 결과가 타입을 **소유**한다.
>
> </br>
>
> 덩컨 맥그레거, 냇 프라이스, 자바에서 코틀린으로, 오현석 역, (서울: 한빛미디어), 177-8p.

</br>

(<i>고전적인 객체 지향 언어</i> 에 가까운) Java와의 100% 상호 운용성을 지원하는 만큼, Kotlin으로 객체 지향 코드를 작성하는 것은 언어의 **결**을 거스르지 않는 일입니다. 심지어 Kotlin으로 마이그레이션 했을 때 ( [Kotlin의 특성: Concise](https://didactic-doodle-94649jjj9gph997v-8000.app.github.dev/kotlin_conf23/#concise)에서도 언급했듯이, ) 클래스 작성 시의 Boilerplate가 크게 줄어드는 마법도 우리는 목격했습니다. 그렇다면 신나게 OOP로만, Kotlin 코드를 작성하면 될 일일까요? 표현이 거칠었지만,  이는 언어가 가진 매력을 (조금은) 퇴색시키는 일입니다. Kotlin은 멀티 패러다임(Multi-Paradigm) 언어니까요.  


(어쩔 수 없이 이 글에서 많이 등장하는 언어인) Java에서의 모든 코드는 클래스(Class)의 **필드(field)와 메서드(method)** 로 치환됩니다. (정확히는 JVM을 사용하는 모든 언어, 당연히 JVM을 타겟으로 하는 Kotlin도 바이트코드로 컴파일되면 그러합니다.) 그러니 Java라는 무기를 가진 상황에서 컴퓨팅적 문제에 맞딱드린 경우, 개발자들은 보통 <i><b>클래스에 메서드를 정의하여</b></i>  해결하는 객체지향적 접근법을 취하는 경우가 많습니다. 

(하지만 Java로 함수적 접근을 할 수 없다는 것은 아닙니다. 옛날 옛적 순수한 Java 1.0에서의 함수는 일급 객체의 조건을 충족하지 못했지만, JDK 8(1.8)부터 본격적으로 Stream API를 지원하며 멀티 패러다임에 한 발짝 더 다가섰습니다.)

Kotlin의 경우, 개발 초기부터 멀티 패러다임을 지원하기 위해 노력한 흔적들이 보입니다. 
두 언어 모두에 존재하는 `println()`이 어떻게 개발자의 냉장고에 발을 들이게 되었는지 비교하며 살펴볼까요? 

먼저 Java입니다. 

```Java

System.out.println("Hello, Readers!");


```
슬쩍 보자하니 (기본으로 import되어 있는)  `java.lang` 패키지에 포함된 `System Class`에서 무언가를 가져오는 것 같습니다. 
네 맞습니다, `out`이라는 static 필드를 가져옵니다. (static 필드이므로 우리에게는 System Class의 인스턴스가 필요하지 않죠.) 그렇다면 우리는 `out`이 어떤 형태를 가진 property인지 또 찾아나서야 합니다.

```java

public final static PrintStream out = null;


```

그렇습니다, `out`은 PrintStream의 인스턴스였던 것입니다. 그렇다면 분명 Java의 `println()`은 `PrintStream`이라는 클래스의 메서드일 것입니다. (예상이 아니라 이는 사실입니다. 같이 공부하려는 방식을 취하다 보니 표현이 조금 어색해졌네요.) 결론적으로 Java의 `println()`은 <i>객체가 메시지에 반응하는 방법을 정의한</i>  하나의 '**메서드**'입니다. 

그런데 Kotlin의 `println()`은 조금 다른 방식으로 정의되어 있습니다. (일부러) Java와의 접점을 없애기 위해, Native가 타겟인 경우의 Console Source를 가져와 보았습니다. 함께 보시죠.

<blockquote>
<b>🗃️ Github Repo: JetBrains/kotlin - </b> 
<a href="https://github.com/JetBrains/kotlin/blob/7a7d392b3470b38d42f80c896b7270678d0f95c3/kotlin-native/runtime/src/main/kotlin/kotlin/io/Console.kt#L23" target="blank" rel="nofollow"> kotlin-native/runtime/src/main/kotlin/kotlin/io/Console.kt</a>

```Kotlin

/*
 * Copyright 2010-2018 JetBrains s.r.o. Use of this source code is governed by the Apache 2.0 license
 * that can be found in the LICENSE file.
 */

package kotlin.io

import kotlin.native.internal.GCUnsafeCall

/** 중략 */

/** Prints the given [message] and the line separator to the standard output stream. */
@GCUnsafeCall("Kotlin_io_Console_println")
@PublishedApi
internal external fun println(message: String)

/** Prints the given [message] and the line separator to the standard output stream. */
public actual fun println(message: Any?) {
    println(message.toString())
}

/** Prints the line separator to the standard output stream. */
@GCUnsafeCall("Kotlin_io_Console_println0")
public actual external fun println()


/** 후략 */

```
</blockquote>

</br>

가독성을 위해 파일에 존재하는 대부분의 코드를 가렸지만, 전달하려는 바는 그보다 더 간결합니다. </br> Kotlin의 `println()`은 Class 안에 존재하지 않는다는 사실입니다. 

(JVM이 타겟인 경우에는, 어떻게 보면 당연하게도, 함수 안에서 `System.out.println()`을 호출합니다.
네이티브의 경우, [다음과 같은 C++ Source](https://github.com/JetBrains/kotlin/blob/7a7d392b3470b38d42f80c896b7270678d0f95c3/kotlin-native/runtime/src/main/cpp/Console.cpp#L38)를 통해 원하는 메시지를 콘솔에 출력합니다. 후자는 객체지향의 특성이 아무리 눈을 크게 뜨고 보아도 전무하다시피 합니다.)

Kotlin은 `println()`과 같은 경우처럼,  함수(그리고 프로퍼티와 상수)를 Class 밖에 선언할 수 있도록 허용합니다. 이를 지적인 말로, '**최상위 함수(Top-level Function)**'를 선언할 수 있다고 이야기합니다. 사실상, Java에서 기존 Class에 함수를 추가하기 어렵거나 불가한 경우 사용하는, **`static` 메서드**를 대체한다고 보아도 무방합니다. 하지만 어떻게든 클래스에 묶이게 되는 Java의 메서드와는 달리, 최상위 함수의 경우 인스턴스 영역에 있지 않으므로, 선언하고 이를 참조하는 것이 더욱 간단합니다. 

또한 Kotlin은 함수를 First-Class Citizen(일급 시민)으로 취급합니다. 이는 생태계 안의 고차 함수(Higher-Order Function)와 중첩 함수(Nested Function)의 존재를 저절로 일깨워줍니다.

> Kotlin functions are [first-class](https://en.wikipedia.org/wiki/First-class_function), </br>
> which means they can be stored in variables and data structures, </br>
> and can be passed as arguments to and returned from other [higher-order functions](https://en.wikipedia.org/wiki/First-class_function). </br>
> You can perform any operations on functions that are possible for other non-function values.
>
> Kotlin 함수는 일급 객체입니다. </br>
> 이는 (함수가) 변수에 할당하거나 자료구조에 저장될 수 있으며, (함수나 객체의) 인자로 전달되거나, 다른 고차 함수의 리턴값이 될 수 있다는 뜻입니다.</br>
> 함수가 아닌 값들을 가지고 했던 어떤 작업이든 (함수를 핸들링하며) 가능합니다.
> 
> </br>
> 
> To facilitate this, Kotlin, as a statically typed programming language, </br>
> uses a family of [function types](https://kotlinlang.org/docs/lambdas.html#function-types) to represent functions, </br>
> and provides a set of specialized language constructs, such as [lambda expressions](https://kotlinlang.org/docs/lambdas.html#lambda-expressions-and-anonymous-functions).
>
> 이를 용이하게 처리하기 위해, 정적 타입 프로그래밍 언어인 Kotlin은, </br>
> 함수를 표현하기 위해 함수 타입을 사용하고, 람다 표현식과 같은 특수한 구조를 제공합니다.
> 
> </br>
> 
> 출처: [Higher-Order functions and lambdas | Kotlin Documentation](https://kotlinlang.org/docs/lambdas.html)

</br>

Higher-Order Function, Lambda Expression, Extended Function에 대해서는 (특히 안드로이드 관련한) 다른 포스트에서 조금 더 깊게 다루어 보도록 하겠습니다. 이 글에서는 이만 줄여볼게요.

**개행이 포함하여 출력하는 함수, `println()`.** 프로그래밍 언어에서 가장 단순하다고 생각되는 함수 `하나`를 가지고, 선택할 수 있는 가장 먼 길을 돌아온 것은, Kotlin 생태계가 가진 일종의 **결**을 따라가기 위함이었습니다. 그리고 우리는 여정의 끝에 거의 다다랐습니다. 이 언어가 가진, Kotlin이라는 개발 커뮤니티 안의 사람들이 공동으로 추구하는 지향점, 그 어딘가에 존재하는 섬을 향해, 과연 우리는 어느 방향으로 뱃머리를 돌려야 할까요? 여러분은 감이 오셨나요?

___

### Kotlin의 지향점

**안정성 그리고 다양성.** Stability and Diversity.

긴 항해 끝에 이 글이 다다른 결론입니다. </br>
Kotlin은 위의 두 가치를 기반으로 두고 개발되었고, 지금도 그러하다는 것을요. 

<blockquote>
여기에 '간결함'이라는 친구가 왜 이름을 올리지 못했냐며 의아해할 독자 분들을 위해 </br>
짤막하게(?) 설명을 덧붙이려 합니다. 정확히 이야기하자면 이 분은 자리를 빼앗긴 것이 아닙니다. </br>
그는 안정성의 일부로 그의 몫을 다하고 있지요. 코드의 간결함은 흔히 생산성과 직결되기 쉬운데, </br>
'코드를 더욱 빠르게 작성할 수 있다'라는 사실과는 더욱 밀접합니다. </br>
(이를 프로그래밍 언어론<i>Programming Langauge Theory</i> 에서는 'Writablilty'라고 합니다.) </br>
하지만 우리는 다른 측면의 '생산성'에 눈을 돌릴 필요가 있습니다. </br>
많은 개발자분들이 공감하시겠지만,
코드는 처음 작성하는 시간보다 이를 고치는 데 </br>
(과장을 힘껏 보태서) 억겁 배의 시간이 소요된다는 것을요.</br>
간결한 코드는 이 수많은 순간들에서 빛을 발합니다.  그 이유는 간단합니다. </br>
우리에게 필연적인 실수들을 '코드를 되짚는 지금'에 이르러서라도 발견하게끔 하기 때문이죠. </br>
이를 언어가 가진 '<b>디버깅 안정성</b> <i>Stability for Debugging</i>'이라 부를 수 있겠네요. </br>
(엄밀하게는 'Readability'라고 합니다.)</br>
이 글에서는 주로 Kotlin의 Codebase가 가진 안정성에 대해서만 이야기했지만, </br>
프로그래밍 언어의 안정성에는, 이러한 측면도 포함되어야 한다고 생각합니다. </br>
<b>(즉, 하나의 프로그래밍 언어가 '간결하다'라고 이야기하려면 Writability와 Readability에서 모두 높은 평가를 받아야 한다는 것입니다. )</b> </br>
이런 부분들은 추후 Android 포스트에서 글쓴이가 직접 작성한 코드를 하나씩 뜯어보며 </br>
그 중요성을 더 음미해보도록 하겠습니다. 조금의 시간을 두고 여유롭게 말이죠.
</blockquote>

</br>

<h5><b>안정성</b> <i>Stability</i></h5>

프로그래밍 언어의 안정성은, <i>이론적</i>으로는, Reliability(신뢰성 또는 신뢰 가능성)으로 치환되어 언급됩니다. (이 글에서는 Kotlin의 간결함과 더불어 Codebase의 안정성을, 영어로는 Stability로 통일하여 언급했습니다. 즉, 위의 텍스트에서는 프로그래밍 언어론의 엄밀한 이론적 체계를 따르지 않았음을 밝혀 둡니다.) 

앞에서 언급한 특성들 중, **Null-Safety**(널 안전성)와 **Structured Concurrency**(구조적 병렬성)가 Kotlin의 안정성(여기서는 Reliability)을 지탱합니다. 그 이유를, [ChatGPT](https://chat.openai.com/)가 작성해준 프로그래밍 언어의 **신뢰성에 "기여하는" 요소**를 한 조각씩 분해하며 찾아 보도록 하겠습니다.
</br>

> Key factors that contribute to the **reliability** of a programming language include: </br>
> 프로그래밍 언어의 **"신뢰성"** 을 높이는 요소들은 다음과 같습니다:


1. > <u><strong style="background-color: palegreen;">Type System</strong></u>: The type system of a programming language determines how it handles data types and type checking. Strong, statically typed languages can catch many errors at compile time, leading to more reliable code. </br></br>
    > => **타입 시스템**: 프로그래밍 언어의 타입 시스템은 데이터 타입을 어떻게 구성하고, 이에 대한 점검을 어떻게 수행할 것인지 결정합니다. 강 타입, 정적 타입 언어들은 컴파일 시에 많은 오류를 잡아낼 수 있으므로, (약 타입, 동적 타입의 지원하는 언어들에 비해) 더 '신뢰 가능한' 코드를 작성하는 데 유리합니다. </br>
2. Error Handling
3. Memory Management
4. > <u><strong style="background-color: palegreen;">Concurrency Support</strong></u>: In multi-threaded or concurrent applications, the language's support for managing threads and synchronizing access to shared resources affects reliability. Languages with built-in support for concurrency and synchronization mechanisms can help developers avoid [race conditions](https://en.wikipedia.org/wiki/Race_condition) and other issues.</br></br>
   > => **병렬성 지원**: 멀티 스레드를 사용하거나 병렬적인 기능을 지원하는 애플리케이션의 경우, 언어 차원의 지원은 "신뢰성"에 큰 영향을 끼칩니다. 병렬성과 동기화 메커니즘을 내재한 언어는 (개발자들이) Race Condition 등의 이슈를 피하는 데 도움을 줍니다.
5. <u><strong style="background-color: palegreen;">Standard Library</strong></u>
6. Tooling and Ecosystem
7. Testing and Debugging Support
8. Documentation
9.  Long-Term Support
10. Community and Code Reviews

</br>

**Null Safety**는 Kotlin의 타입 시스템을 단단하게 만들어주는 요소 중 하나입니다. [앞](#safety)에서 인용한 대로, Kotlin의 설계자들은 "<i>선택성을 표준 라이브러리 대신 타입 시스템의 일부로 넣음</i> "으로써 `없음`에 대한 처리에 일관성을 부여했습니다. 일반적으로, 다른 언어에서 타입 시스템에 대해 이야기한다면, **'강'이냐 '약'이냐(Strong-Typed or Weak-Typed), '정적'이냐 '동적'이냐(Statically-Typed or Dynamically-Typed)** 에 초점을 맞춥니다. 그리고 두 조건 모두에서 전자를 충족해야 더 '안정적'이라 이야기합니다. (물론 Kotlin은 Strongly-Typed이자 Statically-Typed Language입니다.) 

여기서 Kotlin 생태계는 한 걸음 더 나아가, 모든 타입을 (정확히는 참조(Reference)의 방식을) 이원화함으로써, 컴파일 타임의 오류를 '잡아내는' 것에 그치지 않고, '없애는' 데에도 기여하였습니다. 
타입 시스템에 있어, 어떤 프로그래밍 언어의 **'신뢰 수준이 높다'** 라는 건, Built-In으로 실수와 사고의 가능성을 줄이는, 자동차의 주행 보조 장치와 같은 것을 지니고 있다는 뜻이기에, 널 안정성은 그러한 의미에서 (Type System을 떠받치는) 기둥이 될 자격이 충분합니다.

또한 Structured Concurrency의 원칙에 따라 구현된 **코루틴**이라는 라이브러리는, Kotlin이 '동시 실행'에 있어 얼마나 강력한 역량을 가진 언어인지 실감케 합니다. 단순히 멀티 스레딩(Multi-Threading)과 비동기(asynchronous) 프로그래밍을 언어 차원에서 지원할 뿐 아니라, 코루틴은 이에 '구조화된' 안정성을 보탰습니다. 이게 가능했던 이유는, '누수 없는' 동시성 프로그래밍을 지향하는 개발자들이, 코루틴에 (아쉽게도 앞에서 언급하지 않았지만) **Python** `trio` 라이브러리의 [`nursery`](https://chsasank.com/concurrent-programming-trio-tutorial.html) 블록의 개념을 도입했기 때문입니다. 

<blockquote>
    <h5>여기서 Nursery가 무엇인가요? <sup><a id="doc1" href="#ref1">[1]</a></sup> </h5> 
    <blockquote>
        <a href="https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/#nurseries-a-structured-replacement-for-go-statements"><h5>Nurseries: a structured replacement for go statements</h5></a>
        Here's the core idea: </br>
        every time our control splits into multiple concurrent paths, 
        we want to make sure that they join up again. </br>
        So for example, if we want to do three things at the same time, our control flow should look something like this: </br>
        --- </br>
        핵심 아이디어: </br>
        <b>프로그램의 흐름이 병렬적으로 나뉠 때마다, 우리는 (이 흐름이) 다시 합쳐지기를 바랍니다. </b></br>
        세 가지 작업을 동시에 처리하고 싶을 때, Control Flow는 다음과 같아야 합니다.
        <p align="left">
            <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/c761fe9b-071f-46d1-98bb-d437d4829f16" width="70%"></br>
            ⬆️ 위 Flow는 레퍼런스<sup><a href="#ref1">[1]</a></sup>의 도식을 코루틴으로 치환하여 글쓴이가 재구성한 것입니다.
        </p>
        ---</br>
        Notice that this has just one arrow going in the top and one coming out the bottom, so it follows Dijkstra's black box rule. </br>
        --- </br>
        상단에 존재하는 하나의 화살표가 하단에서 하나의 화살표로 끝맺어 집니다. 이는 다익스트라(Edsger W. Dijkstra)의 <u>Black Box Rule</u>을 충족합니다.
    </blockquote>
    다익스트라는 그의 논문<sup><a id="doc2" href="#ref2">[2]</a></sup>에서 이렇게 언급합니다.
    <blockquote>
    There is also an abstraction involved in naming an operation and using it on account of "what it does" while completely disregarding "how it works". 
    </br>
    ---</br>
    특정 동작에 이름을 붙이며, 그 동작이 어떻게 작동하는지 완전히 무시한 뒤 그것이 무엇을 하는지에만 포커스를 맞추는 것, 추상화는 바로 그 지점에도 존재합니다.
    </blockquote>
    </br>
   다익스트라는 개발자들이 "자신의 지적 능력으로는 한 번에 이해하기 어려운<i>that are too big to hold in your head all at once </i>" 코드를 작성할 수 있으려면, <b>구조적 프로그래밍</b>(Structured Programming)이 필요하다고 역설했습니다. 이 논문이 쓰여질 당시만 해도 프로그래밍의 세계에서는 <code class="language-text">goto</code>가 횡행했으니까요. 그러면 인용한 부분의 'abstraction'과 구조적 프로그래밍은 어떤 관련이 있는 걸까요? (누구보다 장황하지만 구조적인 글을 지향하는 글쓴이는 지양하는 방식이지만) 간추려 이야기해 보겠습니다. 단순한 함수 하나를 보시죠.
   </br>
   <div class="gatsby-highlight" data-language="kotlin">
    <pre class="language-kotlin"><code class ="language-kotlin"><span class="token function">println</span><span class="token punctuation">(</span>"Hello World!"<span class="token punctuation">)</span></code></pre></div>
   보통 Kotlin에서 <code class="language-text">println()</code>을 사용할 때, (이 글에서 다루었던 것처럼) 콘솔 소스를 뒤져보거나 하지 않습니다.
   (그러한 행위는 온전히 순수한, 학문적 호기심의 발로이므로 자주 시도하지 않으시는 걸 추천드립니다.) <b>"어떻게 동작하는지는 뒤로 제쳐두고,"</b> 그저 <b>"그 동작을 사용"</b>할 뿐입니다. 여기서 동작<i>operation</i>이란 함수(Function), 조건문/반복문 안의 코드, 클래스의 메서드(method) 등을 모두 포괄하는 말입니다. 
   </br></br>
   즉, 우리는 프로그램을 구성하는 진정 모든 요소를 이해할 필요가 없습니다. (다익스트라는 이를 코드에 'Black Box'를 적절히 씌우는 행위라고 이야기합니다.) 적절한 추상화를 통해, 동작의 결과와 방향성을 이해하기만 하면 될 뿐입니다. 이는 우리가 사용하는 모든 동작의 결말이, 수많이 존재하는 강의 지류가 결국 바다로 비롯되는 것처럼, 하나의 흐름으로 모일 것임을 믿기 때문에 가능한 일입니다. 대부분의 현대 프로그래밍 언어는 <code class="language-text">goto</code>를 지양함으로써 위와 같은 구조적 프로그래밍의 원칙을, 최소한 표면적으로는, 준수합니다. 
   </br></br>
   <code class="language-text">nursery</code>는 동시성 프로그래밍에, 이러한 구조적 프로그래밍의 특성을 적극적으로 도입하려는 Python 생태계의 놀라운 발명품이라고 할 수 있겠습니다. (정확히는 이 텍스트를 구성하는 데 지대한 공헌을 한 블로그의 주인장, Nathaniel J. Smith의 작품입니다.) 핵심은 (코루틴과 비슷하게) <b><code class="language-text">nursery</code> 블록 안에서 시작된 동시성 흐름은 반드시 그 안에서 종료되며, 한 지점에서 끝맺어짐을 보장하는 것입니다.</b> 
   </br>
   </br>
</blockquote>

</br>
이제 앞에서 언급한 내용들을 정리하면, 

<blockquote>
    <p align="left">
        <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/bc4133d6-e58e-4bf0-b3b4-8394a27423a8" width="50%">
    </p>
    ⬆️ Coroutine은 Standard Library라는 기둥을 받치고 있는 것이 (엄밀하게는) 맞으나, 편의상 위와 같이 제작하였음을 밝힙니다.
</blockquote>

이런 그림이 나올 수 있겠네요. 그럼으로써 우리는 코틀린의 '안정성'에 대한 탐험을 미약하게나마 마쳤습니다. </br>
이제 다른 섬으로 모험을 떠나볼까요?

</br>

<h5><b>다양성</b> <i>Diversity</i></h5>

<p align="left">
    <img src="https://kotlinlang.org/assets/images/index/multiplatform.svg" width="70%">
</p>

>  사진 한 장으로 요약 가능. </br>
>  ⬆️ 출처: [Kotlin Overview: Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform.html)

</br>

사실 글의 첫머리에서 **Kotlin의 정의**를 살펴볼 때, 모든 힌트는 주어졌습니다.
앞서 글쓴이는 **해당 텍스트**를 톺아보며 '정적 타입<i>Statically-Typed</i>'과 '타겟<i>Target</i>'에 주안점을 두고 논지를 전개해 나갔는데요. 그렇게 하고선 Kotlin의 네 가지 특성을 살펴본 뒤, 다시 이 언어가 지향하는 두 지점을 향해 항해했습니다. 그리고 그 두 지점은 우리 여정의 시작과 맞닿아 있습니다.
결국 이 단락도 그러한 회귀의 일부입니다.

</br>

'안정성'과 마찬가지로, Kotlin의 '다양성'도 단순히 한 가지 개념만을 담고 있는 것은 아닙니다. 크게 네 차원에서의 다양성을 이야기해볼 수 있는데요. <b>`Usage`, `Target`, `Platform`, `Code Style`</b>이 바로 그것입니다. <u><b>Code Style</b></u>를 제외한 셋은 밀접히 관련되어 있지만, 사용되는 맥락이 조금씩 다릅니다. (그리고 <u>네 번째 차원</u>에 대한 이야기는 [Object-Oriented or Functional](#object-oriented-or-functional)에서 다루었으니 여기서는 생략하겠습니다.) 


</br>

<h5>Usage: 무엇을 개발하는 데 Kotlin을 사용할 것인가</h5>

쉽게 말해 "Kotlin으로 뭐 만들 수 있어?" 입니다. 공식 홈페이지의 내용(Kotlin이 제공하는 Solution)을 토대로 정리해 보면 다음과 같습니다. 

- Android Native 
- Server-Side
- **Multiplatform Application**
- **Client-Side Web Application** 
- Data Science


**강조한 부분**을 제외한 세 가지 분야는, Java와의 100% 상호 운용성이 바탕에 있습니다. 안드로이드 네이티브 개발이나 Spring을 이용한 백엔드 개발은 원래 Java로 이루어진 것이었고, Jupyter나 Zeppelin을 이용한 Data Science에 대한 지원도, 기존에 존재하던 JVM 기반의 라이브러리를 바탕으로 출발한 것입니다.
(Kotlin 전용으로 개발된 백엔드 프레임워크 [**Ktor**](https://ktor.io/docs/welcome.html)에 대해서는 조금 뒤에서 다뤄보겠습니다.) 

하지만 나머지 **두 분야**는 조금 다릅니다. JVM과는 무관하게, 오롯이 Kotlin 생태계에서 창발된 것들입니다. (모바일 뿐 아니라 데스크톱이나 웹을 포함하여) 다양한 플랫폼에서 동작하는 애플리케이션을 하나의 언어로 작성한다거나, 웹사이트를 JavaScript가 아닌 언어로 개발한다는 것, 그리고 전자와 후자의 '언어'가 같은 생태계를 지칭한다는 건, 조금 어색한 이야기로까지 들립니다.  

**위와 같은 일들**을 가능하게 하려면 여러 요소들이 뒷받침되어야겠지만, 가장 중요한 것은 Kotlin으로 작성된 코드를 상황에 따라 '어떻게 변환시키냐'에 달려 있습니다. 그래서 우리는 Target에 대한 이야기로 발걸음을 옮길 수 밖에 없습니다. 다음 스텝을 밟아 볼까요?


</br>

<h5>Target: Kotlin을 어떻게 컴파일할 것인가</h5>

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/40c41566-1cf2-4947-a79c-69cc731e2a69" width="70%">
</p>

Kotlin 컴파일러는 크게 네 가지 타겟(Target)을 가집니다. JVM(Java Virtual Machine), JavaScript, WebAssembly, 그리고 Native가 그것입니다. 

JVM을 타겟으로 하는 경우, 우리가 작성한 Kotlin 코드는 Java 8 바이트코드(`.class`)로 컴파일<sup><a id="doc3" href="#ref3">[3]</a></sup>됩니다. 이후에는 온전히 JVM의 손에 맡겨집니다. 이를 통해 Java 생태계의 가장 큰 장점인 '운영체제에 대한 독립성'을 저절로 확보하게 됩니다. (이를 흔히 Write Once, Run Anywhere: **WORA 원칙**이라고 하죠.) 대부분의 Kotlin 코드는 JVM의 손을 거쳐 0과 1이 됩니다.

타겟이 JavaScript인 경우, ES5.1 버전의 코드로 변환되며, 이는 CommonJS와 AMD(Asynchronous Module Definition) 모듈 시스템과의 호환을 지원합니다.<sup><a id="doc4" href="#ref4">[4]</a></sup> 또한 (아직 실험 단계이기는 하지만,) WebAssembly로의 컴파일도 가능합니다. 컴파일러가 이 두 타겟을 지원함으로써, 클라이언트 사이드의 웹 개발이 가능해지며, 명시적으로 Java와의 첫 번째 분기(分岐)가 일어납니다. 

Native의 경우, 이름이 말해주듯, Kotlin 코드는 Virtual Machine을 거치지 않고 Binary로 컴파일됩니다. 
모든 경우에서 **JVM이 만병통치약이 아니기 때문에**, (특히 임베디드나 macOS, iOS에서 Desirable한 해결책이 아니기 때문에,) 궁극적인 Multiplatform 지향성을 갖추기 위해서 (그리고 속도를 위해서,) Kotlin의 개발자들은 Native Complier가 필요하다고 판단한 것 같습니다. 두 번째 분기는 여기서 일어납니다. Java와는 달리 '운영체제 독립성'과 '의존성'을 모두 취한 것이죠.

**컴파일 가능성**에 대해 알아보았으니, 우리는 Kotlin으로 작성한 애플리케이션을, 다양한 환경에서, 어떻게 동작(Run)시킬 수 있을지 고민해야 합니다. 

</br>

<h5>Platform: 어떤 환경에서 Kotlin Software를 사용할 것인가</h5>

<p align="left" style="background-color:rgba(184, 184, 184, 0.1); padding-left: 1rem;">
    <img src="https://kotlinlang.org/docs/images/kotlin-multiplatform-hierarchical-structure.svg" width="70%"></br>
    ⬆️ 출처: <a href="https://kotlinlang.org/docs/multiplatform.html#code-sharing-between-platforms"><b>Kotlin Overview: Kotlin Multiplatform</b></a>
    </br>
</p>

> **Write Single Logic, Use it for Any Platform.**
> </br> 공통 로직을 작성하고, 어떤 플랫폼을 위해서든 동작하게 하자.


얼핏 보면, 위 문장은 다른 Cross-Platform 프레임워크의 지향점과 겹치는 것 같지만, 이 생태계는 "애플리케이션을 동작시키기 위한 모든 구성 요소"를, End to End로 Kotlin으로만 작성하기를, 강요하지 않습니다. 우리에게는 세 가지 선택지가 있습니다.


<p align="center" style="background-color:rgba(184, 184, 184, 0.1);">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/722edc21-2401-4654-8b6e-cefd0012301c" width="80%"> </br>
    <img src="https://kotlinlang.org/docs/images/multiplatform-compose.svg" width="50%"></br>
    ⬆️ 이미지 출처: <a href="https://www.jetbrains.com/kotlin-multiplatform/"><b>Kotlin Multiplatform for Cross-Platform Development | Jetbrains </b></a>
</p>

</br>

첫 번째 옵션은 **Logic의 일부를 공유**하는 것입니다. (위의 두 번째 그림을 참고하면)  Data / Business / Presentation Layer 중 일부만을 Kotlin으로 작성하고, 나머지 부분은 각 플랫폼에 맞는 네이티브 코드로 작성하는 것입니다.

두 번째는 **UI를 제외한 모든 구성 요소의 네이티브 의존성을 제거하는 것**입니다. 첫 번째 경우에서 플랫폼 간 공통 로직의 비율을 늘린 것인데요. MVVM 아키텍처를 적용한 모바일 애플리케이션을 예로 들어보죠. 

<blockquote>
    <p align="left" style="padding-left:1rem;">
        <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/8cf9b039-82f4-4565-bebf-2261ab25125f" width="75%"/>
    </p>
    </br>
    ⬆️ Data Layer에 해당하는 Model과 Presentation Layer에 해당하는 ViewModel은 Kotlin으로 작성하고, View는 각 네이티브 환경에 맞추어 작성한 경우의 다이어그램.
</blockquote>

</br>

동일한 기능과 형태를 지닌 View가 각 네이티브 환경에 맞추어 작성되어 있는 형태입니다.
여기서 Compose UI와 SwiftUI 각각의 **#1**는 동일한 ViewModel에 의존하고 있습니다. (**#2** View도 마찬가지입니다.) View를 제외한 모든 로직은 (Swift를 사용하지 않고) Kotlin으로 작성함으로써, 각각 네이티브 애플리케이션을 작성하는 것보다 코드량은 현저히 줄었으며, (각각 Material과 Cupertino의)  고유한 UI 특성은 살렸습니다. 


세 번째 옵션은 **UI까지 모두 Kotlin으로 작성하는 것**입니다. 이를 위해서는 Jetpack Compose 기반의 
[**Compose Multiplatform**](https://github.com/JetBrains/compose-multiplatform)이라는 프레임워크를 사용해야 합니다. 사실 다른 Cross-platform 생태계와 경쟁하게 될 지점은 바로 여기입니다. 애플리케이션(Client Side)의 모든 Layer를 하나의 언어로 작성하기 때문인데요. 그렇지만 Kotlin이라는 생태계가 아직 이 부분에 있어서 강점을 지닌다고 이야기하기에는 시기상조입니다. Desktop Application이나 iOS의 경우에는 아직 불안정한 요소가 많기 때문입니다. 


그러나 Kotlin Multiplaform의 방점은 세 번째 옵션에서 찍히는 것이 아니라고 글쓴이는 생각합니다. 완전한 네이티브 의존성에서 벗어나 애플리케이션을 개발할 때, Kotlin이 우리 손에 쥐어 주는 **세 가지의 옵션**은, (Kotlin Multiplatform이) 다른 Cross-platform의 결(結)과 분기되는 결정적인 지점이자 그 자체로 이 생태계가 가진 다양성의 표상입니다. 

이렇게 (WORA와는 확실히 다른 의미의) **아래 문장**을 충족시키기 위한 제반 조건은 모두 마련되었습니다.

> **Write Single Logic, Use it for Any Platform.**
> </br> 공통 로직을 작성하고, 어떤 플랫폼을 위해서든 동작하게 하자.

**그러니 Kotlin의 다양성은 'Multiplatform'이라는 단어 안에도 존재합니다.**

</br>

---
## 🔙 Kotlin Conf' is Back!

잠시 숨을 고를 시간입니다. 지금까지 Kotlin이라는 커다란 섬, 가장자리를 숨가쁘게 달려 왔으니까요. (Kotlin은 실제로 핀란드 만(Gulf of Finland)에 있는 러시아 영유의 섬입니다. 이름만 봐도, 인도네시아 섬에서 그 명칭을 가져온, Java와 떼려야 뗄 수 없는 언어긴 하네요.) </br>

</br>

<p align="center" style="background-color:rgba(184, 184, 184, 0.1)">
    </br>
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/6d9d4ab2-c820-490d-a4c2-8ca7e1898363" width="40%" /></br>
    ⬆️ 넓고 넓은 12제곱킬로미터의 섬. 우리는 섬 한 바퀴를 거닐었습니다. </br>
    오직 텍스트를 향유하는 경험으로 말이죠. </br>
    이미지 출처: <a href="https://maps.app.goo.gl/wLNfjHkPTo11T79v9">Kotlin Island: Google Maps</a>
</p>
</br>

이 글은 지금까지 하나의 프로그래밍 언어가 가질 수 있는 **다양성(Diversity)과 안정성(Reliability)** 에 중점을 두고 논지를 전개해 왔습니다. 한 생태계의 미래를 바라보는, 앞으로의 텍스트에서도 그러할 것입니다. 위에서 다루었던 언어의 신뢰성을 높이는 10가지 요소를 다시금 톺아보며 (암스테르담에서와 판교, 모두의) 컨퍼런스 내용을 정리해 보겠습니다. 

네 가지 키워드로 정리한, Kotlin의 미래로, 함께 가시죠. 

### Growing of Kotlin

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/05aca570-ab9a-4b68-9d2a-f6866a263928" width="100%"/>
</p>


<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/33ba9854-ea24-4a6c-9717-0390304cb224" width="100%"/>
</p>

---
### K2 Compiler

<p align="left">
    <img src="https://github.com/kevinlim17/kevinlim17-dev-blog/assets/86971052/86064c22-7ec1-44e7-a684-879b1690c3ca" width="100%">
</p>


---
### Kotlin 2.0
<h5>Static Extensions</h5>
<h5>Collection Literals</h5>
<h5>Name-based destructing</h5>
<h5>Context Receivers</h5>
<h5>Explicit fields</h5>

---
### Multiplatform
<p align="left">
    <img src="https://blog.jetbrains.com/wp-content/uploads/2023/04/KC_keynote_2023_2650x1024.100.jpeg" width="100%">
</p>

---

## 💬 Networking

___

## 🧭 Reference

<ol>
    <sup><a id="ref1" href="#doc1"><b>[1]</b></a></sup>
        Nathaniel J. Smith, <a href="https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/" target="blank" rel="nofollow"> "Notes on structured concurrency, or: Go statement considered harmful"</a>, njs blog, last modified April 25, 2018.
</br>
</br>
    <sup><a id="ref2" href="#doc2"><b>[2]</b></a></sup>
         Edsger W. Dijkstra. (1972). Chapter I: Notes on structured programming. In <i>Structured programming</i>. Academic Press Ltd., GBR, (pp. 10).
</br>
</br>
    <sup><a id="ref3" href="#doc3"><b>[3]</b></a></sup>
        <i>"By Default, the Kotlin/JVM compiler produces Java 8 compatible bytecode. (...) Starting with Kotlin 1.5, the compiler does not support producing bytecode compatible with Java versions below 8"</i>,  <a href="https://kotlinlang.org/docs/faq.html#which-versions-of-jvm-does-kotlin-target" target="blank">Kotlin FAQ - Which versions of JVM does Kotlin target?</a>에서 인용.
</br>
</br>
     <sup><a id="ref4" href="#doc4"><b>[4]</b></a></sup>
        <i>"When targeting JavaScript, Kotlin transpiles to ES5.1 and generates code which is compatible with module systems including AMD and CommonJS."</i>,  <a href="https://kotlinlang.org/docs/faq.html#what-does-kotlin-compile-down-to" target="blank">Kotlin FAQ - What does Kotlin compile down to?</a>에서 인용.
</ol>
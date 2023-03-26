---
date: '2023-03-24'
title: 'Android에서 MVVM 패턴이 중요한 이유'
categories: ['Android', 'Architecture']
summary: '수많은 아키텍처 패턴 중 그대 단 하나'
thumbnail: './test1.png'
---

# Android에서 MVVM 패턴이 중요한 이유
___

## → Architecture Pattern이란
>
> An **architectural pattern** is a general, reusable solution 
> to a commonly occurring problem in software architecture   
> within a given context.
>
위키피디아에서는 아키텍처 패턴을 "주어진 컨텍스트 내에서, 소프트웨어 아키텍처에서 주로 발생하는 문제에 대한 일반적이고, 재사용 가능한 솔루션"이라고 정의합니다. 
여기서 **소프트웨어 아키텍처에서 주로 발생하는 문제**라 함은, 서비스를 구현하고 유지-보수의 단계에 이르기까지 개발자가 직면하는 모든 상황을 일컫는 말입니다. 
필자는 그러한 케이스들을 '특정한 형식을 취하여' 쉽게 풀어나갈 수 있도록 하는 **약속의 소프트웨어적 구현 방식**을 '아키텍처 패턴'이라고 생각합니다.
___
## 🗂️ Architecture Pattern의 종류
이 단락에서는 순서대로 **MVC, MVP, MVVM** 패턴으로 구현된 애플리케이션의 기본적인 Data Flow에 대해 다룹니다.

### 0️⃣ 기본 용어 정리 (Frontend 기준)
| 용어           | 의미                                                                                  |
| :------------- | :------------------------------------------------------------------------------------ |
| **View**       | 사용자가 **화면에서 보는 것들**에 대한 구조, 배치, 그리고 외관.                       |
| **Model**      | **Data와 Data를 가져오는 Logic**을 통틀어 이르는 말.                                  |
| **Controller** | Model에 명령을 보내 그 상태를 변경 & View에 명령을 보내 Model의 표시 방법 변경.       |
| **Presenter**  | View가 요청하는 Data를 Model로부터 가져와, 이를 가공하여 View에 전달.                 |
| **ViewModel**  | View의 **추상화된 형태**(Abstraction). View에 보여지는 데이터와 명령들을 가지고 있음. |


___
## 🧭 References
- [영문판 위키피디아 - Architectural Pattern](https://en.wikipedia.org/wiki/Architectural_pattern)
- [Guide to App Architecture - Android Developer (4,6번 이미지 출처)](https://developer.android.com/jetpack/guide?hl=en)
- [안드로이드의 MVC, MVP, MVVM 종합 안내서](https://academy.realm.io/kr/posts/eric-maxwell-mvc-mvp-and-mvvm-on-android/)
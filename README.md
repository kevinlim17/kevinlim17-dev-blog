<p align="left">
  <a href="https://cvbox.org/avatar-plus">
    <img alt="FavIcon" src="./static/notion-avatar.png" width="120" />
  </a>
  <img alt="logo" src="./static/favicon.png" width="120" />
</p>


<h1 align="left">
  kevinlim17-blog
</h1>

[![Deploy](https://github.com/kevinlim17/kevinlim17-dev-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/kevinlim17/kevinlim17-dev-blog/actions/workflows/deploy.yml)  

<a href="https://soople.site"><img src="https://img.shields.io/badge/Blog Link-020024?style=flat&logo=Gatsby&logoColor=white"/></a>


## 🧑🏻‍💻 Introduction
**A Blog to share development stories and posts released at [brunch-stories](https://brunch.co.kr/@kevinlim17)**


## 🧭 Feature

- 📦&nbsp; : **Static Site Built with Gatsby**
- 💬&nbsp; : **Comment Component powered by [Github Utterances](https://github.com/utterance/utterances)**
- 🧮&nbsp; : **Use GraphQL to parse and process .md / .json data**
- 🧩&nbsp; : **ToC(Table of Contents) in Post Pages**
- 🔁&nbsp; : **Impl Continuous Deployment using [Github Actions](https://docs.github.com/en/actions)**

## 🌐 Structure
```
src
 ┣ components
 ┃ ┣ common // Generally-used components
 ┃ ┃ ┣ Sticky.tsx /** Ref: velopert/velog-client Repo */
 ┃ ┃
 ┃ ┣ lib // Generally-used keyframes, styled-component, and etc.
 ┃ ┃
 ┃ ┣ main // Index Page Components
 ┃ ┃
 ┃ ┣ post // Post Page Components
 ┃ ┃ ┣ CommentWidget.tsx /** Github Utterances */
 ┃ ┃
 ┃ ┣ profile // Profile Page Components
 ┃ ┃
 ┃ ┣ utils // Generally-used functions
 ┃ ┃ ┗ GetScrollTop.tsx
 ┃ ┃
 ┃ ┗ writer // Writer's Ground Components
 ┃
 ┣ hooks // To impl infinite scroll, optimize scroll events, and observe html header
 ┃
 ┣ pages
 ┃
 ┣ templates 
 ┃ ┗ post_template.tsx
 ┃
 ┗ types // Generally-used types
 ┃ ┗ PostItem.types.ts
```

## 📑 References
- [Inflearn: React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/lecture?courseSlug=gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)
- [Github Repo: FacerAin/facerain-blog](https://github.com/FacerAin/facerain-blog)
- [Github Repo: velopert/velog-client](https://github.com/velopert/velog-client)
- [Gatsby Official Reference](https://www.gatsbyjs.com/)
- More on [Pull Requests](https://github.com/kevinlim17/kevinlim17-dev-blog/pulls)


## 📲 Contact
- [📧 E-Mail : kevinlsh17@khu.ac.kr](mailto:kevinlsh17@khu.ac.kr)
- Bug Report : [Use 'Fix Bug' Issue Template](https://github.com/kevinlim17/kevinlim17-dev-blog/issues/new/choose)

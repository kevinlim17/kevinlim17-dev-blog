import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'Android에서 MVVM 패턴이 중요한 이유',
  date: '2023.03.24.',
  categories: ['Android', 'MVVM'],
  summary: '수많은 아키텍처 패턴 중 그대 단 하나',
  thumbnail:
    'https://github.com/Dcom-KHU/dcom-tech-interview/raw/master/Frontend/Android/images/mvvm-design-pattern-04.png',
  link: 'https://github.com/Dcom-KHU/dcom-tech-interview/blob/master/Frontend/Android/mvvm-design-pattern.md',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList

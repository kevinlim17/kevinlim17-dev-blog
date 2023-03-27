import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from '../../hooks/useInfiniteScroll'

/** Dummy Data
const POST_ITEM_DATA = {
  title: 'Android에서 MVVM 패턴이 중요한 이유',
  date: '2023.03.24.',
  categories: ['Android', 'MVVM'],
  summary: '수많은 아키텍처 패턴 중 그대 단 하나',
  thumbnail:
    'https://github.com/Dcom-KHU/dcom-tech-interview/raw/master/Frontend/Android/images/mvvm-design-pattern-04.png',
  link: 'https://github.com/Dcom-KHU/dcom-tech-interview/blob/master/Frontend/Android/mvvm-design-pattern.md',
}
 */

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList

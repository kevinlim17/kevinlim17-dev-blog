import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  background: rgba(250, 249, 246, 1);
  height: auto;
  padding-top: 5vh;

  @media (max-width: 768px) {
    min-height: auto;
    // padding-bottom: 20px;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  summary,
  date,
  categories,
  thumbnail,
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo
        title={title}
        summary={summary}
        date={date}
        categories={categories}
        thumbnail={thumbnail}
      />
    </PostHeadWrapper>
  )
}

export default PostHead

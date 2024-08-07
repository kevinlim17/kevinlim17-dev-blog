import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 350px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.5);

  @media (max-width: 768px) {
    height: 350px;
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
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo
        title={title}
        summary={summary}
        date={date}
        categories={categories}
      />
    </PostHeadWrapper>
  )
}

export default PostHead

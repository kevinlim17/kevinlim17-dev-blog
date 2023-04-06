import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostContent from './PostContent'
import PostTOC from './PostTOC'

type PostContainerProps = {
  html: string
  tableOfContents: any
}

const PostContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  margin: 0 0 0 5vw;
  padding-bottom: 10vw;
  //border-bottom: 1px solid rgba(2, 0, 36, 0.1);
`

const PostContainer: FunctionComponent<PostContainerProps> = function ({
  html,
  tableOfContents,
}) {
  return (
    <PostContainerWrapper>
      <PostContent html={html} />
      <PostTOC tableOfContents={tableOfContents} />
    </PostContainerWrapper>
  )
}

export default PostContainer
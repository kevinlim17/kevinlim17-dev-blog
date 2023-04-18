import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import PostContent from './PostContent'
import PostTOC from './PostTOC'
import { debounce } from 'lodash'

type PostContainerProps = {
  html: string
  tableOfContents: string
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
  const [windowWidth, setWindowWidth] = useState<number>(0)

  //handleResize 함수를 debounce로 감싸고, 시간(1000ms = 1sec)을 설정
  const handleResizeWidth = debounce(() => {
    setWindowWidth(window.innerWidth)
  }, 500)

  useEffect(() => {
    window.addEventListener('resize', handleResizeWidth)
    return () => {
      window.removeEventListener('resize', handleResizeWidth)
    }
  })

  // width가 1200 이하면 TOC를 Rendering하지 않음.
  return windowWidth >= 1200 ? (
    <PostContainerWrapper>
      <PostContent html={html} />
      <PostTOC tableOfContents={tableOfContents} />
    </PostContainerWrapper>
  ) : (
    <PostContainerWrapper>
      <PostContent html={html} />
    </PostContainerWrapper>
  )
}

export default PostContainer

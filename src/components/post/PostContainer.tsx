import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import PostContent from './PostContent'
import PostTOC from './PostTOC'
import { debounce } from 'lodash'

type WindowWidthProps = {
  windowWidth: string
}

type PostContainerProps = {
  html: string
  tableOfContents: string
}

const PostContainerWrapper = styled.div<WindowWidthProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.windowWidth};
  justify-content: space-between;
  position: relative;
  padding: 0 5vw 10vw 5vw;
  background-color: rgba(250, 249, 246, 1);
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
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWidth)

    return () => {
      window.removeEventListener('resize', handleResizeWidth)
    }
  })

  // width가 1200 이하면 TOC를 Rendering하지 않음.
  return windowWidth >= 1200 ? (
    <PostContainerWrapper windowWidth={`row`}>
      <PostContent html={html} />
      <PostTOC tableOfContents={tableOfContents} />
    </PostContainerWrapper>
  ) : (
    <PostContainerWrapper windowWidth={`column`}>
      <PostTOC tableOfContents={tableOfContents} />
      <PostContent html={html} />
    </PostContainerWrapper>
  )
}

export default PostContainer

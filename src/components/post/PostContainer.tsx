import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import PostContent from './PostContent'
import PostTOC from './PostTOC'
import RelatedArticles from './RelatedArticles'
import CommentWidget from './CommentWidget'
import { debounce } from 'lodash'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type WindowWidthProps = {
  windowWidth: string
}

type RelatedPost = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

type PostContainerProps = {
  html: string
  tableOfContents: string
  relatedPosts?: RelatedPost[]
}

const PostContainerWrapper = styled.div<WindowWidthProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.windowWidth};
  justify-content: space-between;
  position: relative;
  padding: 0 5vw 5vw 5vw;
  background-color: rgba(250, 249, 246, 1);
`

const PostContainer: FunctionComponent<PostContainerProps> = function ({
  html,
  tableOfContents,
  relatedPosts = [],
}) {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  // useRef로 debounce 인스턴스를 마운트 시 1회만 생성
  const handleResizeWidth = useRef(
    debounce(() => {
      setWindowWidth(window.innerWidth)
    }, 150),
  ).current

  // 의존성 배열 []로 마운트/언마운트 시에만 리스너 등록·해제
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWidth)

    return () => {
      window.removeEventListener('resize', handleResizeWidth)
      handleResizeWidth.cancel()
    }
  }, [])

  // width가 1200 이하면 TOC를 Rendering하지 않음.
  return windowWidth >= 1200 ? (
    <>
      <PostContainerWrapper windowWidth={`row`}>
        <PostContent html={html} />
        <PostTOC tableOfContents={tableOfContents} />
      </PostContainerWrapper>
      <PostContainerWrapper windowWidth={`row`}>
        <RelatedArticles posts={relatedPosts} />
      </PostContainerWrapper>
      <PostContainerWrapper windowWidth={`row`}>
        <CommentWidget />
      </PostContainerWrapper>
    </>
  ) : (
    <>
      <PostContainerWrapper windowWidth={`column`}>
        <PostTOC tableOfContents={tableOfContents} />
        <PostContent html={html} />
      </PostContainerWrapper>
      <PostContainerWrapper windowWidth={`column`}>
        <RelatedArticles posts={relatedPosts} />
      </PostContainerWrapper>
      <PostContainerWrapper windowWidth={`column`}>
        <CommentWidget />
      </PostContainerWrapper>
    </>
  )
}

export default PostContainer

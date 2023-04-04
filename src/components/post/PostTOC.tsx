import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'

type PostTOCProps = {
  tableOfContents: any
}

type PostTOCScrollActiveProps = {
  isScrollActive: boolean
  currentTOCOffsetY: number
}

const PostTOCWrapper = styled.div<PostTOCScrollActiveProps>`
  display: none;
  @media screen and (min-width: 1200px) {
    position: fixed;
    display: inline-block;
    top: 50px;
    margin-top: ${props =>
      props.isScrollActive ? '0' : `${420 - props.currentTOCOffsetY}px`};
    margin-left: 70vw;
    padding: 16px 8px;
    height: fit-content;
    max-height: calc(100vh - 200px);
    max-width: 20vw;
    overflow-wrap: break-word;
    border-radius: 8px;
    background-color: rgba(2, 0, 36, 0.03);
  }
`

const PostTOCContent = styled.div`
  ul {
    margin: 3px 3px;
    padding: 3px 5px;
    font-weight: 500;
    font-size: 11px;

    border-left: 3px solid rgba(2, 0, 36, 0.1);

    li {
      color: rgba(2, 0, 36, 1);
      padding: 1px;
      margin-left: 10px;
      margin-bottom: 5px;
      list-style-type: none;

      u {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
        background-color: rgba(2, 0, 36, 0.1);
        color: green;
      }
    }

    :only-child {
      font-size: 12px;
      font-weight: 800;
      padding: 0px;
    }

    :nth-child(1) {
      border: 0px;
    }
  }
`

const PostTOC: FunctionComponent<PostTOCProps> = function ({
  tableOfContents,
}) {
  const [currentScrollY, setScrollY] = useState(0)
  const [isScrollActive, setScrollActive] = useState(false)

  const handleScroll = () => {
    if (currentScrollY > 300) {
      setScrollY(window.scrollY)
      setScrollActive(true)
    } else {
      setScrollY(window.scrollY)
      setScrollActive(false)
    }
  }

  useEffect(() => {
    const ToC = document.getElementById('table-of-contents')

    const PostContent = document.getElementById('post-content')
    const postHeaderElements = PostContent?.querySelectorAll('h2, h3, h4') ?? []

    postHeaderElements.forEach((headerElement, idx) => {
      const { top } = headerElement.getBoundingClientRect()
      const elementTop = top + currentScrollY

      const ToCLinkElement = ToC?.getElementsByTagName('a').item(idx)

      ToCLinkElement?.addEventListener('click', e => {
        e.preventDefault()
        window.scroll({ top: elementTop, behavior: 'smooth' })
      })
    })

    const scrollListener = () => {
      window.addEventListener('scroll', handleScroll)
    }
    scrollListener()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <PostTOCWrapper
      isScrollActive={isScrollActive}
      currentTOCOffsetY={currentScrollY}
    >
      <PostTOCContent
        id="table-of-contents"
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
    </PostTOCWrapper>
  )
}

export default PostTOC

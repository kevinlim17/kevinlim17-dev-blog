import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useHeadsObserver from '../../hooks/useHeadsObserver'

type PostTOCProps = {
  tableOfContents: string
}

type PostTOCScrollActiveProps = {
  isScrollActive: boolean
  currentTOCOffsetY: number
}

type PostCurrentHeaderProps = {
  currentHeader: string | null
}

const PostTOCWrapper = styled.div<PostTOCScrollActiveProps>`
  @media screen and (max-width: 1199px) {
    display: none;
    max-width: 0%;
    margin-left: 0;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
    display: inline-block;
    top: 50px;
    margin-top: ${props =>
      props.isScrollActive ? '0' : `${420 - props.currentTOCOffsetY}px`};
    margin-left: 70vw;
    padding: 8px 8px;
    height: fit-content;
    max-height: calc(100vh - 200px);
    max-width: 20vw;
    overflow-wrap: break-word;
    border-radius: 8px;
    //background-color: rgba(2, 0, 36, 0.03);
    border-left: 6px solid rgba(2, 0, 36, 0.1);
  }
`

const PostTOCContent = styled.div<PostCurrentHeaderProps>`
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

      a[href='${props => props.currentHeader}'] {
        text-decoration: underline;
        text-underline-offset: 3px;
        background-color: rgba(2, 0, 36, 0.02);
        color: green;
        font-size: 13px;
        margin-bottom: 2px;
        font-weight: 700;
      }
    }

    :only-child {
      font-size: 12px;
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

  const PostContent = document.getElementById('post-content')
  const ToC = document.getElementById('table-of-contents')
  const postHeaderElements = PostContent?.querySelectorAll('h2, h3, h4') ?? []

  const { activeId } = useHeadsObserver(postHeaderElements)

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
    postHeaderElements.forEach((headerElement, idx) => {
      const { top } = headerElement.getBoundingClientRect()
      const elementTop = top + currentScrollY

      const ToCLinkElement = ToC?.getElementsByTagName('a').item(idx)

      ToCLinkElement?.addEventListener('click', e => {
        e.preventDefault()
        window.scroll({ top: elementTop, behavior: 'smooth' })
      })
    })

    console.log(activeId)

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
        currentHeader={activeId}
      />
    </PostTOCWrapper>
  )
}

export default PostTOC

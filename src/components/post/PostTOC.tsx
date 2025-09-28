import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useHeadsObserver from '../../hooks/useHeadsObserver'
import Sticky from 'components/common/Sticky'
import { getScrollTop } from 'components/utils/GetScrollTop'

type PostTOCProps = {
  tableOfContents: string
}

type PostCurrentHeaderProps = {
  currentHeader: string | null
}

type PostTOCContentProps = PostCurrentHeaderProps & {
  isExpanded: boolean
}

type PostTOCHeaderProps = {
  isExpanded: boolean
  currentHeader: string | null
}

const PostTOCPositioner = styled.div`
  position: relative;
  margin-top: 1vh;
  // min-width: 100%;

  @media screen and (max-width: 1199px) {
    position: relative;
    margin-left: 0%;
    margin-top: 0;
  }
`

const PostTOCBlock = styled(Sticky)`
  padding: 0;
  height: fit-content;
  max-height: calc(100vh - 200px);
  min-width: calc(20vw);
  width: calc(20vw);
  overflow-wrap: break-word;
  overflow-y: auto;
  // background-color: rgba(196, 196, 196, 0.8);
  border-top: 2px dashed rgba(2, 0, 36, 0.3);
  border-right: 2px dashed rgba(2, 0, 36, 0.3);

  @media screen and (min-width: 1200px) {
    box-shadow: -6px 6px 1px 0px rgba(2, 0, 36, 0.1);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: -6px 12px 2px 0px rgba(2, 0, 36, 0.2);
      transition: all 0.2s ease;
    }
  }

  @media screen and (max-width: 1199px) {
    max-width: 90vw;
    width: auto;
    margin: 0px;
    z-index: 1000;
    border-right: 2px dashed rgba(2, 0, 36, 0.3);
    border-left: 2px solid rgba(2, 0, 36, 1);
    border-top: 0;
    transform: translateY(-1px);
    // box-shadow: -3px 4px 0 0 rgba(2, 0, 36, 0.2);
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 768px) {
    // width: 100%;
    border-left: 1.5px solid rgba(2, 0, 36, 1);
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const PostTOCHeader = styled.div<PostTOCHeaderProps>`
  display: flex;
  z-index: 4;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props =>
    props.isExpanded ? 'rgba(250, 249, 246, 1)' : 'rgba(196, 196, 196, 0.1)'};
  color: ${props => (props.isExpanded ? 'rgba(2, 0, 36, 1)' : 'transparent')};
  font-weight: 600;
  font-size: 16px;
  position: relative;
  transition: all 0.2s ease;

  @media screen and (min-width: 1200px) {
    display: none;
  }

  &:hover {
    background-color: rgba(196, 196, 196, 0.9);
    transition: background-color 0.5s ease;
    transform: translateY(-2px);
    box-shadow: 2px 4px 1px 0px rgba(2, 0, 36, 0.7);
    transition: all 0.2s ease;

    * {
      color: rgba(2, 0, 36, 1);
    }
  }
`

const PostTOCTitle = styled.div<PostTOCHeaderProps>`
  font-weight: 700;
  flex: 1;
  // color: #000;
`

const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 0;

  &:hover {
    background: rgba(2, 0, 36, 0.3);
  }
`

const PostTOCContent = styled.div<PostTOCContentProps>`
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow-x: auto;
  overflow-y: auto;
  backdrop-filter: blur(20px);
  box-shadow: 3px 3px 4px 0 rgba(2, 0, 36, 0.2);
  padding: ${props => (props.isExpanded ? '20px' : '0 20px')};

  @media screen and (min-width: 1200px) {
    max-height: none !important;
    opacity: 1 !important;
    padding: 20px;
    background: rgba(196, 196, 196, 0.1);
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 1199px) {
    max-height: ${props => (props.isExpanded ? 'none' : '0')};
    opacity: ${props => (props.isExpanded ? '1' : '0')};
    background: rgba(196, 196, 196, 0.5);
  }

  .modal__content::-webkit-scrollbar {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
    font-size: 1;
    border-left: 2px dashed rgba(2, 0, 36, 1);
    padding-left: 16px;

    li {
      color: #374151;
      padding: 2px 0;
      margin-left: 0;
      margin-bottom: 8px;
      list-style-type: none;
      word-break: keep-all;
      line-height: 1.2;

      u {
        text-decoration: none;
      }

      a {
        color: #1e242d;
        text-decoration: none;
        transition: all 0.2s ease;
        padding: 2px 4px;
        border-radius: 0;
        display: inline-block;
        line-height: 1.4;

        &:hover {
          background: #f3f4f6;
          color: #1f2937;
        }
      }

      a[href='${props => props.currentHeader}'] {
        background: rgba(2, 0, 36, 1);
        color: rgba(250, 249, 246, 1);
        font-weight: 600;
        border: 1px solid #000;
      }
    }

    :only-child {
      font-size: 0.85rem;
      padding: 0;
      overflow-wrap: break-word;
      word-break: keep-all;
    }

    :nth-child(1) {
      border: 0px;
    }

    /* Nested lists styling */
    ul {
      margin-top: 8px;
      border-left-color: rgba(2, 0, 36, 0.3);
      font-size: 8px;

      li {
        margin-bottom: 6px;

        a {
          color: #6b7280;
          font-size: 0.75rem;

          &:hover {
            color: #374151;
          }
        }

        a[href='${props => props.currentHeader}'] {
          background: #6b7280;
          color: white;
        }
      }
    }
  }
`

const PostTOC: FunctionComponent<PostTOCProps> = function ({
  tableOfContents,
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [postHeaderElements, setPostHeaderElements] = useState<
    NodeListOf<Element> | never[]
  >([])
  const [isClient, setIsClient] = useState(false)

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Get DOM elements and set up header elements only on client side
  useEffect(() => {
    if (!isClient) return

    const PostContent = document.getElementById('post-content')
    const headerElements = PostContent?.querySelectorAll('h2, h3, h4') ?? []
    setPostHeaderElements(headerElements)
  }, [isClient])

  const { activeId } = useHeadsObserver(postHeaderElements)

  useEffect(() => {
    if (!isClient || postHeaderElements.length === 0) return

    const ToC = document.getElementById('table-of-contents')
    const clickHandlers: Array<{
      element: Element
      handler: (e: Event) => void
    }> = []

    postHeaderElements.forEach((headerElement, idx) => {
      const { top } = headerElement.getBoundingClientRect()
      const elementTop = top + getScrollTop() - 70

      const ToCLinkElement = ToC?.getElementsByTagName('a').item(idx)

      if (ToCLinkElement) {
        const handler = (e: Event) => {
          e.preventDefault()
          window.scroll({ top: elementTop, behavior: 'smooth' })
        }
        ToCLinkElement.addEventListener('click', handler)
        clickHandlers.push({ element: ToCLinkElement, handler })
      }
    })
    // Cleanup function to remove event listeners
    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler)
      })
    }
  }, [isClient, postHeaderElements])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <PostTOCPositioner>
      <PostTOCBlock top={75}>
        <PostTOCHeader isExpanded={isExpanded} currentHeader={activeId}>
          <PostTOCTitle isExpanded={isExpanded} currentHeader={activeId}>
            # Table
          </PostTOCTitle>
          <ToggleButton onClick={toggleExpanded}>
            {isExpanded ? '▼' : '▶'}
          </ToggleButton>
        </PostTOCHeader>
        <PostTOCContent
          id="table-of-contents"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
          currentHeader={activeId}
          isExpanded={isExpanded}
        />
      </PostTOCBlock>
    </PostTOCPositioner>
  )
}

export default PostTOC

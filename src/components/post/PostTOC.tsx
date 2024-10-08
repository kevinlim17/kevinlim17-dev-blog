import React, { FunctionComponent, useEffect } from 'react'
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

const PostTOCPositioner = styled.div`
  position: absolute;
  margin-left: 73%;
  margin-top: 2rem;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`

const PostTOCBlock = styled(Sticky)`
  padding: 8px 8px;
  height: fit-content;
  max-height: calc(100vh - 200px);
  overflow-wrap: break-word;
  border-radius: 8px;
  //background-color: rgba(2, 0, 36, 0.03);
  border-left: 3px solid rgba(2, 0, 36, 0.1);
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 1px 1px 0, rgba(0, 0, 0, 0.12) 0 1px 3px 0;
`

const PostTOCContent = styled.div<PostCurrentHeaderProps>`
  ul {
    margin: 3px 3px;
    padding: 3px 5px;
    font-family: 'NanumSquareNeoBold';
    font-size: 10px;

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
        font-size: 12px;
        margin-bottom: 2px;
        font-family: 'NanumSquareNeoExtraBold';
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
  const PostContent = document.getElementById('post-content')
  const ToC = document.getElementById('table-of-contents')
  const postHeaderElements = PostContent?.querySelectorAll('h2, h3, h4') ?? []

  const { activeId } = useHeadsObserver(postHeaderElements)

  useEffect(() => {
    postHeaderElements.forEach((headerElement, idx) => {
      const { top } = headerElement.getBoundingClientRect()
      const elementTop = top + getScrollTop()

      const ToCLinkElement = ToC?.getElementsByTagName('a').item(idx)

      ToCLinkElement?.addEventListener('click', e => {
        e.preventDefault()
        window.scroll({ top: elementTop, behavior: 'smooth' })
      })
    })

    console.log(activeId + '1')
  })

  return (
    <PostTOCPositioner>
      <PostTOCBlock top={100}>
        <PostTOCContent
          id="table-of-contents"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
          currentHeader={activeId}
        />
      </PostTOCBlock>
    </PostTOCPositioner>
  )
}

export default PostTOC

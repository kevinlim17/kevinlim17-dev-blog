import React, { createRef, FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const src = 'https://utteranc.es/client.js'
const repo = 'kevinlim17/kevinlim17-dev-blog'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const CommentWidgetWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-right: 2px dashed rgba(2, 0, 36, 0.3);
  background-color: rgba(250, 249, 246, 1);
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(2, 0, 36, 1);
  margin-bottom: 2rem;
  font-family: 'NanumSquareNeoBold';
`

const CommentContainer = styled.div`
  width: 100%;

  .utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 760px;
    margin-left: 0;
    margin-right: auto;
  }
`

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src: src,
      repo: repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return (
    <CommentWidgetWrapper>
      <SectionTitle>Comments</SectionTitle>
      <CommentContainer ref={element} />
    </CommentWidgetWrapper>
  )
}

export default CommentWidget

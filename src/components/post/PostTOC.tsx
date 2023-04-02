import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PostTOCProps = {
  tableOfContents: any
}

const PostTOCWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    position: sticky;
    display: inline-block;
    font-size: 12px;
    margin: 5vh 0 0 2vw;
    padding: 16px 8px;
    height: fit-content;
    max-height: calc(100vh - 200px);
    overflow-wrap: break-word;
    border-radius: 8px;
    background-color: rgba(2, 0, 36, 0.1);
  }
`

const PostTOCContent = styled.div`
  ul {
    margin: 3px 3px;
    padding: 3px 5px;
    font-weight: 500;

    li {
      color: rgba(2, 0, 36, 1);
      padding: 2px;
      margin-left: 10px;
      margin-bottom: 5px;
      list-style-type: none;

      u {
        text-decoration: none;
      }
    }

    :only-child {
      font-weight: 800;
      padding: 0px;
    }
  }
`

const PostTOC: FunctionComponent<PostTOCProps> = function ({
  tableOfContents,
}) {
  return (
    <PostTOCWrapper>
      <PostTOCContent dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    </PostTOCWrapper>
  )
}

export default PostTOC

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PostTOCProps = {
  tableOfContents: any
}

const PostTOCContainer = styled.div`
  position: absolute;
  top: 10px;
  height: 100%;
  left: 840px;
  width: 15vw;
`

const PostTOCWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1300px) {
    position: sticky;
    display: inline-block;
    font-size: 12px;
    margin: 50px 0 0 0;
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
    <PostTOCContainer>
      <PostTOCWrapper>
        <PostTOCContent dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </PostTOCWrapper>
    </PostTOCContainer>
  )
}

export default PostTOC

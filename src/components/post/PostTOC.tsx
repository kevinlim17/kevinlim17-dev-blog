import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type PostTOCProps = {
  tableOfContents: any
}

const PostTOCContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 10px;
  height: 100%;
  left: 850px;
  width: 500px;
`

const PostTOCBorder = styled.div`
  margin: 60px 0 0 30px;
  border-left: thick solid rgba(2, 0, 36, 0.3);
  max-height: calc(100vh - 200px);
`

const PostTOCWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    position: sticky;
    display: inline-block;
    font-size: 14px;
    margin: 60px 60px 0 10px;
    max-height: calc(100vh - 200px);
    overflow: auto;
  }
`

const PostTOCContent = styled.div`
  ul {
    margin: 3px 3px;
    padding: 5px;
    font-weight: 500;

    li {
      color: black;
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
      padding: 1px;
    }
  }
`

const PostTOC: FunctionComponent<PostTOCProps> = function ({
  tableOfContents,
}) {
  return (
    <PostTOCContainer>
      <PostTOCBorder />
      <PostTOCWrapper>
        <PostTOCContent dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </PostTOCWrapper>
    </PostTOCContainer>
  )
}

export default PostTOC

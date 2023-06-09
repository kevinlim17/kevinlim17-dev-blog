import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  //Renderer style
  display: flex;
  flex-direction: column;
  max-width: 58vw;
  margin: 0 0 0 9vw;
  padding: 50px 40px 0 40px;
  word-break: break-all;
  border-left: 0.5px solid rgba(2, 0, 36, 0.2);
  border-right: 0.5px solid rgba(2, 0, 36, 0.2);

  @media screen and (max-width: 1200px) and (min-width: 769px) {
    max-width: 80vw;
    margin-left: 5vw;
    border: 0px;
  }

  // Markdown Style
  line-height: 1.8;
  font-size: 14px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1 {
    font-weight: 900;
  }
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
  }
  h4 {
    font-weight: 700;
    margin-bottom: 1px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 10px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
  }

  u {
    text-decoration: underline;
    text-underline-position: under;
  }

  // Adjust bold's font-weight
  strong {
    font-weight: 800;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid rgba(184, 184, 184, 0.5);
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 15px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid rgba(184, 184, 184, 1);
    margin: 30px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
    text-underline-position: under;
  }

  // Adjust Table Style
  table {
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  }
  th {
    background-color: #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 5px;
    border-radius: 3px;
  }
  td {
    border-bottom: 1px solid rgba(184, 184, 184, 1);
    padding: 5px;
    text-indent: 3px;
    border-radius: 3px;
  }
  td:nth-child(1) {
    background-color: #ddd;
    text-align: left;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
    padding: 3px 8px;
    font-size: 14px;
    background-color: rgba(2, 0, 36, 1);
    color: rgba(0, 255, 109, 0.8);
    margin-right: 2px;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;
    margin-left: 0;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <MarkdownRenderer
      id="post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default PostContent

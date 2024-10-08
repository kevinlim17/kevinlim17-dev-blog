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
  word-break: word-break;
  border-left: 0.5px solid rgba(2, 0, 36, 0.2);
  border-right: 0.5px solid rgba(2, 0, 36, 0.2);

  @media screen and (max-width: 1200px) and (min-width: 769px) {
    max-width: 80vw;
    margin-left: 5vw;
    border: 0px;
    line-height: 2;

    img {
      width: 80%;
    }

    blockquote > p > img {
      width: 100%;
    }

  }

  // Markdown Style
  line-height: 2;
  font-size: 15px;
  font-family: 'NanumSquareNeoExtraBold';

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
    border-radius: 0.5rem;
  }

  img {
    margin: 10px 0;
  }

  // Adjust Heading Element Style
  h1 {
    font-family: 'NanumSquareNeoHeavy';
  }

  h2,
  h3 {
    font-family: 'NanumSquareNeoExtraBold';
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(2, 0, 36, 0.7);
  }

  h4 {
    font-family: 'NanumSquareNeoBold';
    margin-bottom: 10px;
  }

  h5 {
    font-family: 'NanumSquareNeoBold';
    margin-bottom: 1rem;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4 {
    margin-top: 20px;
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4 {
    margin-top: 0;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
    background-color: rgb(0, 255, 109, 0.1);
  }

  h5 {
    font-size: 17px;
    background-color: rgb(0, 0, 0, 0.05);
  }

  u {
    text-decoration: underline;
    text-underline-position: under;
  }

  // Adjust bold's font-weight
  strong {
    font-family: 'NanumSquareNeoExtraBold';
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 10px 0;
    padding: 10px 15px;
    border-left: 2px solid rgba(184, 184, 184, 0.5);
    border-radius: 1rem;
    background: rgba(184, 184, 184, 0.1);
  }

  blockquote > div[class*='gatsby-highlight'] > pre[class*='language-'] {
    margin: 1rem 0;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 15px;
    padding: 1rem 0.8rem;
    border-left: 2px solid rgba(184, 184, 184, 0.5);
    border-radius: 0.5rem;
  }

  li {
    margin: 0 2rem;
  }

  li::marker {
    font-family: 'NanumSquareNeoExtraBold';
  }

  // Adjust Horizontal Rule style
  hr {
    border: 0.5px solid rgba(184, 184, 184, 0.3);
    margin: 30px 0;
  }

  blockquote > hr {
    margin: 0.5rem 0;
  }

  // Adjust Link Element Style
  a {
    color: rgba(65, 75, 178, 1);
    text-decoration: underline;
    text-underline-position: under;
    word-break: break-word;
  }

  // Adjust Footnote Style
  sup > a {
    text-decoration: blink;
  }

  // Adjust Table Style
  table {
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
    margin: 2rem 0;
  }
  th {
    background-color: #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 5px;
    border-radius: 0.5rem;
  }
  td {
    border-bottom: 1px solid rgba(184, 184, 184, 1);
    padding: 5px;
    text-indent: 3px;
    border-radius: 0.5rem;
    max-width: 25vw;
    min-width: 5vw;
  }
  td:nth-child(1) {
    background-color: #ddd;
    text-align: left;
  }

  // Adjust Code Style
  span[class*='token '] {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
  }

  pre[class*='language-'] {
    margin: 15px 0;
    font-size: 14px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
    background-color: rgba(5, 0, 56, 0.95);

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 5;
    padding: 10px 25px;
    font-size: 15px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
    line-height: 1.35;
    color: rgba(0, 255, 109, 1);
    margin-right: 2px;
    border-radius: 0.5rem;
  }

  code[class*='language-text'] {
    tab-size: 5;
    padding: 3px 8px;
    font-size: 14px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
    background-color: rgba(2, 0, 36, 0.8);
    color: rgba(0, 255, 109, 1);
    margin-right: 2px;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 5vh 1rem 2vh;
    line-height: 1.8;
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

    h5 {
      font-size: 15px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }

    td {
      width: 40vw;
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

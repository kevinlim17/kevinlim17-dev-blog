import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  //Renderer style
  display: flex;
  flex-direction: column;
  max-width: 67vw;
  // margin-top: 1vh;
  padding: 25px 40px 0 40px;
  word-break: break-word;
  border-left: 2px solid rgba(2, 0, 36, 1);
  // border-right: 0.5px solid rgba(2, 0, 36, 0.2);
  // border-top: 1.5px solid rgba(2, 0, 36, 0.5);

  @media screen and (max-width: 1200px) and (min-width: 769px) {
    max-width: 100%;
    margin-top: 2vh;
    margin-left: 0;
    // margin-right: 5vw;
    padding: 0px;
    border: 0px;
    line-height: 2;

    blockquote > p > img {
      // width: 50%;
    }
  }

  // Markdown Style
  line-height: 2.1;
  font-size: 1.1rem;
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

  h2 {
    font-weight: 600;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    border-left: 2px solid rgba(2, 0, 36, 0.7);
    border-bottom: 2px solid rgba(2, 0, 36, 0.7);
    transform: translateY(-3px);
    box-shadow: -2px 2px 0 0 rgba(2, 0, 36, 0.1);
  }

  h3 {
    font-weight: 400;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    border-left: 2px dashed rgba(2, 0, 36, 0.4);
    border-bottom: 2px solid rgba(2, 0, 36, 0.7);
  }

  h4 {
    font-family: 'NanumSquareNeoLight';
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 2px dashed rgba(2, 0, 36, 0.4);
    border-bottom: 2px dashed rgba(2, 0, 36, 0.7);
  }

  h5 {
    font-family: 'NanumSquareNeoLight';
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
    background-color: rgba(2, 0, 36, 0.1);
  }

  h5 {
    font-size: 17px;
    background-color: rgba(2, 0, 36, 0.05);
  }

  u {
    text-decoration: underline;
    -webkit-text-underline-position: under;
    text-underline-position: under;
  }

  // Adjust bold's font-weight
  strong {
    font-family: 'NanumSquareNeoExtraBold';
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 15px 0;
    padding: 20px 28px;
    border-left: 2px solid rgba(2, 0, 36, 1);
    border-bottom: 1px solid rgba(2, 0, 36, 1);
    transform: translateY(-3px);
    box-shadow: -6px 6px 1px 0px rgba(2, 0, 36, 0.1);
  }

  blockquote > div[class*='gatsby-highlight'] > pre[class*='language-'] {
    margin: 1rem 0;
  }

  // Adjust List Element Style
  ol,
  ul {
    padding: 1rem 0.5rem;
    border-radius: 0;
    margin-left: 0.5rem;
    box-shadow: -8px 0px 0px 0px rgba(2, 0, 36, 0.2);
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
    color: #787777;
    text-decoration: underline;
    -webkit-text-underline-position: under;
    text-underline-position: under;
    word-break: break-word;
  }

  // Adjust Footnote Style
  sup > a {
    text-decoration: none;
  }

  // Adjust Table Style
  table {
    border-collapse: collapse;
    border-left: 2px solid rgba(2, 0, 36, 1);
    border-top: 2px solid rgba(2, 0, 36, 1);
    border-right: 1.5px dashed rgba(2, 0, 36, 0.4);
    box-shadow: -6px 6px 1px 0px rgba(2, 0, 36, 0.1);
    margin: 1rem 0;
  }
  th {
    background-color: rgba(2, 0, 36, 1);
    color: rgba(250, 249, 246, 1);
    border-right: 1px solid rgba(250, 249, 246, 0.15);
    border-bottom: 2px solid rgba(250, 249, 246, 0.2);
    padding: 8px 14px;
    font-family: 'NanumSquareNeoBold';
    font-weight: 400;
    text-align: left;
    font-size: 1rem;
  }
  td {
    border-bottom: 1px solid rgba(2, 0, 36, 0.12);
    border-right: 1px solid rgba(2, 0, 36, 0.08);
    padding: 8px 14px;
    max-width: 25vw;
    min-width: 5vw;
    font-size: 1rem;
  }
  td:nth-child(1) {
    background-color: rgba(2, 0, 36, 0.04);
    font-family: 'NanumSquareNeoBold';
    text-align: left;
  }

  // Adjust Code Style
  span[class*='token '] {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-style: normal;
  }

  pre[class*='language-'] {
    margin: 15px 0;
    font-size: 14px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-style: normal;
    background-color: rgba(248, 247, 243, 1);
    border-left: 2px solid rgba(2, 0, 36, 1);
    border-bottom: 1px solid rgba(2, 0, 36, 0.2);
    box-shadow: -6px 6px 1px 0px rgba(2, 0, 36, 0.1);
    transition: all 0.2s ease;

    ::-webkit-scrollbar-thumb {
      background: rgba(2, 0, 36, 0.3);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    -webkit-tab-size: 5;
    tab-size: 5;
    padding: 10px 25px;
    font-size: 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-style: normal;
    line-height: 1.4;
    color: rgba(2, 0, 36, 1);
    margin-right: 2px;
    border-radius: 0;
  }

  // Prism token colors — tuned for light (cream) background
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: rgba(2, 0, 36, 0.38);
    font-style: italic;
  }

  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: rgba(100, 0, 160, 1);
    font-weight: 700;
  }

  .token.string,
  .token.attr-value,
  .token.char,
  .token.regex {
    color: rgba(0, 110, 30, 1);
  }

  .token.number,
  .token.boolean,
  .token.constant {
    color: rgba(160, 40, 0, 1);
  }

  .token.function,
  .token.function-variable {
    color: rgba(0, 70, 160, 1);
  }

  .token.class-name,
  .token.maybe-class-name,
  .token.builtin {
    color: rgba(0, 100, 130, 1);
    font-weight: 600;
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted {
    color: rgba(170, 30, 30, 1);
  }

  .token.attr-name,
  .token.variable {
    color: rgba(0, 80, 150, 1);
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: rgba(2, 0, 36, 0.65);
  }

  .token.punctuation {
    color: rgba(2, 0, 36, 0.5);
  }

  .token.inserted {
    color: rgba(0, 120, 40, 1);
  }

  .token.namespace {
    opacity: 0.75;
  }

  // Inline code (single backtick)
  code[class*='language-text'] {
    -webkit-tab-size: 5;
    tab-size: 5;
    padding: 3px 8px;
    font-size: 14px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    font-style: normal;
    background-color: rgba(248, 247, 243, 1);
    color: rgba(2, 0, 36, 1);
    margin-right: 2px;
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 rgba(2, 0, 36, 0.12);
  }

  // Plain fenced block (no language specified) — reset inline styles, inherit from pre
  pre[class*='language-text'] > code[class*='language-text'] {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    font-size: 1rem;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 2vh 0vw 2vh;
    line-height: 2;
    font-size: 1rem;
    margin-left: 0;
    border-left: 0;

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

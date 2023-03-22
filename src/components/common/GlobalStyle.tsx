import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @font-face {
    font-family: 'NanumSquareNeo';
    src: url('../../../static/fonts/NanumSquareNeoTTF-Variable.woff')
      format('truetype-variations');
    font-weight: 500;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`
const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

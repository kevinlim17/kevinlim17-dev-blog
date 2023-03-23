import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      We are native wherever it belongs to.
      <br /> © 2023 Designed by Seung Hyeon Lim, Powered by Gatsby.
    </FooterWrapper>
  )
}

export default Footer

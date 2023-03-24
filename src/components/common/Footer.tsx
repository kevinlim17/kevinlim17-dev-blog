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

const FontUsageFooterWrapper = styled.div`
  margin-top: 10px;
  color: #135220a8;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <i>
        <b>We are all native wherever it belongs to.</b>
      </i>
      <br /> © 2023 Designed by Seung Hyeon Lim, Powered by Gatsby.
      <br />{' '}
      <FontUsageFooterWrapper>
        <a href="https://campaign.naver.com/nanumsquare_neo/">
          {' '}
          This site uses NanumSquare Neo, producted by Naver Corp.
        </a>
      </FontUsageFooterWrapper>
    </FooterWrapper>
  )
}

export default Footer

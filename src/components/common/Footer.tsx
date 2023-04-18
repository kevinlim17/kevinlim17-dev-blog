import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background-color: rgba(2, 0, 36, 0.05);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const FontUsageFooterWrapper = styled.div`
  margin-top: 10px;
  color: #135220a8;

  @media (max-width: 768px) {
    font-size: 8px;
  }
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

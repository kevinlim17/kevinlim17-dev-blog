import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'

interface FooterProps {
  siteTitle?: string
  repository?: string
  year?: string | number
  email?: string
  github?: string
  linkedin?: string
  techStack?: string[]
  version?: string
  fontUsageUrl?: string
  fontUsageText?: string
  defaultExpanded?: boolean
}

interface FooterExpandedProps {
  isExpanded: boolean
}

const FooterWrapper = styled.footer`
  width: 90%;
  margin-left: 5%;
  background-color: #f8f8f8;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);
  border-right: 1.5px dashed rgba(2, 0, 36, 1);
  font-family: 'NanumSquareNeo', sans-serif;

  @media screen and (max-width: 1200px) {
    width: 95%;
    margin-left: 2.5%;
  }
`

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;
  background-color: rgba(250, 249, 246, 1);
  // border-top: 1.5px dashed rgba(2, 0, 36, 1);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

const SiteTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-family: 'NanumSquareNeoBold';
  color: rgba(2, 0, 36, 1);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ExpandButton = styled.button<FooterExpandedProps>`
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 5px;
  color: #666;
  transform: ${props => (props.isExpanded ? 'rotate(45deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;

  &:hover {
    color: #333;
  }
`

const FooterContent = styled.div<FooterExpandedProps>`
  max-height: ${props => (props.isExpanded ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background-color: rgba(250, 249, 246, 0.7);
`

const FooterInner = styled.div`
  padding: 30px 30px 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }
`

const InfoSection = styled.div`
  font-size: 0.8rem;
  line-height: 1.6;
  color: rgba(2, 0, 36, 0.5);
  border-top: 1px solid rgba(2, 0, 36, 1);
  border-left: 1px solid rgba(2, 0, 36, 1);
  padding: 1rem;
`

const InfoTitle = styled.h4`
  margin: 0 0 15px 0;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(2, 0, 36, 1);
`

const InfoList = styled.div`
  margin-bottom: 20px;
`

const InfoItem = styled.div`
  margin-bottom: 5px;

  strong {
    color: #333;
    margin-right: 10px;
  }
`

const CopyrightSection = styled.div`
  font-size: 12px;
  line-height: 1.6;
  color: rgba(2, 0, 36, 0.5);
  border-top: 1px solid rgba(2, 0, 36, 1);
  border-left: 1px solid rgba(2, 0, 36, 1);
  padding: 1rem;
`

const CopyrightText = styled.p`
  margin: 10px 0;
  line-height: 1.8;
`

const FontUsageLink = styled.a`
  color: #135220a8;
  text-decoration: none;
  font-size: 11px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const Footer: FunctionComponent<FooterProps> = function ({
  siteTitle = 'Soople.dev',
  repository = 'https://github.com/kevinlim17/kevinlim17-dev-blog',
  year = '2025. 09. 01.',
  // email = 'your-email@example.com',
  // github = 'github.com/yourname',
  // linkedin = 'linkedin.com/in/yourname',
  version = '1.1.0',
  fontUsageUrl = 'https://campaign.naver.com/nanumsquare_neo/',
  fontUsageText = 'This site uses NanumSquare Neo, produced by Naver Corp.',
  defaultExpanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <FooterWrapper>
      <FooterContent isExpanded={isExpanded}>
        <FooterInner>
          <InfoSection>
            <InfoTitle>About This Site</InfoTitle>
            <InfoList>
              <InfoItem>
                <strong>Repository :</strong>
                <a href={repository}>{repository}</a>
              </InfoItem>
              <InfoItem>
                <strong>Last Edited :</strong>
                {year}
              </InfoItem>
              <InfoItem>
                <strong>Version :</strong>
                {version}
              </InfoItem>
            </InfoList>
          </InfoSection>

          <CopyrightSection>
            <InfoTitle>Copyrights and Licences</InfoTitle>
            <CopyrightText>
              © 2023-2025 Seung Hyeon Lim. All rights reserved.
              <br />
              Designed by Seung Hyeon Lim, Powered by Gatsby.
            </CopyrightText>

            <CopyrightText>
              이 사이트의 모든 콘텐츠는 저작권법의 보호를 받으며, 무단 복제 및
              배포를 금지합니다. <br />
              사용된 오픈소스 라이브러리는 각각의 라이선스를 따릅니다.
            </CopyrightText>

            <FontUsageLink href={fontUsageUrl}>{fontUsageText}</FontUsageLink>
          </CopyrightSection>
        </FooterInner>
      </FooterContent>
      <FooterHeader onClick={toggleExpanded}>
        <SiteTitle>{siteTitle}</SiteTitle>
        <ExpandButton isExpanded={isExpanded}>+</ExpandButton>
      </FooterHeader>
    </FooterWrapper>
  )
}

export default Footer

import React, { FunctionComponent, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import {
  faCode,
  faAddressCard,
  faTree,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollEvent } from 'hooks/useScrollEvent'
import { toFit } from 'hooks/toFit'
import CustomToolTip from './ToolTip'
import { AvatarImage } from './AvatarImage'

type HeaderTitleProps = {
  titleText: string
}

const Wrapper = styled.div<{ isScroll: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  z-index: 4;
  position: fixed;
  padding: 0 5vw;

  border-top: 3px solid rgba(2, 0, 36, 1);
  border-bottom: ${({ isScroll }) => (isScroll ? '0' : '2px solid')};
  border-radius: 0;
  background-color: ${({ isScroll }) =>
    isScroll ? 'rgba(196, 196, 196, 0.5)' : 'rgba(250, 249, 246, 1)'};
  backdrop-filter: blur(20px);
  box-shadow: ${({ isScroll }) =>
    isScroll ? '3px 3px 4px 0 rgba(2, 0, 36, 0.2)' : '0'};

  @media screen and (max-width: 1200px) and (min-width: 769px) {
    padding: 0 5vw;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 70px;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  max-height: max-content;
  gap: 2px;
`

const Title = styled(Link)`
  font-size: 30px;
  font-family: 'NanumSquareNeoLight';
  color: rgba(2, 0, 36, 1);
  text-decoration: none;
  &:hover {
    color: #374151;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SectionItem = styled(Link)<{ description: string; isScroll: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid rgba(2, 0, 36, 1);
  border-radius: 0;
  background: rgba(255, 255, 255, 1);
  color: rgba(2, 0, 36, 1);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    background: #000;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`

const IconWrapper = styled.span`
  font-size: 14px;

  @media (max-width: 768px) {
    // margin-right: 4px;
    font-size: 12px;
  }
`

const Header: FunctionComponent<HeaderTitleProps> = function ({ titleText }) {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  const onScroll = useCallback(() => {
    const scrollTop = 7
    if (window.scrollY > scrollTop) setIsScroll(true)
    else setIsScroll(false)
  }, [])

  useScrollEvent(() => {
    return toFit(onScroll, {})()
  })

  return (
    <Wrapper isScroll={isScroll}>
      <LeftSection>
        <AvatarImage />
        <Title to="/">{titleText}</Title>
      </LeftSection>

      <RightSection>
        <CustomToolTip title="Developer's Space">
          <SectionItem
            to="/"
            description="Developer's Space"
            isScroll={isScroll}
          >
            <IconWrapper>
              <FontAwesomeIcon icon={faCode} />
            </IconWrapper>
          </SectionItem>
        </CustomToolTip>

        <CustomToolTip title="Monthly, Soople">
          <SectionItem to="/soople" description="Soople" isScroll={isScroll}>
            <IconWrapper>
              <FontAwesomeIcon icon={faTree} />
            </IconWrapper>
          </SectionItem>
        </CustomToolTip>

        <CustomToolTip title="Profile">
          <SectionItem to="/profile" description="Profile" isScroll={isScroll}>
            <IconWrapper>
              <FontAwesomeIcon icon={faAddressCard} />
            </IconWrapper>
          </SectionItem>
        </CustomToolTip>
      </RightSection>
    </Wrapper>
  )
}

export default Header

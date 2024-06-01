import React, { FunctionComponent, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { faCode, faAddressCard, faTree } from '@fortawesome/free-solid-svg-icons'
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
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 7.5vh;
  z-index: 4;
  position: fixed;
  padding: 0 14vw;

  border-radius: 0 0 7px 7px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  background-color: ${({ isScroll }) =>
    isScroll ? 'rgba(2, 0, 36, 1)' : 'rgba(2, 0, 36, 0.35)'};

  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`

const Title = styled(Link)`
  flex: none;
  margin-right: auto;
  font-size: 3.5vh;
  font-weight: 900;
  color: white;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 2.5vh;
  }
`

const SectionItem = styled(Link)<{ description: string; isScroll: boolean }>`
  display: grid;
  place-items: center;
  width: 4.5vh;
  height: 4.5vh;
  border-radius: 50%;
  margin: auto 1vw;
  font-size: 2vh;

  background: ${({ isScroll }) =>
    isScroll ? 'rgba(0, 255, 109, 1)' : 'rgba(2, 0, 36, 1)'};
  color: ${({ isScroll }) => (isScroll ? 'rgba(2, 0, 36, 1)' : 'white')};

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;

  &:hover {
    box-shadow: 0 0 100px rgba(255, 255, 255, 0.7);
    color: ${({ isScroll }) => (isScroll ? 'white' : 'rgba(0, 255, 109, 1)')};
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    font-size: 1rem;
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
      <AvatarImage />
      <Title to="/">{titleText}</Title>
      <CustomToolTip title="Developer's Space">
        <SectionItem to="/" description="Developer's Space" isScroll={isScroll}>
          <FontAwesomeIcon icon={faCode} />
        </SectionItem>
      </CustomToolTip>

      <CustomToolTip title="Monthly, Soople">
        <SectionItem
          to="/soople"
          description="Soople"
          isScroll={isScroll}
        >
          <FontAwesomeIcon icon={faTree} />
        </SectionItem>
      </CustomToolTip>

      <CustomToolTip title="Profile">
        <SectionItem to="/profile" description="Profile" isScroll={isScroll}>
          <FontAwesomeIcon icon={faAddressCard} />
        </SectionItem>
      </CustomToolTip>
    </Wrapper>
  )
}

export default Header

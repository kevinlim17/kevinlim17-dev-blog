import React, { FunctionComponent, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { faCode, faPen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollEvent } from 'hooks/useScrollEvent'
import { toFit } from 'hooks/toFit'

const Wrapper = styled.div<{ isScroll: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 7.5vh;
  z-index: 1;
  position: fixed;
  padding: 0 14vw;

  border-radius: 0 0 7px 7px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  background-color: ${({ isScroll }) =>
    isScroll ? 'rgba(2, 0, 36, 1)' : 'rgba(2, 0, 36, 0.2)'};

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
    font-size: 3vh;
  }
`

const SectionItem = styled(Link)<{ description: string }>`
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  margin: auto 1.2rem;
  background: rgba(0, 255, 109, 1);
  color: rgba(2, 0, 36, 1);
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;

  &:hover {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    margin: auto 0.7rem;
    font-size: 1rem;
  }
`

const Header: FunctionComponent = function () {
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
      <Title to="/">🧑🏻‍💻 kevinlim17.dev</Title>
      <SectionItem to="/" description="Developer's Space">
        <FontAwesomeIcon icon={faCode} />
      </SectionItem>
      <SectionItem to="/brunch_stories" description="Writer's Space">
        <FontAwesomeIcon icon={faPen} />
      </SectionItem>
      <SectionItem to="/profile" description="Profile">
        <FontAwesomeIcon icon={faAddressCard} />
      </SectionItem>
    </Wrapper>
  )
}

export default Header

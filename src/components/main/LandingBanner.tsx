import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Outer = styled.div`
  background-color: rgba(250, 249, 246, 1);
  width: 100%;
  padding: 8px 10vw 0;

  @media (max-width: 768px) {
    padding: 6px 5vw 0;
  }
`

const Badge = styled.span`
  background-color: #6b7b8c;
  color: rgba(250, 249, 246, 1);
  font-family: 'NanumSquareNeoHeavy', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  padding: 8px 16px;
  border-radius: 999px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`

const Title = styled.span`
  font-family: 'NanumSquareNeoHeavy', sans-serif;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  word-break: keep-all;

  @media (max-width: 768px) {
    order: 3;
    flex-basis: 100%;
    font-size: 1.4rem;
  }
`

const Sub = styled.span`
  font-family: 'NanumSquareNeo', sans-serif;
  font-size: 1rem;
  opacity: 0.75;
  word-break: keep-all;

  @media (max-width: 768px) {
    order: 4;
    flex-basis: 100%;
    font-size: 1rem;
    margin-top: -2px;
  }
`

const Circles = styled.span`
  position: relative;
  order: 2;
  width: 3.4rem;
  height: 3rem;
  margin-left: auto;
  flex-shrink: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 3px solid rgba(2, 0, 36, 1);
    border-radius: 50%;
  }

  &::before {
    top: 0;
    left: 0;
    width: 2.4rem;
    height: 2.4rem;
    background: #fff;
  }

  &::after {
    right: 0;
    bottom: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: #6b7b8c;
  }
`

const Banner = styled.a`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
  width: calc(80vw - 8px);
  padding: 1rem;
  border-left: 2px solid rgba(2, 0, 36, 1);
  background: #c5ddf7;
  color: rgba(2, 0, 36, 1);
  text-decoration: none;
  box-shadow: 8px 8px 0 0 #fff3a8;
  transition: 0.3s box-shadow, 0.3s transform;

  &:hover {
    transform: translate(-3px, -5px);
    box-shadow: 11px 13px 0 0 #fff3a8;
  }

  @media (max-width: 768px) {
    width: calc(90vw - 8px);
    padding: 1rem 5vw;
  }
`

const LandingBanner: FunctionComponent = () => (
  <Outer>
    <Banner
      href="https://activity.soople.site"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Badge>Activity</Badge>
      <Title>인공지능은 교육자의 꿈을 꾸는가</Title>
      <Sub>
        AI 시대, 위임과 책임 사이에서 고민하는 교사 분들을 찾습니다 (~ 10/31)
      </Sub>
      <Circles />
    </Banner>
  </Outer>
)

export default LandingBanner

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import TypeWriter from 'typewriter-effect'

const BoxAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0;}
  100% { opacity: 1; } 
`

const PersonalDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 4;

  width: 56%;
  height: 72vh;
  margin-left: 2%;
  padding: 3vw 2vw;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  animation-name: ${BoxAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 95%;
    height: auto;
    padding: 3vw;
  }

  @media (max-width: 768px) {
    padding: 4vw;
  }
`

const Slogan = styled.div`
  font-size: 3vh;
  font-weight: 800;
  line-height: 1.4;
  height: 8vh;

  color: rgba(2, 0, 36, 0.8);
  margin-bottom: 2.5vh;

  @media (max-width: 768px) {
    font-size: 2.3vh;
    margin: 1vh 0;
  }
`

const Border = styled.h1`
  font-size: 45px;
  border-bottom: 3px solid rgba(2, 0, 36, 0.1);
  width: 100%;

  margin: 0.5vh 0;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const SectionTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.4;

  width: 12vw;
  height: 100%
  padding-right: 1vw;

  color: rgba(2, 0, 36, 0.8);

  @media (max-width: 1200px) {
    width: 17vw;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const SectionDetail = styled.div`
  font-size: 2vh;
  font-weight: 700;
  line-height: 1.7;

  margin: 0.6rem 0;
  padding: 0 0.6vw;

  border-left: 3px solid rgba(2, 0, 36, 0.2);
  color: rgba(2, 0, 36, 0.7);

  a {
    font-weight: 900;
  }
  a:hover {
    font-weight: 900;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    border-left: 3px solid rgba(2, 0, 36, 0.2);
    padding: 1vw 3vw;
  }
`

const PersonalDescription: FunctionComponent = function () {
  return (
    <PersonalDescriptionWrapper>
      <Slogan>
        <TypeWriter
          onInit={typewriter => {
            typewriter
              .pauseFor(3000)
              .typeString('더 나은 공동체를 위해, <br />')
              .pauseFor(1000)
              .typeString('코드를 쓰며 이야기를 개발합니다.')
              .start()
          }}
        />
      </Slogan>
      <Border />

      <SectionWrapper>
        <SectionTitle>💬 Language</SectionTitle>
        <SectionDetail>
          • Java / Kotlin <br />
          • Swift <br />
          • TypeScript <br />
          • Python <br />
        </SectionDetail>
      </SectionWrapper>
      <Border />

      <SectionWrapper>
        <SectionTitle>
          🧭 Interested <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In...
        </SectionTitle>
        <SectionDetail>
          • Android / iOS Native <br />
          • On-Device Deep Learning <br />
          • Architecture Pattern <br />
        </SectionDetail>
      </SectionWrapper>
      <Border />

      <SectionWrapper>
        <SectionTitle> 👤 Services</SectionTitle>
        <SectionDetail>
          • Vice President of <a href="https://github.com/Dcom-KHU">D.Com</a>,{' '}
          <br />
          &nbsp;&nbsp;&nbsp;Academic Club of CSE, <br />
          &nbsp;&nbsp;&nbsp;Kyung-Hee Univ. (2022) <br />• Android Director of
          3rd KHU <a href="https://www.makeus.in/umc">UMC</a>.
          <br />
        </SectionDetail>
      </SectionWrapper>
      <Border />
    </PersonalDescriptionWrapper>
  )
}

export default PersonalDescription

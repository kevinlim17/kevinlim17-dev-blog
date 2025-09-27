import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import TypeWriter from 'typewriter-effect'
import { GradientAnimation } from 'components/lib/GradientAnimation'
import { keyframes } from '@emotion/react'

type WriterGroundProps = {
  children: ReactNode
}

const Background = styled.div`
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.3) 0%,
    rgba(196, 196, 196, 1) 30%,
    rgba(250, 249, 246, 1) 100%
  );
  animation: ${GradientAnimation} 15s ease-out infinite;
  background-size: 400%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 70vw;
  height: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 0 20px;
  }
`

const PaperShapedAnimation = keyframes`
  0% { margin-left: -10vh; opacity: 0; }
  50% { margin-left: -7vh; opacity: 0;}
  100% { margin-left: 0px; opacity: 1; }
`

const PaperShapedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70vw;
  height: auto;
  padding: 3rem;
  z-index: 2;
  margin-top: 7.5rem;

  background: rgba(250, 249, 246, 1);
  border: 2px solid rgba(2, 0, 36, 1);
  border-right: 2px dashed;
  border-bottom: 0px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);

  position: relative;

  animation-name: ${PaperShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 85vw;
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding: 2rem;
  }
`

const WriterMotto = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.4;
  color: #1f2937;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`

const WriterInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  min-height: 8rem;
  width: 100%;
  color: rgba(2, 0, 36, 1);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    min-height: 6rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

const WriterGround: FunctionComponent<WriterGroundProps> = function ({
  children,
}) {
  return (
    <Background>
      <Wrapper>
        <PaperShapedWrapper>
          <WriterMotto>🎯&nbsp;As a writer...</WriterMotto>
          <WriterInfo>
            <TypeWriter
              options={{
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .pauseFor(2000)
                  .typeString(
                    '앱을 개발하고, 글을 쓰며, 예술을 향유하는, <br />',
                  )
                  .pauseFor(1500)
                  .typeString(
                    '그렇게 다양한 색이 삶에 덧입혀지기를 소망하는 사람입니다.',
                  )
                  .deleteAll()
                  .pauseFor(500)
                  .typeString('컴퓨터공학을 전공으로 삼고, <br />')
                  .pauseFor(1000)
                  .typeString(
                    '다양한 학문의 세계를 연결하는 데 관심이 많은 한 명의 시민으로서,',
                  )
                  .deleteAll()
                  .pauseFor(500)
                  .typeString(
                    '과학과 예술, 공학과 사회, 글쓰기와 프로그래밍 사이의 <br />',
                  )
                  .pauseFor(1500)
                  .typeString('관계성을 탐구하는 데 관심이 많습니다.')
                  .deleteAll()
                  .pauseFor(1000)
                  .start()
              }}
            />
          </WriterInfo>
          {children}
        </PaperShapedWrapper>
      </Wrapper>
    </Background>
  )
}

export default WriterGround

import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { GradientAnimation } from 'components/lib/GradientAnimation'
import TypeWriter from 'typewriter-effect'
import { ContainerShapedAnimation } from 'components/lib/ContainerShapedAnimation'

type WriterGroundProps = {
  children: ReactNode
}

const Background = styled.div`
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(131, 58, 2, 1) 70%,
    rgba(255, 209, 0, 1) 100%
  );
  color: #ffffff;
  animation: ${GradientAnimation} 15s ease-out infinite;
  background-size: 400%;

  border-radius: 0 0 1% 1%;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
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
    //height: 300px;
    padding: 0 20px;
  }
`

const PaperShapedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70vw;
  height: 150%;
  padding: 0 3vw 3vh 3vw;
  z-index: 2;
  margin-top: 15vh;

  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(2, 0, 36, 0.4);
  border-bottom: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  animation-name: ${ContainerShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 94vw;
  }
`

const WriterMotto = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.4;
  margin-top: 5vh;

  @media (max-width: 768px) {
    padding-left: 2vw;
  }
`

const WriterInfo = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.4;
  height: 15vh;
  width: 100%;

  margin-top: 3vh;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
    padding-left: 2.5vw;
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

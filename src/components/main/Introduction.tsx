import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../common/ProfileImage'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { keyframes } from '@emotion/react'
import TypeWriter from 'typewriter-effect'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const GradientAnimation = keyframes`
  0% {
		background-position: 0% 25%;
	}
	50% {
		background-position: 50% 25%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Background = styled.div`
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 131, 28, 1) 70%,
    rgba(0, 255, 109, 1) 100%
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
  height: 60vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90vw;
    //height: 300px;
    padding: 0 20px;
  }
`

const PhoneShapedAnimation = keyframes`
  0% { margin-bottom: -10vh; opacity: 0; }
  50% { margin-bottom: -7vh; opacity: 0;}
  100% { margin-bottom: 0px; opacity: 1; }
`

const PhoneShapedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 70vw;
  height: 45vh;
  padding: 0 3vw 3vh 3vw;
  z-index: 2;
  //margin-bottom: -10px;

  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(2, 0, 36, 0.4);
  border-bottom: 0px;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  animation-name: ${PhoneShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`

const PhoneShapeCameraIcon = styled.div`
  flex: none;
  align-self: center;
  margin-top: 1.5vh;

  font-size: 3vh;
  color: rgba(2, 0, 36, 0.8);
  box-shadow: 0 7px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5vh;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  margin-left: 2.5vw;
  padding-left: 2.5vw;
  padding-bottom: 1vh;
  border-left: 3px solid rgba(2, 0, 36, 0.3);
`

const SubTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 3vh;

  height: 8vh;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const Title = styled.div`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.4;

  padding-top: 3vh;
  margin-bottom: 3vh;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const TitleBorder = styled.h1`
  font-size: 45px;
  border-bottom: 3px solid rgba(184, 184, 184, 0.5);
  padding: 1px 23vw;

  @media (max-width: 1200px) {
    padding: 1px 27vw;
  }

  @media (max-width: 768px) {
    padding: 1px 30vw;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <PhoneShapedWrapper>
          <PhoneShapeCameraIcon>
            <FontAwesomeIcon icon={faCircleDot} />
          </PhoneShapeCameraIcon>

          <ContentsWrapper>
            <ProfileImage profileImage={profileImage} />

            <TextWrapper>
              <SubTitle>
                <TypeWriter
                  options={{
                    loop: true,
                  }}
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('Developing Stories <br />')
                      .pauseFor(1000)
                      .typeString('for Better Community.')
                      .deleteAll()
                      .pauseFor(500)
                      .typeString('Writing Codes <br />')
                      .pauseFor(1000)
                      .typeString('for Open Source Contribution.')
                      .deleteAll()
                      .pauseFor(500)
                      .typeString('Implement Applications <br />')
                      .pauseFor(1000)
                      .typeString('for Barrier-Free Society.')
                      .deleteAll()
                      .pauseFor(500)
                      .start()
                  }}
                />
              </SubTitle>
              <TitleBorder />
              <Title>
                kevinlim17, <br />
                Android Native Developer.
              </Title>
            </TextWrapper>
          </ContentsWrapper>
        </PhoneShapedWrapper>
      </Wrapper>
    </Background>
  )
}

export default Introduction

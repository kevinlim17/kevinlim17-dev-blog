import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../common/ProfileImage'
import { keyframes } from '@emotion/react'
import TypeWriter from 'typewriter-effect'
import { GradientAnimation } from 'components/lib/GradientAnimation'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  color: #1f2937;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.3) 0%,
    rgba(196, 196, 196, 1) 30%,
    rgba(250, 249, 246, 1) 100%
  );
  animation: ${GradientAnimation} 15s ease-out infinite;
  background-size: 400%;
`

const PhoneShapedAnimation = keyframes`
  0% { margin-bottom: -10vh; opacity: 0; }
  50% { margin-bottom: -7vh; opacity: 0;}
  100% { margin-bottom: 0px; opacity: 1; }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  width: 80vw;
  margin: 0 auto;
  padding-top: 100px;
  // padding: 80px 0;

  @media (max-width: 768px) {
    width: 90vw;
    // padding: 60px 20px;
  }
`

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(250, 249, 246, 1);
  border: 3px dashed rgba(2, 0, 36, 1);
  border-right: 1px dashed rgba(2, 0, 36, 1);
  border-bottom: 0;
  border-radius: 0;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin-top: 3rem;
  transition: all 0.5s ease;

  animation-name: ${PhoneShapedAnimation};
  animation-duration: 2.5s;

  &:hover {
    transform: translateY(-2px);
    transition: all 0.5s ease;
    box-shadow: 2px 2px 0 0 rgba(196, 196, 196, 0.7);
    color: rgba(196, 196, 196, 1);
  }
`

const CardHeader = styled.div`
  background: white;
  padding: 30px;
  border-bottom: 2px solid rgba(196, 196, 196, 1);
  position: relative;
  width: 100%;
`

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: rgba(2, 0, 36, 1);
  margin: 0;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const ContentSection = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`

const TypeWriterSection = styled.div`
  background: rgba(196, 196, 196, 0.1);
  padding: 12px;
  // border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin: 10px 0;
`

const SubTitle = styled.div`
  font-size: 18px;
  font-family: 'NanumSquareNeoLight';
  line-height: 1.5;
  color: rgba(2, 0, 36, 1);
  min-height: 60px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-top: 1.5px solid rgba(2, 0, 36, 0.5);
`

const AuthorSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`

const TagSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const skillColors = [
  '#00bcd4', // 청록색
  '#607d8b', // 블루그레이
  '#00796b', // 진한 청록색
  '#e91e63', // 핑크
  '#ff9800', // 오렌지
  '#4caf50', // 녹색
]

const TagItem = styled.div<{ colorIndex: number }>`
  padding: 8px 16px;
  font-size: 16px;
  background-color: rgba(2, 0, 36, 0.2);
  color: rgba(2, 0, 36, 0.9);
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    transition: all 0.2s ease;
    color: rgba(250, 249, 246, 1);
    box-shadow: 3px 6px 0 0 rgba(196, 196, 196, 0.7);
    background: ${({ colorIndex }) =>
      skillColors[colorIndex % skillColors.length]};
  }

  a {
    font-weight: 900;
    font-family: 'NanumSquareNeo';
    transition: all 0.2s ease;

    &:hover {
      font-family: 'NanumSquareNeoHeavy';
      transition: all 0.2s ease;
    }
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const skills = [
  'Android',
  'Kotlin',
  'Compiler',
  'Programming Language',
  'LLVM',
  'C++',
  'OCaml',
  'Scala',
  'TypeScript',
  'Accessibility',
  'AI-Ethics',
  'STS',
  'Cybernetics',
]

const skillLinks = [
  'https://developer.android.com',
  'https://kotlinlang.org',
  'https://en.wikipedia.org/wiki/Compiler',
  'https://www.plai.org/',
  'https://llvm.org',
  'https://isocpp.org',
  'https://ocaml.org',
  'https://scala-lang.org',
  'https://www.typescriptlang.org',
  'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=259656737',
  'https://ai-ethics.kr',
  '',
  'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=312728401',
]

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ContentCard>
          <CardHeader>
            <MainTitle>Kevin Lim,</MainTitle>
            <MainTitle>
              Android Native Developer or Compiler Engineer?
            </MainTitle>
          </CardHeader>
          <ContentSection>
            <TypeWriterSection>
              <SubTitle>
                <TypeWriter
                  options={{
                    loop: true,
                  }}
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(2000)
                      .typeString(
                        '우리는 남에게 자기 이야기를 들려주려 애쓰며 평생을 보낸다. <br />',
                      )
                      .pauseFor(1000)
                      .typeString('그것은 기억의 본질이다.')
                      .deleteAll()
                      .pauseFor(500)
                      .typeString(
                        '그렇게 우리는 이 무감하고 우연적인 우주를 견디며 살아간다.  <br />',
                      )
                      .pauseFor(1000)
                      .typeString(
                        '그러한 습관에 ‘이야기 짓기의 오류’라는 이름이 붙었다고 해서 ',
                      )
                      .deleteAll()
                      .pauseFor(500)
                      .typeString(
                        '그것이 진실의 일면에 닿지 않는 것은 아니다. <br />',
                      )
                      .pauseFor(1000)
                      .typeString(
                        '어떤 이야기는 속에 있는 은유를 좀 더 선명하게 구현할 뿐이다.',
                      )
                      .deleteAll()
                      .pauseFor(500)
                      .start()
                  }}
                />
              </SubTitle>
            </TypeWriterSection>
            <MetaInfo>
              <AuthorSection>
                <ProfileImage profileImage={profileImage} />
                <TagSection>
                  {skills.map((skill, index) => (
                    <TagItem key={skill} colorIndex={index}>
                      <a href={skillLinks[index]}>{skill}</a>
                    </TagItem>
                  ))}
                </TagSection>
              </AuthorSection>
            </MetaInfo>
          </ContentSection>
        </ContentCard>
      </Wrapper>
    </Background>
  )
}

export default Introduction

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 131, 28, 1) 70%,
    rgba(0, 255, 109, 1) 100%
  );
  color: #ffffff;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 10px;
  font-size: 35px;
  font-weight: 900;
`

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <SubTitle>
            Do Things For Better Community, Writing Codes & Developing Stories.
          </SubTitle>
          <Title>kevinlim17, Android Native Developer.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import {
  faEnvelope,
  faHashtag,
  faBuildingColumns,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { keyframes } from '@emotion/react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/common/ProfileImage'

type PersonalInfoProps = {
  profileImage: IGatsbyImageData
}

const BoxAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0;}
  100% { opacity: 1; } 
`

const PersonalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 4;

  width: 35%;
  height: 72vh;
  margin: 0 0 0 1.5vw;
  padding: 3vw 2vw;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  animation-name: ${BoxAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    flex-direction: row;

    width: 95%;
    height: auto;

    margin-bottom: 1.5vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const PersonalInfoNameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    margin-top: 1vh;
    margin-left: 2vw;
    margin-right: 1vw;
    padding-right: 1vw;

    width: 25%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    align-items: center;

    margin: 0 0 0 0;
  }
`

const PersonalInfoName = styled.div`
  font-size: 1.7rem;
  font-family: 'NanumSquareNeoHeavy';
  line-height: 1.4;

  color: rgba(2, 0, 36, 0.8);

  @media (max-width: 1200px) {
    width: 20%;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    width: auto;
    margin-bottom: 0.5rem;
  }
`

const PersonalInfoNickname = styled.div`
  font-size: 1.4rem;
  font-family: 'NanumSquareNeoBold';
  line-height: 1.4;
  margin-top: 0.1rem;

  color: rgba(95, 95, 95, 1);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 1.1rem;

    padding: 0.5vh 20vw;
    border-bottom: 1px solid rgba(2, 0, 36, 0.1);
  }
`

const PersonalInfoBorder = styled.h1`
  font-size: 45px;
  border-bottom: 3px solid rgba(2, 0, 36, 0.1);
  width: 100%;

  margin: 2vh 0 1vh 0;

  @media (max-width: 1200px) {
    display: none;
  }
`

const PersonalInfoContact = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  grid-gap: 0.2rem;
  max-width: 100%;
  place-items: start;

  margin-top: 1vh;

  @media (max-width: 1200px) {
    border-left: 3px solid rgba(2, 0, 36, 0.1);
    padding-left: 1vw;
  }

  @media (max-width: 768px) {
    border-left: 0px solid rgba(2, 0, 36, 0.1);
    padding-left: 0;
    margin: 4vh 0;
  }
`

const PersonalInfoContactIcon = styled.div`
  display: grid;
  place-items: center;
  width: 4vh;
  height: 4vh;

  border-radius: 50%;
  background: rgba(0, 255, 109, 0.8);
  box-shadow: 0 0 7px 0 rgba(2, 0, 36, 0.8);

  font-size: 2.5vh;
  margin: 0.3rem 0.4vw 0.3rem 0.1rem;
  color: rgba(2, 0, 36, 1);

  @media (max-width: 768px) {
    width: 2.5vh;
    height: 2.5vh;
    font-size: 1.6vh;

    margin: 0.4rem 0rem 0.3rem 0.1rem;
  }
`

const PersonalInfoContactText = styled.div`
  font-size: 2.25vh;
  font-family: 'NanumSquareNeoExtraBold';
  line-height: 1.2;
  margin: 0.6rem 0;

  padding: 0 0.6vw;

  color: rgba(2, 0, 36, 0.7);
  border-left: 3px solid rgba(2, 0, 36, 0.3);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0.4rem 0;
    padding: 0rem 0.4rem;
  }
`

const PersonalInfo: FunctionComponent<PersonalInfoProps> = function ({
  profileImage,
}) {
  return (
    <PersonalInfoBox>
      <ProfileImage profileImage={profileImage} />

      <PersonalInfoNameWrapper>
        <PersonalInfoName>Seung Hyeon Lim</PersonalInfoName>
        <PersonalInfoNickname>
          <a href="https://github.com/kevinlim17">🧑🏻‍💻kevinlim17 </a>
        </PersonalInfoNickname>
      </PersonalInfoNameWrapper>

      <PersonalInfoBorder />

      <PersonalInfoContact>
        <PersonalInfoContactIcon>
          <FontAwesomeIcon icon={faBuildingColumns} />
        </PersonalInfoContactIcon>
        <PersonalInfoContactText>
          <a href="https://khu.ac.kr">Kyung-Hee University </a>
        </PersonalInfoContactText>

        <PersonalInfoContactIcon>
          <FontAwesomeIcon icon={faEnvelope} />
        </PersonalInfoContactIcon>
        <PersonalInfoContactText>
          <a href="mailto: kevinlsh17@khu.ac.kr">kevinlsh17@khu.ac.kr</a>
        </PersonalInfoContactText>

        <PersonalInfoContactIcon>
          <FontAwesomeIcon icon={faHashtag} />
        </PersonalInfoContactIcon>
        <PersonalInfoContactText>
          <a href="https://instagram.com/kevin_lsh17">Instagram</a>
        </PersonalInfoContactText>

        <PersonalInfoContactIcon>
          <FontAwesomeIcon icon={faPen} />
        </PersonalInfoContactIcon>
        <PersonalInfoContactText>
          <a href="https://brunch.co.kr/@kevinlim17">Brunch Story</a>
        </PersonalInfoContactText>
      </PersonalInfoContact>
    </PersonalInfoBox>
  )
}

export default PersonalInfo

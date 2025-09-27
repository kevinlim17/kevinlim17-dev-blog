import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import {
  faEnvelope,
  faHashtag,
  faBuildingColumns,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/common/ProfileImage'

type PersonalInfoProps = {
  profileImage: IGatsbyImageData
}

const PersonalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 10px;

  background: white;
  border-right: 1px dashed rgba(2, 0, 36, 1);

  @media (max-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    gap: 1rem;
    border-right: 0;
    border-bottom: 1px dashed rgba(2, 0, 36, 1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;
    padding: 5px;
    border-right: 0;
    border-bottom: 1px dashed rgba(2, 0, 36, 1);
  }
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    margin-bottom: 0;
    flex-shrink: 0;
    border-right: 1px dashed rgba(2, 0, 36, 1);
    padding-right: 1.5rem;
  }

  @media (max-width: 768px) {
    // margin-bottom: 0.5rem;
    width: 100%;
    align-items: flex-start;
    border: 0;
  }
`

const PersonalInfoNameWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    text-align: left;
  }
`

const PersonalInfoName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const PersonalInfoNickname = styled.div`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;

  a {
    color: #4f46e5;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #3730a3;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 1rem;
  }
`

const ContactSection = styled.div`
  flex: 1;

  @media (max-width: 1199px) {
    flex: 1;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;

  @media (max-width: 768px) {
    display: none;
  }
`

const PersonalInfoContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  @media (max-width: 1199px) {
    padding: 0.2rem;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.1rem;
    gap: 0.6rem;
  }
`

const PersonalInfoContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  background: #f3f4f6;
  border: 1px solid #d1d5db;

  font-size: 1rem;
  color: #4b5563;
  flex-shrink: 0;

  @media (max-width: 1199px) {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.9rem;
  }
`

const PersonalInfoContactText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #374151;
  line-height: 1.4;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #4f46e5;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const PersonalInfo: FunctionComponent<PersonalInfoProps> = function ({
  profileImage,
}) {
  return (
    <PersonalInfoBox>
      <ProfileSection>
        <ProfileImage profileImage={profileImage} />
        <PersonalInfoNameWrapper>
          <PersonalInfoName>Seung Hyeon Lim</PersonalInfoName>
          <PersonalInfoNickname>
            <a href="https://github.com/kevinlim17">🧑🏻‍💻 kevinlim17</a>
          </PersonalInfoNickname>
        </PersonalInfoNameWrapper>
      </ProfileSection>

      <ContactSection>
        <SectionTitle>Contact</SectionTitle>
        <PersonalInfoContact>
          <ContactItem>
            <PersonalInfoContactIcon>
              <FontAwesomeIcon icon={faBuildingColumns} />
            </PersonalInfoContactIcon>
            <PersonalInfoContactText>
              <a href="https://khu.ac.kr">Kyung-Hee University</a>
            </PersonalInfoContactText>
          </ContactItem>

          <ContactItem>
            <PersonalInfoContactIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </PersonalInfoContactIcon>
            <PersonalInfoContactText>
              <a href="mailto:kevinlsh17@khu.ac.kr">kevinlsh17@khu.ac.kr</a>
            </PersonalInfoContactText>
          </ContactItem>

          <ContactItem>
            <PersonalInfoContactIcon>
              <FontAwesomeIcon icon={faHashtag} />
            </PersonalInfoContactIcon>
            <PersonalInfoContactText>
              <a href="https://instagram.com/kevin_lsh17">Instagram</a>
            </PersonalInfoContactText>
          </ContactItem>

          <ContactItem>
            <PersonalInfoContactIcon>
              <FontAwesomeIcon icon={faPen} />
            </PersonalInfoContactIcon>
            <PersonalInfoContactText>
              <a href="https://brunch.co.kr/@kevinlim17">Brunch Story</a>
            </PersonalInfoContactText>
          </ContactItem>
        </PersonalInfoContact>
      </ContactSection>
    </PersonalInfoBox>
  )
}

export default PersonalInfo

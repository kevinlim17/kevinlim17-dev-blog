import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PersonalInfo from './PersonalInfo'
import PersonalDescription from './PersonalDescription'
import { ContainerShapedAnimation } from 'components/lib/ContainerShapedAnimation'

type TabletContainerProps = {
  profileImage: IGatsbyImageData
}

const TabletShapedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  width: 70vw;
  min-height: 85vh;
  padding: 0;
  z-index: 3;
  margin: 5rem 1vh 0;

  background: white;
  border: 2px solid rgba(2, 0, 36, 1);
  border-right: 2px dashed;
  border-bottom: 0;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  animation-name: ${ContainerShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 85vw;
    // min-height: 70vh;
    margin-top: 8vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 60vh;
    margin-top: 12vh;
  }
`

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: white;
  border-bottom: 2px solid #000;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`

const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const StatusLabel = styled.div`
  background: #000;
  color: white;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: 12px;
  }
`

const PhoneShapeCameraIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  font-size: 16px;
  color: #6b7280;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`

const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

const ContentSection = styled.div`
  padding: 20px 10px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const MetaFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #f8f9fa;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 14px;
    color: #6b7280;

    &:first-of-type {
      font-weight: 600;
      color: #1f2937;
    }
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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
  padding: 4px 12px;
  background: ${({ colorIndex }) =>
    skillColors[colorIndex % skillColors.length]};
  font-size: 12px;
  font-weight: 600;
  color: white;
  border: 1px solid #000;
`

const skills = ['LLVM', 'Android', 'Web']

const TabletShapeContainer: FunctionComponent<TabletContainerProps> =
  function ({ profileImage }) {
    return (
      <TabletShapedWrapper>
        <ContainerHeader>
          <HeaderTitle>Profile</HeaderTitle>
          <StatusLabel>프로필</StatusLabel>
          <PhoneShapeCameraIcon>
            <FontAwesomeIcon icon={faCircleDot} />
          </PhoneShapeCameraIcon>
        </ContainerHeader>

        <ContainerContent>
          <ContentSection>
            <PersonalInfo profileImage={profileImage} />
          </ContentSection>

          <ContentSection>
            <PersonalDescription></PersonalDescription>
          </ContentSection>
        </ContainerContent>

        <MetaFooter>
          <AuthorInfo>
            <span>kevinlim17</span>
            <span>Android Native Developer</span>
          </AuthorInfo>

          <TagGroup>
            {skills.map((skill, index) => (
              <TagItem key={skill} colorIndex={index}>
                {skill}
              </TagItem>
            ))}
          </TagGroup>
        </MetaFooter>
      </TabletShapedWrapper>
    )
  }

export default TabletShapeContainer

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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 70vw;
  height: 80vh;
  padding: 3vh 1.5vw;
  z-index: 3;
  margin-bottom: 6vh;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  animation-name: ${ContainerShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    flex-direction: column;

    width: 70vw;
    height: 80%;

    margin-top: 12vh;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

const PhoneShapeCameraIcon = styled.div`
  flex: none;
  align-self: center;
  margin: 1vh;

  font-size: 3vh;
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  @media (max-width: 1200px) {
    margin: 0vh 1vh 2vh 1vh;
  }

  @media (max-width: 768px) {
    margin: 0vh 1vh 4vh 1vh;
  }
`

const TabletShapeContainer: FunctionComponent<TabletContainerProps> =
  function ({ profileImage }) {
    return (
      <TabletShapedWrapper>
        <PhoneShapeCameraIcon>
          <FontAwesomeIcon icon={faCircleDot} />
        </PhoneShapeCameraIcon>

        <PersonalInfo profileImage={profileImage} />

        <PersonalDescription></PersonalDescription>
      </TabletShapedWrapper>
    )
  }

export default TabletShapeContainer

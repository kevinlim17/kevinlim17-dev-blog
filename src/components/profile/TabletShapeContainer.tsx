import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PersonalInfo from './PersonalInfo'
import PersonalDescription from './PersonalDescription'

type TabletContainerProps = {
  profileImage: IGatsbyImageData
}

const TabletShapedAnimation = keyframes`
  0% { margin-bottom: -10vh; opacity: 0; }
  50% { margin-bottom: -7vh; opacity: 0;}
  100% { margin-bottom: 6vh; opacity: 1; }
`

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

  animation-name: ${TabletShapedAnimation};
  animation-duration: 2.5s;

  @media (max-width: 1200px) {
    width: 90vw;
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

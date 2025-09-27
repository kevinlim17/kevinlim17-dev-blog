import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

/** Dummy Data Link
const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/86971052?s=400&u=71459e5c8a82fa3440c7c7f4d254d58afc204959&v=4'
*/

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 14vh;
  height: 14vh;
  margin-bottom: 30px;
  //border-radius: 80%;

  @media (max-width: 1200px) {
    width: 12vw;
    height: 12vw;
  }

  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;

    margin-top: 1vh;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage

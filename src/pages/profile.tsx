import React, { FunctionComponent } from 'react'
import Template from 'components/common/Template'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { GradientAnimation } from 'components/lib/GradientAnimation'
import TabletShapedContainer from 'components/profile/TabletShapeContainer'

type ProfileProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;

  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.3) 0%,
    rgba(196, 196, 196, 1) 30%,
    rgba(250, 249, 246, 1) 100%
  );
  animation: ${GradientAnimation} 15s ease-out infinite;
  background-size: 400%;

  @media (max-width: 1200px) {
    height: 150%;
  }
`

const ProfilePage: FunctionComponent<ProfileProps> = function ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  return (
    <Template headerTitle="&nbsp;kevinlim17.md">
      <ProfilePageWrapper>
        <TabletShapedContainer profileImage={gatsbyImageData} />
      </ProfilePageWrapper>
    </Template>
  )
}

export default ProfilePage

export const getProfileImage = graphql`
  query getProfileImage {
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 480, height: 480)
      }
    }
  }
`

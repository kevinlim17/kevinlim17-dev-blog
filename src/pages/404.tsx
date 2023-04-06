import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/common/GlobalStyle'
import {
  faHouse,
  faAddressCard,
  faCircleDot,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from 'components/common/Footer'

const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -100px;
`

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 131, 28, 1) 70%,
    rgba(0, 255, 109, 1) 100%
  );
`

const NotFoundDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  width: 42vh;
  background: rgba(253, 253, 253, 0.5);
  border: 10px solid rgba(2, 0, 36, 0.8);
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

const NotFoundDescriptionCameraIcon = styled.div`
  flex: none;
  align-self: center;
  margin-top: 1.5vh;
  color: rgba(2, 0, 36, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
`

const NotFoundDescriptionText = styled.div`
  font-size: 100px;
  font-weight: 800;
  text-align: center;
  margin-top: 20vh;
  color: rgba(2, 0, 36, 0.8);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`

const NotFoundDescriptionInfo = styled.div`
  margin-top: 3vh;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  color: rgba(2, 0, 36, 0.8);

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

const LinkButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  margin-top: 14vh;
  border-top: 1px solid rgba(2, 0, 36, 0.8);
`

const LinkIconButton = styled(Link)`
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: auto 15px;
  background: rgba(0, 255, 109, 1);
  color: rgba(2, 0, 36, 1);
  font-size: 27px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 23px;
  }
`

const NonFoundPage: FunctionComponent = function () {
  return (
    <NotFoundPageContainer>
      <NotFoundPageWrapper>
        <GlobalStyle />
        <NotFoundDescriptionWrapper>
          <NotFoundDescriptionCameraIcon>
            <FontAwesomeIcon icon={faCircleDot} />
          </NotFoundDescriptionCameraIcon>
          <NotFoundDescriptionText>404</NotFoundDescriptionText>
          <NotFoundDescriptionInfo>
            찾을 수 없는 페이지입니다. <br /> 다른 콘텐츠를 보시려면 👇
          </NotFoundDescriptionInfo>
          <LinkButtonWrapper>
            <LinkIconButton to="/">
              <FontAwesomeIcon icon={faHouse} />
            </LinkIconButton>
            <LinkIconButton to="/brunch_stories">
              <FontAwesomeIcon icon={faAddressCard} />
            </LinkIconButton>
            <LinkIconButton to="/profile">
              <FontAwesomeIcon icon={faPen} />
            </LinkIconButton>
          </LinkButtonWrapper>
        </NotFoundDescriptionWrapper>
      </NotFoundPageWrapper>
      <Footer />
    </NotFoundPageContainer>
  )
}

export default NonFoundPage

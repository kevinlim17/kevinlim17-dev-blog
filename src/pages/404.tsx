import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Template from 'components/common/Template'
import {
  faHouse,
  faAddressCard,
  faCircleDot,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomToolTip from 'components/common/ToolTip'

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 4rem 5vw;
  background-color: rgba(250, 249, 246, 1);

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`

const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 4rem 3rem;
  background: rgba(250, 249, 246, 1);
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);
  box-shadow: 8px 16px 0 0 rgba(2, 0, 36, 0.15);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: 2rem;
  border-radius: 50%;
  background: rgba(2, 0, 36, 1);
  color: rgba(250, 249, 246, 1);
  font-size: 2rem;
`

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  font-family: 'NanumSquareNeoExtraBold';
  color: rgba(2, 0, 36, 1);
  margin: 0 0 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(2, 0, 36, 0.7);
  text-align: center;
  line-height: 1.6;
  margin: 0 0 3rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(2, 0, 36, 0.1);
  margin: 2rem 0;
`

const NavigationTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'NanumSquareNeoBold';
  color: rgba(2, 0, 36, 0.6);
  text-align: center;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const LinkButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`

const LinkIconButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 120px;
  height: 120px;
  padding: 1rem;
  background: rgba(250, 249, 246, 1);
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);
  color: rgba(2, 0, 36, 1);
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 16px 0 0 rgba(2, 0, 36, 0.3);
    background-color: rgba(2, 0, 36, 1);
    color: rgba(250, 249, 246, 1);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 1.5rem;
  }
`

const NonFoundPage: FunctionComponent = function () {
  return (
    <Template headerTitle="&nbsp;404 Not Found">
      <NotFoundPageWrapper>
        <NotFoundCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faCircleDot} />
          </IconWrapper>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>
            페이지를 찾을 수 없습니다.
            <br />
            아래 링크를 통해 다른 페이지로 이동하세요.
          </ErrorMessage>
          <Divider />
          <NavigationTitle>Go to</NavigationTitle>
          <LinkButtonWrapper>
            <CustomToolTip title="Developer's Space" placement="top">
              <LinkIconButton to="/">
                <FontAwesomeIcon icon={faHouse} />
              </LinkIconButton>
            </CustomToolTip>

            <CustomToolTip title="Writer's Space" placement="top">
              <LinkIconButton to="/soople">
                <FontAwesomeIcon icon={faPen} />
              </LinkIconButton>
            </CustomToolTip>

            <CustomToolTip title="Profile" placement="top">
              <LinkIconButton to="/profile">
                <FontAwesomeIcon icon={faAddressCard} />
              </LinkIconButton>
            </CustomToolTip>
          </LinkButtonWrapper>
        </NotFoundCard>
      </NotFoundPageWrapper>
    </Template>
  )
}

export default NonFoundPage

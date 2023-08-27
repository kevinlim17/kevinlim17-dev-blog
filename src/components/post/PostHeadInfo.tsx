import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export type PostHeadInfoProps = {
  title: string
  summary: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100%;
  margin: 0 auto;
  padding: 12vh 0 30px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 10vh 5vw 2vh;
  }
`

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 255, 109, 1);
  color: rgba(2, 0, 36, 1);
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 17px;
  font-weight: 700;
  color: rgba(184, 184, 184, 1);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Border = styled.h1`
  font-size: 45px;
  text-align: center;
  border-bottom: 0.5px solid rgba(184, 184, 184, 1);
  margin: 0px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const PostData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 700;
`

const PostCategoryItem = styled.div`
  /** Box Properties */
  flex: none;
  background-color: rgba(0, 255, 109, 1);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  border-radius: 8px;

  /** Text Properties */
  color: rgba(2, 0, 36, 1);
  text-align: center;
  margin-right: 10px;
  padding: 8px 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const PostDateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-left: auto;
  background-color: rgba(2, 0, 36, 1);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  border-radius: 8px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  summary,
  date,
  categories,
}) {
  const goBackPage = () => window.history.back()

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <Border />
      <PostData>
        {Object.values(categories).map(name => (
          <PostCategoryItem>{name}</PostCategoryItem>
        ))}
        <PostDateBox>
          <FontAwesomeIcon icon={faCalendarDays} />
          <div>&nbsp;&nbsp;{date}</div>
        </PostDateBox>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo

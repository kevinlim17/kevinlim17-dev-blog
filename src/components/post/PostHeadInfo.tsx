import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export type PostHeadInfoProps = {
  title: string
  summary: string
  date: string
  categories: string[]
  thumbnail: IGatsbyImageData
}

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
}

const PostHeadInfoWrapper = styled.div`
  position: relative;
  margin: 0 5vw;
  border-left: 2px solid rgba(2, 0, 36, 1);
  border-right: 2px dashed rgba(2, 0, 36, 0.3);
  background: rgba(250, 249, 246, 1);
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    border-left: 1.5px solid rgba(2, 0, 36, 1);
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.5s ease;
    box-shadow: 4px 0px 0 0 rgba(196, 196, 196, 0.7);
    color: rgba(196, 196, 196, 1);
    border-bottom: 1px dashed rgba(2, 0, 36, 0.3);
  }
`

const ThumbnailContainer = styled.div`
  position: relative;
  width: calc(100% - 80px);
  height: 300px;
  margin: 0 40px 0 40px;
  background: rgba(250, 249, 246, 1);
  border: 1px solid #e9ecef;

  @media (max-width: 1199px) {
    width: calc(100% - 60px);
    margin: 0 30px 0 30px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    height: 200px;
    margin: 0 20px 0 20px;
  }
`

const ThumbnailImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} />
))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(-3px);
  box-shadow: 2.5px 3px 1px 0px rgba(2, 0, 36, 0.15);
  backdrop-filter: blur(10px);
  filter: brightness(0.7);
`

const MetaSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
  padding: 20px 0;
  background: rgba(250, 249, 246, 1);
  border-bottom: 1.5px dashed rgba(196, 196, 196, 1);

  @media (max-width: 1199px) {
    margin: 0 30px 0 30px;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    // flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`

const CategorySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// 카테고리별 색상 배열
const categoryColors = [
  '#e91e63', // 핑크
  '#9c27b0', // 보라
  '#673ab7', // 진한 보라
  '#2196f3', // 파랑
  '#cddc39', // 라임
  '#ffb6c1', // 연핑크
]

const PostCategoryItem = styled.div<{ colorIndex: number }>`
  flex: none;
  background-color: ${({ colorIndex }) =>
    categoryColors[colorIndex % categoryColors.length]};
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  a {
    font-family: 'NanumSquareNeoExtraBold';
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 6px 0 0 rgba(196, 196, 196, 0.7);
    color: rgba(196, 196, 196, 1);
    font-family: 'NanumSquareNeoExtraBold';
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`

const PostDateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: rgba(2, 0, 36, 1);
  border-radius: 20px;
  color: rgba(250, 249, 246, 1);
  font-weight: 600;
  font-size: 14px;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(2, 0, 36, 1);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`

const ContentSection = styled.div`
  padding: 40px 40px 30px 40px;
  background: rgba(250, 249, 246, 1);

  @media (max-width: 1199px) {
    padding: 40px 30px 40px 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px 40px 20px;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  font-family: 'NanumSquareNeoHeavy';
  color: rgba(2, 0, 36, 1);
  word-break: keep-all;
  margin: 0 0 15px 0;
  text-align: left;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`

const Summary = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: #666;
  word-break: keep-all;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.6;
  }
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  summary,
  date,
  categories,
  thumbnail,
}) {
  return (
    <PostHeadInfoWrapper>
      <ThumbnailContainer>
        <ThumbnailImage image={thumbnail} alt="thumbnail" />
      </ThumbnailContainer>

      <MetaSection>
        <CategorySection>
          {Object.values(categories).map((name, index) => (
            <PostCategoryItem key={name} colorIndex={index}>
              <a href={'/?category=' + name}>{name}</a>
            </PostCategoryItem>
          ))}
        </CategorySection>
        <PostDateBox>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{date}</span>
        </PostDateBox>
      </MetaSection>

      <ContentSection>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </ContentSection>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo

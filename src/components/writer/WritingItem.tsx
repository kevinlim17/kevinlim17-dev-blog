import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BrunchPostItemType } from 'types/PostItem.types'

const WritingItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-top: 1.5px solid rgba(2, 0, 36, 1);
  border-left: 1.5px solid rgba(2, 0, 36, 1);
  background: rgba(250, 249, 246, 1);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 8px 16px 0 0 rgba(2, 0, 36, 0.7);
    background-color: rgba(2, 0, 36, 1);
    border-color: rgba(250, 249, 246, 1);

    * {
      color: white !important;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 30%;
  height: auto;
  min-height: 160px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const WritingItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`

const ContentTop = styled.div`
  flex: 1;
`

const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 1.75rem;
  font-weight: 400;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
`

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6b7280;
  border-top: 1.5px dashed rgba(196, 196, 196, 1);
  border-bottom: 1.5px dashed rgba(196, 196, 196, 1);
  padding: 0.6rem 0;
  margin: 0;
`

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`
const genreColors = [
  '#00bcd4', // 청록색
  '#607d8b', // 블루그레이
  '#00796b', // 진한 청록색
  '#e91e63', // 핑크
  '#ff9800', // 오렌지
  '#4caf50', // 녹색
]

const Genre = styled.span<{ colorIndex: number }>`
  padding: 0.25rem 0.75rem;
  background: ${({ colorIndex }) =>
    genreColors[colorIndex % genreColors.length]};
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
`

const Date = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #9ca3af;
`

const WritingItem: FunctionComponent<BrunchPostItemType> = function ({
  node: {
    title,
    description,
    date,
    thumbnail: {
      childImageSharp: { gatsbyImageData },
    },
    genre,
    url,
  },
}) {
  const getColorIndex = (genreStr: string) => {
    return genreStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  }

  return (
    <WritingItemWrapper to={url}>
      <WritingItemContent>
        <ContentTop>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContentTop>

        <ContentBottom>
          <MetaInfo>
            <Genre colorIndex={getColorIndex(genre)}>{genre}</Genre>
            <Date>🗓️ {date}</Date>
          </MetaInfo>
        </ContentBottom>
      </WritingItemContent>
      <ThumbnailImage image={gatsbyImageData} alt="Writing Item Image" />
    </WritingItemWrapper>
  )
}

export default WritingItem

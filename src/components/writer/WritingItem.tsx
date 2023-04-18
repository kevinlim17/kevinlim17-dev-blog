import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BrunchPostItemType } from 'types/PostItem.types'

const WritingItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  //box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  margin-bottom: 3vh;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 15px 15px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 25%;
  height: 100%;

  border-radius: 0 0 0 15px;
`

const WritingItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 500;

  color: white;
  margin-bottom: 1vh;
`

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 300;
  opacity: 0.8;

  color: white;
  margin-bottom: 4vh;
`

const Genre = styled.div`
  padding: 3px 5px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  font-size: 14px;
  font-weight: 700;
  color: white;
`

const Date = styled.div`
  padding: 3px 5px;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 2, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  font-size: 14px;
  font-weight: 700;
  color: white;
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
  return (
    <WritingItemWrapper to={url}>
      <ThumbnailImage image={gatsbyImageData} alt="Writing Item Image" />

      <WritingItemContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Genre>{genre}</Genre>
        <Date>
          {'🗓️ '}
          {date}
        </Date>
      </WritingItemContent>
    </WritingItemWrapper>
  )
}

export default WritingItem

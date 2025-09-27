import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);
  // box-shadow: 0 12px 24px rgba(196, 196, 196, 0.5);
  background: rgba(250, 249, 246, 1);
  transition: 0.3s box-shadow;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 16px 0 0 rgba(2, 0, 36, 0.3);
    background-color: rgba(2, 0, 36, 1);
    transition: 0.3s box-shadow;
    color: white;

    * {
      color: white !important;
    }
  }
`

const PostHeader = styled.div`
  // background: white;
  padding: 20px 20px 16px 20px;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
`

const Title = styled.h2`
  background-color: transparent;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: #000;
  margin: 0 0 12px 0;
  word-break: keep-all;
`

const PostItemContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Summary = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: keep-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 2.5px dashed rgba(196, 196, 196, 1);
`

const AuthorDate = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
`

const Date = styled.span``

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

// 카테고리별 색상 정의
const categoryColors = [
  '#00bcd4',
  '#607d8b',
  '#00796b',
  '#e91e63',
  '#ff9800',
  '#4caf50',
  '#ff5722',
]

const CategoryItem = styled.div<{ colorIndex: number }>`
  padding: 6px 14px;
  border-radius: 0;
  background: ${({ colorIndex }) =>
    categoryColors[colorIndex % categoryColors.length]};
  font-size: 14px;
  font-weight: 800;
  color: white;
  border-radius: 5px;
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-top: 2px solid #000;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostHeader>
        <Title>{title}</Title>
      </PostHeader>
      <PostItemContent>
        <Summary>{summary}</Summary>

        <MetaInfo>
          <AuthorDate>
            <Date>{date}</Date>
          </AuthorDate>

          <Category>
            {categories.map((category, index) => (
              <CategoryItem key={category} colorIndex={index}>
                {category}
              </CategoryItem>
            ))}
          </Category>
        </MetaInfo>
      </PostItemContent>

      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
    </PostItemWrapper>
  )
}

export default PostItem

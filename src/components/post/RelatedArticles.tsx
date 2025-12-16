import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { keyframes } from '@emotion/react'
import { categoryColors } from 'utils/categoryColors'

type RelatedPost = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

type RelatedArticlesProps = {
  posts: RelatedPost[]
}

const RelatedArticlesWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-right: 2px dashed rgba(2, 0, 36, 0.3);
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(2, 0, 36, 1);
  margin-bottom: 2rem;
  font-family: 'NanumSquareNeoBold';
`

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const ArticleCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);
  background: rgba(250, 249, 246, 1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 16px 0 0 rgba(2, 0, 36, 0.3);
    background-color: rgba(2, 0, 36, 1);

    * {
      color: white !important;
    }
  }
`

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 2px solid rgba(2, 0, 36, 1);
`

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`

const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: rgba(2, 0, 36, 1);
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ArticleSummary = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ArticleMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1.5px dashed rgba(196, 196, 196, 1);
`

const ArticleDate = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const createColorRotationAnimation = (categoryName: string) => {
  const startIndex = categoryName.length % categoryColors.length
  const rotatedColors = [
    ...categoryColors.slice(startIndex),
    ...categoryColors.slice(0, startIndex),
  ]

  const percentagePerColor = 100 / categoryColors.length
  const keyframeSteps = rotatedColors.reduce(
    (acc, color, index) => ({
      ...acc,
      [`${(index * percentagePerColor).toFixed(2)}%`]: {
        backgroundColor: color,
      },
    }),
    {},
  )

  return keyframes(keyframeSteps)
}

const CategoryTag = styled.span<{ categoryName: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  background: ${({ categoryName }) =>
    categoryColors[categoryName.length % categoryColors.length]};
  animation: ${({ categoryName }) => createColorRotationAnimation(categoryName)}
    ${categoryColors.length}s linear infinite;
`

const RelatedArticles: FunctionComponent<RelatedArticlesProps> = function ({
  posts,
}) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <RelatedArticlesWrapper>
      <SectionTitle>Related Articles</SectionTitle>
      <ArticlesGrid>
        {posts.map(({ node }) => (
          <ArticleCard key={node.id} to={node.fields.slug}>
            <ThumbnailWrapper>
              <Thumbnail
                image={
                  node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                }
                alt={node.frontmatter.title}
              />
            </ThumbnailWrapper>
            <CardContent>
              <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
              <ArticleSummary>{node.frontmatter.summary}</ArticleSummary>
              <ArticleMeta>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
                <Categories>
                  {node.frontmatter.categories.map(category => (
                    <CategoryTag key={category} categoryName={category}>
                      {category}
                    </CategoryTag>
                  ))}
                </Categories>
              </ArticleMeta>
            </CardContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </RelatedArticlesWrapper>
  )
}

export default RelatedArticles

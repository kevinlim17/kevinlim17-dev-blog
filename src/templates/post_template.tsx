import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types'
import Template from 'components/common/Template'
import PostHead from '../components/post/PostHead'
import PostContainer from 'components/post/PostContainer'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
    recentPosts: {
      edges: {
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
      }[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    recentPosts,
  },
  location: { href },
}) {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  // 현재 게시물의 첫 번째 카테고리를 포함하는 관련 게시물 필터링
  const currentSlug = edges[0].node.frontmatter.title
  const primaryCategory = categories[0]

  const relatedPosts = recentPosts.edges
    .filter(({ node }) => {
      // 현재 게시물은 제외
      if (node.frontmatter.title === currentSlug) return false
      // 첫 번째 카테고리가 같은 게시물만 포함
      return node.frontmatter.categories.includes(primaryCategory)
    })
    .slice(0, 3) // 최대 3개만 표시

  return (
    <Template
      title={title}
      description={summary}
      url={href}
      image={publicURL}
      headerTitle="&nbsp;Soople.dev"
    >
      <PostHead
        title={title}
        summary={summary}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContainer
        html={html}
        tableOfContents={tableOfContents}
        relatedPosts={relatedPosts}
      />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
    recentPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 20
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 400, height: 250)
              }
            }
          }
        }
      }
    }
  }
`

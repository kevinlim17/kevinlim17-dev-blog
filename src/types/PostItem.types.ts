import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type PostPageItemType = {
  node: {
    html: string
    tableOfContents: string
    frontmatter: PostFrontmatterType
  }
}

export type BrunchPostItemType = {
  node: {
    title: string
    description: string
    date: string
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    genre: string
    url: string
  }
}

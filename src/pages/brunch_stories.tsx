import React, { FunctionComponent, useMemo } from 'react'
import Template from 'components/common/Template'
import { graphql } from 'gatsby'
import { BrunchPostItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'
import WriterGround from 'components/writer/WriterGround'
import GenreList, { GenreListProps } from 'components/writer/GenreList'
import WritingList from 'components/writer/WritingList'

type WriterSpacePageProps = {
  location: {
    search: string
  }
  data: {
    allWritingsJson: {
      edges: BrunchPostItemType[]
    }
  }
}

const WriterSpace: FunctionComponent<WriterSpacePageProps> = function ({
  location: { search },
  data: {
    allWritingsJson: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedGenre: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? '모든 글'
      : parsed.category

  const genreList = useMemo(
    () =>
      edges.reduce(
        (
          list: GenreListProps['genreList'],
          { node: { genre } }: BrunchPostItemType,
        ) => {
          if (list[genre] === undefined) list[genre] = 1
          else list[genre]++

          list['모든 글']++

          return list
        },
        { '모든 글': 0 },
      ),
    [],
  )

  return (
    <Template headerTitle="✍️ kevin.writer">
      <WriterGround>
        <GenreList
          selectedGenre={selectedGenre}
          genreList={genreList}
        ></GenreList>
        <WritingList selectedGenre={selectedGenre} writings={edges} />
      </WriterGround>
    </Template>
  )
}

export default WriterSpace

export const getWritingList = graphql`
  query getWritingList {
    allWritingsJson(sort: { date: DESC }) {
      edges {
        node {
          title
          description
          date(formatString: "YYYY.MM.DD")
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
          genre
          url
        }
      }
    }
  }
`

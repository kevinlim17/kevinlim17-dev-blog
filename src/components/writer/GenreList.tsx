import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type GenreItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & GenreItemProps

export type GenreListProps = {
  selectedGenre: string
  genreList: {
    [key: string]: number
  }
}

const GenreListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px auto 10px;
  padding: 10px 0 20px 0;

  border-bottom: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin: 1vw;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GenreItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  /** Box Properties */
  background-color: ${({ active }) =>
    active ? 'rgba(2, 0, 36, 0.5)' : 'rgba(131, 58, 2, 0.4)'};
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  border-radius: 8px;
  cursor: pointer;

  /** Text Properties */
  color: ${({ active }) => (active ? 'white' : 'rgba(167, 167, 167, 0.7)')};
  text-align: center;
  margin-right: 20px;
  padding: 8px 12px;
  font-size: 18px;
  font-family: ${({ active }) => (active ? 'NanumSquareNeoExtraBold' : 'NanumSquareNeoBold')};

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 1vw;
  }
`

const GenreList: FunctionComponent<GenreListProps> = function ({
  selectedGenre,
  genreList,
}) {
  return (
    <GenreListWrapper>
      {Object.entries(genreList).map(([name, count]) => (
        <GenreItem
          to={`/brunch_stories/?category=${name}`}
          active={name === selectedGenre}
          key={name}
        >
          {name}&nbsp;({count})
        </GenreItem>
      ))}
    </GenreListWrapper>
  )
}

export default GenreList

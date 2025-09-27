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
  margin: 0.5rem 0;
  padding: 1rem 1rem 1rem;
  gap: 0.5rem;
  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 0.75rem 0;
    // padding: 0 0 1.5rem 0;
  }
`

const WrapperTitle = styled.div`
  font-size: 18px;
  font-family: 'NanumSquareNeoBold';
  margin-right: 100%;
  margin-bottom: 1rem;
  color: rgba(2, 0, 36, 1);
`

// TableShapeContainer와 동일한 색상 배열 사용
const tagColors = [
  '#00bcd4', // 청록색
  '#607d8b', // 블루그레이
  '#00796b', // 진한 청록색
  '#e91e63', // 핑크
  '#ff9800', // 오렌지
  '#4caf50', // 녹색
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GenreItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  /** Box Properties */
  background-color: ${({ active, children }) => {
    if (active) return 'rgba(2, 0, 36, 1)'
    // children에서 장르 이름을 추출하여 색상 결정
    const genreName =
      typeof children === 'string' ? children : children?.toString() || ''
    const colorIndex =
      genreName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      tagColors.length
    return tagColors[colorIndex]
  }};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;

  /** Text Properties */
  color: rgba(250, 249, 246, 1);
  font-weight: ${({ active }) => (active ? '700' : '600')};
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  line-height: 1.2;
  box-shadow: ${({ active }) =>
    active ? '2px 4px 0 0 rgba(2, 0, 36, 0.5);' : '0'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 6px 0 0 rgba(196, 196, 196, 0.7);
    color: rgba(196, 196, 196, 1);
    font-family: 'NanumSquareNeoExtraBold';
    margin-right: 5px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
  }
`

const GenreList: FunctionComponent<GenreListProps> = function ({
  selectedGenre,
  genreList,
}) {
  return (
    <GenreListWrapper>
      <WrapperTitle>Categories</WrapperTitle>
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

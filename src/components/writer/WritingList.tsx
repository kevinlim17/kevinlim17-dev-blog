import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import WritingItem from './WritingItem'
import { BrunchPostItemType } from 'types/PostItem.types'

type WritingListProps = {
  selectedGenre: string
  writings: BrunchPostItemType[]
}

const WritingListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100%;
  margin: 5vh auto;
`

const WritingList: FunctionComponent<WritingListProps> = function ({
  selectedGenre,
  writings,
}) {
  const writingListByGenre = useMemo<BrunchPostItemType[]>(
    () =>
      writings.filter(({ node: { genre } }: BrunchPostItemType) =>
        selectedGenre !== '모든 글' ? genre === selectedGenre : true,
      ),
    [selectedGenre],
  )

  return (
    <WritingListWrapper>
      {writingListByGenre.map(({ node }: BrunchPostItemType) => (
        <WritingItem node={node} />
      ))}
    </WritingListWrapper>
  )
}

export default WritingList

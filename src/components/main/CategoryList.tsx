import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

/** 데이터 형식 예시
{
    "selectedCategory": "Android",
    "categoryList": {
      "All": 5,
      "Android": 3,
      "Kotlin": 2
    }
}
*/
type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    /** 프로퍼티 Key는 string, 프로퍼티 Value는 number임을 나타내는 타입 표기 방법 */
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  margin: 50px auto 10px;

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: 50px;
    padding: 0 20px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  /** Box Properties */
  background-color: ${({ active }) =>
    active ? 'rgba(0, 167, 71, 1)' : 'rgba(0, 255, 109, 0.5)'};
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  border-radius: 8px;
  cursor: pointer;

  /** Text Properties */
  color: ${({ active }) => (active ? 'white' : 'black')};
  text-align: center;
  margin: 10px 20px 0 0;
  padding: 8px 12px;
  font-size: 18px;
  font-family: ${({ active }) => (active ? 'NanumSquareNeoExtraBold' : 'NanumSquareNeo')};

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
    margin-right: 10px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList

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

const CategoryListOutsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(250, 249, 246, 1);
  width: 100%;
  padding: 30px 10vw 0;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 30px 5vw 0;
    gap: 6px;
  }
`
const CategoryListInsideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(250, 249, 246, 1);
  width: 80vw;
  padding: 1rem;
  gap: 8px;

  border-top: 2px solid rgba(2, 0, 36, 1);
  border-left: 2px solid rgba(2, 0, 36, 1);

  @media (max-width: 768px) {
    width: 90vw;
    padding: 30px 5vw;
    gap: 6px;
  }
`
const WrapperTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-right: 100%;
  margin-bottom: 1rem;
`

// 다양한 색상 배열 정의
const tagColors = [
  '#e11d48', // 빨간색
  '#dc2626', // 진한 빨간색
  '#ea580c', // 주황색
  '#d97706', // 황금색
  '#65a30d', // 라임색
  '#16a34a', // 녹색
  '#059669', // 에메랄드색
  '#0891b2', // 청록색
  '#0284c7', // 하늘색
  '#2563eb', // 파란색
  '#4f46e5', // 인디고색
  '#7c3aed', // 보라색
  '#c026d3', // 자홍색
  '#db2777', // 핑크색
  '#374151', // 회색
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  /** Box Properties */
  background-color: ${({ active, children }) => {
    if (active) return 'rgba(2, 0, 36, 1)'
    // children에서 카테고리 이름을 추출하여 색상 결정
    const categoryName =
      typeof children === 'string' ? children : children?.toString() || ''
    const colorIndex = categoryName.length % tagColors.length
    return tagColors[colorIndex]
  }};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;

  /** Text Properties */
  color: rgba(250, 249, 246, 1);
  font-family: ${({ active }) =>
    active ? 'NanumSquareNeoHeavy' : 'NanumSquareNeo'};
  font-size: 14px;
  padding: 8px 16px;
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
    font-size: 13px;
    padding: 6px 12px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListOutsideWrapper>
      <CategoryListInsideWrapper>
        <WrapperTitle> Categories </WrapperTitle>
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            {name} ({count})
          </CategoryItem>
        ))}
      </CategoryListInsideWrapper>
    </CategoryListOutsideWrapper>
  )
}

export default CategoryList

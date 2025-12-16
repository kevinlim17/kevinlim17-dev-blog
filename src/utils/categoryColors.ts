// 카테고리별 색상 배열
export const categoryColors = [
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

/**
 * 카테고리 이름을 기반으로 일관된 색상을 반환하는 함수
 * @param categoryName 카테고리 이름
 * @returns 해당 카테고리에 할당된 색상 코드
 */
export const getCategoryColor = (categoryName: string): string => {
  // 카테고리 이름의 길이를 기반으로 색상 인덱스 결정
  const colorIndex = categoryName.length % categoryColors.length
  return categoryColors[colorIndex]
}

/**
 * 카테고리 이름을 기반으로 색상 회전 애니메이션 keyframes를 생성하는 함수
 * @param categoryName 카테고리 이름
 * @returns CSS keyframes 문자열
 */
export const getCategoryColorAnimation = (categoryName: string): string => {
  const startIndex = categoryName.length % categoryColors.length
  const totalColors = categoryColors.length

  // 시작 인덱스부터 모든 색상을 순환하는 배열 생성
  const rotatedColors = [
    ...categoryColors.slice(startIndex),
    ...categoryColors.slice(0, startIndex),
  ]

  // 각 색상당 100 / totalColors % 시간 할당
  const keyframes = rotatedColors
    .map((color, index) => {
      const percentage = (index / totalColors) * 100
      return `${percentage.toFixed(2)}% { background-color: ${color}; }`
    })
    .join('\n    ')

  return `
    @keyframes colorRotate-${categoryName.replace(/[^a-zA-Z0-9]/g, '')} {
      ${keyframes}
      100% { background-color: ${rotatedColors[0]}; }
    }
  `
}

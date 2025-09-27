import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from 'react'
import styled from '@emotion/styled'
import { getScrollTop } from 'components/utils/GetScrollTop'

export interface StickyProps {
  top: number
  className?: string
  children: ReactNode
}

// 레이아웃이 깨지지 않도록 높이를 유지해 줄 Wrapper
const StickyWrapper = styled.div``

const StickyBlock = styled.div``

const Sticky: FunctionComponent<StickyProps> = ({
  className,
  top,
  children,
}) => {
  const [fixed, setFixed] = useState(false)

  // 요소의 위치와 크기 정보를 저장할 상태
  const [geometry, setGeometry] = useState({
    width: 0,
    height: 0,
    left: 0,
  })

  // fixed 되기 전, 요소의 원래 위치(Y축)를 저장할 상태
  const [elementTop, setElementTop] = useState(0)

  // 실제 fixed 될 요소와 그 자리를 차지할 wrapper에 대한 ref
  const elementRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // 요소의 위치와 크기를 계산하여 상태에 저장하는 함수
  const calculateGeometry = useCallback(() => {
    if (!elementRef.current) return

    const { width, height, left } = elementRef.current.getBoundingClientRect()
    setGeometry({ width, height, left })
  }, [])

  // 요소의 Y축 위치를 계산하는 함수
  const calculateElementTop = useCallback(() => {
    if (!wrapperRef.current) return

    const { top } = wrapperRef.current.getBoundingClientRect()
    setElementTop(top + getScrollTop())
  }, [])

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop()
    // top prop 만큼의 여유를 두고 fixed 여부 결정
    const isNextFixed = scrollTop + top > elementTop

    if (fixed !== isNextFixed) {
      // fixed 상태가 변경될 때만 geometry 재계산
      if (isNextFixed) calculateGeometry()
      setFixed(isNextFixed)
    }
  }, [fixed, elementTop, top, calculateGeometry])

  // 최초 마운트 및 의존성 변경 시 위치 계산
  useEffect(() => {
    calculateElementTop()
    calculateGeometry()
  }, [calculateElementTop, calculateGeometry])

  // 스크롤 이벤트 등록 및 해제
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  // 브라우저 창 크기 변경 시 위치 재계산
  useEffect(() => {
    window.addEventListener('resize', calculateGeometry)
    window.addEventListener('resize', calculateElementTop)
    return () => {
      window.removeEventListener('resize', calculateGeometry)
      window.removeEventListener('resize', calculateElementTop)
    }
  }, [calculateGeometry, calculateElementTop])

  // fixed 상태일 때 적용할 스타일
  const fixedStyle: React.CSSProperties = fixed
    ? {
        position: 'fixed',
        top: `${top}px`,
        width: `${geometry.width}px`,
        left: `${geometry.left}px`,
      }
    : {}
  // wrapper가 유지해야 할 높이
  const wrapperStyle: React.CSSProperties = {
    height: fixed ? `${geometry.height}px` : undefined,
  }

  return (
    <StickyWrapper ref={wrapperRef} style={wrapperStyle}>
      <StickyBlock
        ref={elementRef}
        className={className}
        style={{
          ...fixedStyle,
          color: '#c4c4c4', // 기존 스타일 유지
        }}
      >
        {children}
      </StickyBlock>
    </StickyWrapper>
  )
}

export default Sticky

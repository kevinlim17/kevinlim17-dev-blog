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

const StickyBlock = styled.div``

const Sticky: FunctionComponent<StickyProps> = ({
  className,
  top,
  children,
}) => {
  const [currentScrollY, setScrollY] = useState(0)
  const element = useRef<HTMLDivElement | null>(null)
  const [fixed, setFixed] = useState(false)

  const setUpScrollY = useCallback(() => {
    if (!element.current) return

    const pos = element.current.getBoundingClientRect()
    setScrollY(pos.top + getScrollTop())
  }, [])

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop()
    const isNextFixed = scrollTop + 112 > currentScrollY

    if (fixed !== isNextFixed) setFixed(isNextFixed)
  }, [fixed, currentScrollY])

  useEffect(() => {
    setUpScrollY()
  }, [setUpScrollY])

  //register scroll event
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return (
    <StickyBlock
      ref={element}
      className={className}
      style={{
        position: fixed ? 'fixed' : undefined,
        top: fixed ? top : 50,
      }}
    >
      {children}
    </StickyBlock>
  )
}

export default Sticky

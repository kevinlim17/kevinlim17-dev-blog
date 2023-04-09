import { useEffect } from 'react'

export type func = () => void

export function useScrollEvent(onScroll: func) {
  useEffect(() => {
    window.addEventListener(`scroll`, onScroll, { passive: false })

    return () => {
      window.removeEventListener(`scroll`, onScroll)
    }
  }, [])
}

import { useEffect, useState } from 'react'

const useHeadsObserver = (elements: NodeListOf<Element> | never[]) => {
  const [activeId, setActiveId] = useState<string | null>('')

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const targetQuery = entry.target.querySelector('a')

          if (entry.isIntersecting && targetQuery != undefined) {
            setActiveId(targetQuery.href.split('/').at(-1) || '')
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' },
    )

    elements.forEach(elem => observer.observe(elem))
    return () => observer.disconnect()
  })

  return { activeId }
}

export default useHeadsObserver

import { useEffect, RefObject } from 'react'

type Ref = RefObject<Element>

const useOutsideClick = (ref: Ref, callback: () => void, disabled: boolean) => {
  const handleClick = (event: Event) => {
    if (disabled) return
    if (!ref.current || !(event.target instanceof Node)) return
    if (!ref.current.contains(event.target)) callback()
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick

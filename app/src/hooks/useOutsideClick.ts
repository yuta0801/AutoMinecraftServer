import { useEffect, RefObject } from 'react'

type Ref = RefObject<Element>
type Event = MouseEvent

const useOutsideClick = (ref: Ref, callback: () => void) => {
  const handleClick = (event: Event) => {
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

import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const useModal = (component: ReactNode) => {
  const root = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(root.current)

    return () => {
      document.body.removeChild(root.current)
    }
  }, [])

  return createPortal(component, root.current)
}

export default useModal

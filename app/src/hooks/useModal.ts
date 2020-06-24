import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const useModal = (component: ReactNode) => {
  const root = useRef(document.createElement('div'))

  useEffect(() => {
    const node = root.current
    document.body.appendChild(node)

    return () => {
      document.body.removeChild(node)
    }
  }, [root])

  return createPortal(component, root.current)
}

export default useModal

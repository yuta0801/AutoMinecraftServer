import { useEffect, useState } from 'react'

const useMutable = <T>(calculate: () => T, interval?: number) => {
  const [state, setState] = useState(calculate())

  useEffect(() => {
    const timer = setInterval(() => {
      setState(calculate())
    }, interval || 1000)

    return () => clearInterval(timer)
  }, [])

  return state
}

export default useMutable

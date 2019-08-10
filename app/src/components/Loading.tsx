import React from 'react'
const { useState, useEffect } = React

const Loading = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timerId)
  }, [])

  return isLoading && (
    <div id="loading">
      <div id="loading_bar" />
      <div id="loading_text">読み込み中...</div>
    </div>
  )
}

export default Loading

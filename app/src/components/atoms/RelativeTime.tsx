import React, { useCallback } from 'react'
import useMutable from '../../hooks/useMutable'

interface RelativeTimeProps {
  date?: Date
}

const padding = (strings: TemplateStringsArray, ...numbers: number[]) =>
  strings.reduce((result, string, i) => (
    result + String(numbers[i - 1]).padStart(2, '0') + string
  ))

const format = (ms: number) => {
  const sec = ms / 1000 | 0
  const h = sec / 3600 | 0
  const m = sec % 3600 / 60 | 0
  const s = sec % 60

  return padding`${h}:${m}:${s}`
}

const RelativeTime = ({ date }: RelativeTimeProps) => {
  const calculate = useCallback(() => {
  if (!date) return '--:--:--'
  return format(Date.now() - date.getTime())
  }, [date])

  const time = useMutable(calculate)

  return <>{time}</>
}

export default RelativeTime

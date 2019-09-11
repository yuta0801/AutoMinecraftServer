import React from 'react'
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

const calculate = (date?: Date) => {
  if (!date) return '--:--:--'
  return format(Date.now() - date.getTime())
}

const RelativeTime = (props: RelativeTimeProps) => {
  const time = useMutable(() => calculate(props.date))

  return <>{time}</>
}

export default RelativeTime

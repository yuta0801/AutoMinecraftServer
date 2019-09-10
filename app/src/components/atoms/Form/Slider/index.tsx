import React from 'react'
import { Slider as _Slider } from './style'

interface SliderProps {
  className?: string // TODO: Remove this
  min?: number
  max?: number
  step?: number
  value?: number
  onChange?(value: number): void
}

export const Slider = ({ onChange, ...props }: SliderProps) => (
  <_Slider
    onChange={e => onChange && onChange(Number(e.target.value))}
    {...props}
  />
)

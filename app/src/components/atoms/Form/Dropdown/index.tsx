import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option<T> = { label?: string, value: T }
type Options<T> = Array<string | Option<T>>

export interface DropdownProps<T> {
  buttonStyle?: React.CSSProperties
  height?: number
  label?: string
  options: Options<T>
  value: T
  onChange(value: T): void
}

const getLabel = (
  options: Options<any>,
  value: any,
  _default: string = '選択'
): React.ReactText => {
  if (value == null) return _default
  const option = options.find((option): option is Option<any> =>
    typeof option === 'object' && option.value === value
  )
  return option ? option.label || option.value : value || _default
}

export const Dropdown = (props: DropdownProps<any>) => {
  const [open, toggle] = useState(false)

  const ref = useRef<HTMLAnchorElement>(null)
  useOutsideClick(ref, () => toggle(false), !open)

  return (
    <Wrap>
      <Button open={open} onClick={() => toggle(!open)} ref={ref} style={props.buttonStyle}>
        { getLabel(props.options, props.value, props.label) }
        <Caret />
      </Button>
      { open && (
        <Menu height={props.height}>
          { props.options.map(option => (
            typeof option === 'string' ? (
              <Header>{option}</Header>
            ) : (
              <Item onClick={() => props.onChange(option.value)}>
                { option.label || option.value }
              </Item>
            )
          )) }
        </Menu>
      ) }
    </Wrap>
  )
}

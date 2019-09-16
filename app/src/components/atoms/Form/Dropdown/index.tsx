import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option<T> = { label?: string, value: T }
type Options<T> = Array<string | Option<T>>

export interface DropdownProps<T> {
  menuStyle?: React.CSSProperties
  buttonStyle?: React.CSSProperties
  options: Options<T>
  value: T
  onChange(value: T): void
}

const getLabel = (options: Options<any>, value: any): React.ReactText => {
  if (value == null) return '選択'
  const option = options.find((option): option is Option<any> =>
    typeof option === 'object' && option.value === value
  )
  return option ? option.label || option.value : value || '選択'
}

export const Dropdown = (props: DropdownProps<any>) => {
  const [open, toggle] = useState(false)

  const ref = useRef<HTMLAnchorElement>(null)
  useOutsideClick(ref, () => toggle(false), !open)

  return (
    <Wrap>
      <Button open={open} onClick={() => toggle(!open)} ref={ref} style={props.buttonStyle}>
        { getLabel(props.options, props.value) }
        <Caret />
      </Button>
      { open && (
        <Menu style={props.menuStyle}>
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

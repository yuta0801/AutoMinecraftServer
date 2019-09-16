import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option<T> = {
  label?: string
  value: T
}

export interface DropdownProps<T> {
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  options: Array<string | Option<T>>
  value: T
  onChange(value: T): void
}

const getLabel = (options: Array<string | Option<any>>, value: any) => {
  if (!value) return '選択'
  const option = options.find(option =>
    typeof option === 'object' && option.value === value
  ) as Option<any>
  return option.label || option.value || value
}

export const Dropdown = (props: DropdownProps<any>) => {
  const [open, toggle] = useState(false)

  const ref = useRef<HTMLAnchorElement>(null)
  useOutsideClick(ref, () => toggle(false), !open)

  return (
    <Wrap style={props.containerStyle}>
      <Button open={open} onClick={() => toggle(!open)} ref={ref} >
        { getLabel(props.options, props.value) }
        <Caret />
      </Button>
      { open && (
        <Menu style={props.style}>
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

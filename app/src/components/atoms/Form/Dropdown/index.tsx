import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option = { label?: string, value: string }
type Options = Array<string | Option>

export interface DropdownProps {
  buttonStyle?: React.CSSProperties
  height?: number
  label?: string
  options: Options
  value: string
  onChange(value: string): void
}

const getLabel = (
  options: Options,
  value: string,
  _default: string = '選択'
): React.ReactText => {
  if (value == null) return _default
  const option = options.find((option): option is Option =>
    typeof option === 'object' && option.value === value
  )
  return option ? option.label || option.value : value || _default
}

export const Dropdown = (props: DropdownProps) => {
  const [open, toggle] = useState(false)

  // TODO: Fix type. actually it is HTMLAnchorElement
  const ref = useRef<HTMLButtonElement>(null)
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

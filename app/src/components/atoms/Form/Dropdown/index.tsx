import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option = {
  label?: string
  value: string
}

  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  options: Array<string | Option>
  value: string
  onChange(value: string): void
}

export const Dropdown = (props: DropdownProps) => {
  const ref = useRef<HTMLAnchorElement>(null)
  useOutsideClick(ref, () => toggle(false))

  const [open, toggle] = useState(false)

  return (
    <Wrap style={props.containerStyle}>
      <Button open={open} onClick={() => toggle(!open)} ref={ref} >
        { props.value || '選択' }
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

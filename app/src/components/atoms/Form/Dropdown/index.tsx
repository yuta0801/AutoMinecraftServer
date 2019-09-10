import React, { useState, useRef } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
import { Wrap, Button, Caret, Menu, Header, Item } from './style'

type Option = {
  label?: string
  value: string
}

interface DropdownProps {
  options: Array<string | Option>
  value: string
  onChange(value: string): void
}

export const Dropdown = (props: DropdownProps) => {
  const ref = useRef<HTMLAnchorElement>(null)
  useOutsideClick(ref, () => toggle(false))

  const [open, toggle] = useState(false)

  return (
    <Wrap>
      <Button open={open} onClick={() => toggle(!open)} ref={ref} >
        { props.value || '選択' }
        <Caret />
      </Button>
      { open && (
        <Menu>
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

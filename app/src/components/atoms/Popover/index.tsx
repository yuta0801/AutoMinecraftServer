import React, { useEffect, useState } from 'react'
import { Wrap, Arrow, Title, Content } from './style'
import useOutsideClick from '../../../hooks/useOutsideClick'

interface PopoverProp {
  title: string
  target: React.RefObject<HTMLElement>
  hide(): void
  children: React.ReactChild
}

const Popover = (props: PopoverProp) => {
  const ref = React.createRef<HTMLDivElement>()

  useOutsideClick(ref, () => props.hide(), false)

  const [rect, setRect] = useState<ClientRect | DOMRect | null>(null)

  useEffect(() => {
    if (props.target.current)
      setRect(props.target.current.getBoundingClientRect())
  }, [])

  const position = rect && {
    top: rect.height,
    left: rect.right - rect.left + 10,
  }

  return position && (
    <Wrap style={position} ref={ref}>
      <Arrow />
      <Title>{props.title}</Title>
      <Content>{props.children}</Content>
    </Wrap>
  )
}

export default Popover

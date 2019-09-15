import React from 'react'
import { Wrapper, Container, Handle, Label } from './style'

interface SwitchProps {
  value: boolean
  onChange(value: boolean): void
}

const Switch = (props: SwitchProps) => {
  return (
    <Wrapper className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-mini bootstrap-switch-id-snooper-enabled bootstrap-switch-animate" tabIndex={0} onClick={() => props.onChange(!props.value)}>
      <Container switch={props.value} className="bootstrap-switch-container">
        <Handle className="bootstrap-switch-handle-on bootstrap-switch-primary">有効</Handle>
        <Label className="bootstrap-switch-label">&nbsp;</Label>
        <Handle className="bootstrap-switch-handle-off bootstrap-switch-default">無効</Handle>
      </Container>
    </Wrapper>
  )
}

export default Switch

import React, { useState } from 'react'
import { Wrapper, Container, Handle, Label } from './style'

interface SwitchProps {
  id?: string
  defaultChecked?: boolean
  value?: boolean
  onChange?(value: boolean): void
}

const Switch = (props: SwitchProps) => {
  const [value, setState] = useState(true)
  return (
    <Wrapper className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-mini bootstrap-switch-id-snooper-enabled bootstrap-switch-animate" tabIndex={0} onClick={() => setState(!value)}>
      <Container switch={value} className="bootstrap-switch-container">
        <Handle className="bootstrap-switch-handle-on bootstrap-switch-primary">有効</Handle>
        <Label className="bootstrap-switch-label">&nbsp;</Label>
        <Handle className="bootstrap-switch-handle-off bootstrap-switch-default">無効</Handle>
        <input id={props.id} className="properties_toggle" type="checkbox" name="toggle" checked={props.value} defaultChecked={props.defaultChecked} />
      </Container>
    </Wrapper>
  )
}

export default Switch

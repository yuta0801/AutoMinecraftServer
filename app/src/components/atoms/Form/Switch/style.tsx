import styled from 'styled-components'

interface SwitchProps {
  switch: boolean
}

export const Wrapper = styled.div`
  width: 121.992px;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 2px rgba(102, 175, 233, .6);
  }
`

export const Container = styled.div<SwitchProps>`
  width: 180px;
  margin-left: ${props => props.switch ? 0 : -60}px;
`

export const Handle = styled.div`
  width: 60px;
`

export const Label = styled.div`
  width: 60px;
`

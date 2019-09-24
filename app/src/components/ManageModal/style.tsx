import styled from 'styled-components'
import { Dropdown as _Dropdown } from '../atoms/Form'
import { TextInput as _TextInput } from '../atoms/Form'

export const Dropdown = styled(_Dropdown).attrs({
  buttonStyle: {
    width: 120,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    overflow: 'hidden',
  }
})``

export const TextInput = styled(_TextInput)`
  height: 22px;
  width: 120px;
  padding: 1px 5px;
`

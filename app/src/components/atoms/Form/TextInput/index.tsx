import React, { ComponentProps } from 'react'
import { TextInput as _TextInput } from './style'

type InputProps = ComponentProps<typeof _TextInput>

interface TextInputProps extends Omit<InputProps, 'onChange'> {
  onChange(value: string): void
}

export const TextInput = ({ onChange, ...props }: TextInputProps) => (
  <_TextInput onChange={e => onChange(e.target.value)} {...props} />
)

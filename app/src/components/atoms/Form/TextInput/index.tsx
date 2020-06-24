import React, { ComponentProps } from 'react'
import { TextInput as BaseTextInput } from './style'

type InputProps = ComponentProps<typeof BaseTextInput>

interface TextInputProps extends Omit<InputProps, 'onChange'> {
  onChange(value: string): void
}

export const TextInput = ({ onChange, ...props }: TextInputProps) => (
  <BaseTextInput onChange={e => onChange(e.target.value)} {...props} />
)

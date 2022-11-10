import { ComponentProps } from 'react'
import { Container, Input, Prefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <Container>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </Container>
  )
}

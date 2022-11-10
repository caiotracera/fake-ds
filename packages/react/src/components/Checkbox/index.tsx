import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

import { Container, Indicator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof Container> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <Container {...props}>
      <Indicator asChild>
        <Check weight="bold" />
      </Indicator>
    </Container>
  )
}

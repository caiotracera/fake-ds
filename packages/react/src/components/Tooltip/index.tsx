import React, { ComponentProps } from 'react'
import { Container, Content } from './styles'

export interface TooltipProps extends ComponentProps<typeof Container> {
  children: React.ReactNode
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

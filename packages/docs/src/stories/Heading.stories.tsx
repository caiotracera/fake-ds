import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@fake-ds/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o Heading sempre será um `h2`. Mas podemos alterar isso passando o `as`.',
      },
    },
  },
}

import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@fake-ds/react'

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

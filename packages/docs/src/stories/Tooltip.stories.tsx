import { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from '@fake-ds/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: '21 de Outubro - Indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

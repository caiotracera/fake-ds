import { Meta, StoryObj } from '@storybook/react'

import { MultiStep, MultiStepProps, Box } from '@fake-ds/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    numberOfSteps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}

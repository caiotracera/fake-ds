import { Meta, StoryObj } from '@storybook/react'

import { TextInput, TextInputProps, Box, Text } from '@fake-ds/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your e-mail address',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

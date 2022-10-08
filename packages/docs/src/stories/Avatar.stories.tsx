import { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@fake-ds/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caiotracera.png',
    alt: 'Caio Tracera',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

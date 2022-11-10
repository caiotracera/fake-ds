import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@fake-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore facilis asperiores vero totam nesciunt repudiandae sapiente dolores voluptas iusto reiciendis veniam harum quidem, libero obcaecati corporis. Odio, labore corporis. Iusto?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

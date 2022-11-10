import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  padding: '$3 $4',
  background: '$gray900',

  borderRadius: '$xs',
  width: 'fit-content',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-$2',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid $gray900',
  },
})

export const Content = styled('span', {
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
})

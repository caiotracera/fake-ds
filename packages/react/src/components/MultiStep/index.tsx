import { ComponentProps } from 'react'
import { Container, Label, Step, Steps } from './styles'

export interface MultiStepProps extends ComponentProps<typeof Container> {
  numberOfSteps: number
  currentStep?: number
}

export function MultiStep({ numberOfSteps, currentStep = 1 }: MultiStepProps) {
  return (
    <Container>
      <Label>
        Passo {currentStep} de {numberOfSteps}
      </Label>

      <Steps css={{ '--number-of-steps': numberOfSteps }}>
        {Array.from({ length: numberOfSteps }, (_, index) => index + 1).map(
          (step) => (
            <Step key={step} active={currentStep >= step} />
          ),
        )}
      </Steps>
    </Container>
  )
}

MultiStep.displayName = 'MultiStep'

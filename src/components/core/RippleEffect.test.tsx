import { fireEvent, getByAltText, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { RippleEffect } from './RippleEffect'
import { ButtonHTMLAttributes } from 'react'

const Tester: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button role='button' {...props}>
            <RippleEffect/>
        </button>
    )
}

const renderTester = (props?: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { getByRole, ...others } = render(<Tester {...props}/>)

    return {
        ...others,
        button: getByRole('button')
    }
}

describe('Ripple', () => {
    test('if a component has a RippleEffect inside itself and it is clicked, the ripple effect will appear.', async () => {
        const { getByTestId, findByTestId } = renderTester()

        const rippleContainer = getByTestId('ripple-container')

        userEvent.click(rippleContainer)

        const ripple = await findByTestId('ripple-effect')

        expect(ripple).toBeInTheDocument()
    })

    test('if a component is wrapped by RippleEffectContainer and clicked, the ripple effect will appear.', () => {

    })

    test('if ripple color set, ripple effect show that color.', () => {

    })

    test('if a component has property "disabled" with a value of true, the ripple effect won\'t appear even if the component is clicked.', () => {
        
    })
})
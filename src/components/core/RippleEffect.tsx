import {
    MouseEventHandler,
    RefObject,
    useCallback,
    useEffect,
    useState,
} from 'react'
import { ripple, rippleEffectStyle } from './RippleEffect.css'

export const RippleEffect = ({
    containerTarget,
    effectTarget,
}: {
    containerTarget?: RefObject<HTMLDivElement>
    effectTarget?: RefObject<unknown>
}) => {
    const [color, setColor] = useState('')

    const setRippleColor = useCallback((target: HTMLElement) => {
        const noBgColor =
            getComputedStyle(target).backgroundColor === 'rgba(0, 0, 0, 0)'

        if (noBgColor) {
            const onlyRGB = /\(([^)]+)\)/.exec(getComputedStyle(target).color)
            const onlyRGBNumbers = onlyRGB?.[1]

            setColor(`rgba(${onlyRGBNumbers}, 0.15)`)
        }
    }, [])

    useEffect(() => {
        if (!containerTarget) return

        const target = containerTarget.current?.firstChild

        if (target instanceof HTMLElement) {
            setRippleColor(target)
        }
    }, [containerTarget])

    useEffect(() => {
        if (!effectTarget) return

        const target = effectTarget.current

        if (target instanceof HTMLElement) {
            setRippleColor(target)
        }
    }, [effectTarget])

    const onClick: MouseEventHandler = (e) => {
        const button = e.target as HTMLSpanElement
        const circle = document.createElement('span')
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        circle.style.width = circle.style.height = `${size}px`
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`

        if (color) {
            circle.style.backgroundColor = color
        }

        circle.classList.add(ripple)
        circle.setAttribute('data-testid', 'ripple-effect')

        button.appendChild(circle)

        circle.addEventListener('animationend', () => {
            circle.remove()
        })
    }

    return <span className={rippleEffectStyle} onClick={onClick} data-testid='ripple-container'/>
}
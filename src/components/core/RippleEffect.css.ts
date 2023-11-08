import { keyframes, style } from '@vanilla-extract/css'

export const rippleAnim = keyframes({
    from: {
        transform: 'scale(0)',
        opacity: 1
    },
    to: {
        transform: 'scale(4)',
        opacity: 0
    }
})

export const rippleEffectStyle = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
})

export const ripple = style({
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'red',
    transform: 'scale(0)',
    animation: `${rippleAnim} 0.4s ease-in-out`
})
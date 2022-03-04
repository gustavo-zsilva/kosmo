import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {

} = createStitches({
    theme: {
        colors: {
            primary: '#F43B86',
            secondary: '#FFE459',
            bg: '#11052C',
            bgLight: '#3D087B',
        },
        radii: {
            full: '999px',
            round: '50%',
        },
        fontSizes: {
            sm: '.8rem',
            md: '1rem',
            lg: '1.2rem',
            xl: '2rem',
        },
        fontWeights: {
            thin: '300',
            regular: '400',
            bold: '700',
        },
        space: {
            1: '1rem',
            2: '2rem',
        },
    },
    utils: {
        mx: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    }
})
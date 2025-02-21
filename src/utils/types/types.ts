import type { HTMLAttributes } from 'react'
import { MaskProps } from 'react-mask-field/dist/types'

export interface FieldMaskProps {
    mask: MaskProps
    getUnmaskedValue: (maskedValue: string) => string
    getMaskedValue: (value?: string) => string
}

export type MergeJSX<
    Base,
    JSXEl = HTMLElement,
    Attr = HTMLAttributes<JSXEl>,
> = Omit<Attr, keyof Base> & Base

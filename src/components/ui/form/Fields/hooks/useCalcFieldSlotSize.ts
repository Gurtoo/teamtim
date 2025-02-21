import { ReactElement, RefObject, useEffect } from 'react'

const INPUT_PADDING_X: number = 16
const INPUT_PADDING_X_SLOT: number = 12
const INPUT_BORDER_X: number = 1

export const useCalcFieldSlotSize = (
	ref: RefObject<HTMLElement>,
	setSize: (v: number) => void,
	el?: ReactElement | string
): void =>
	useEffect(() => {
		if (!el) return;

		let size: number = ref.current?.scrollWidth || 0

		size += el ? INPUT_PADDING_X_SLOT : 0

		setSize((size + INPUT_BORDER_X + INPUT_PADDING_X) / 16)
	}, [])

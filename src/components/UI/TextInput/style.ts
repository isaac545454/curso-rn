import { TextStyle } from 'react-native'
import { BoxProps } from '../Box/Box'
import { $fontFamily } from '../Text/fontFamily'
import { $fontSizes } from '../Text/fontSizes'

export const $TextInputStyle: TextStyle = {
	padding: 0,
	fontFamily: $fontFamily.regular,
	flexGrow: 1,
	flexShrink: 1,
	...$fontSizes.paragraphMedium,
}

export const $TextInputContainer = (errorMessage?: string): BoxProps => {
	return {
		borderWidth: errorMessage ? 2 : 1,
		padding: 's16',
		borderColor: errorMessage ? 'error' : 'gray4',
		borderRadius: 's12',
		flexDirection: 'row',
	}
}

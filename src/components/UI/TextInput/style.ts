import { TextStyle } from 'react-native'
import { BoxProps } from '../Box/Box'
import { $fontFamily } from '../Text/fontFamily'
import { $fontSizes } from '../Text/fontSizes'

export const $TextInputStyle: TextStyle = {
	padding: 0,
	fontFamily: $fontFamily.regular,
	...$fontSizes.paragraphMedium,
}

export const $TextInputContainer: BoxProps = {
	borderWidth: 1,
	padding: 's16',
	borderColor: 'gray4',
	borderRadius: 's12',
}

import React from 'react'
import { Text as TNText, TextProps as RNTextProps } from 'react-native'
import { TextVariants, $fontSizes } from './fontSizes'
import { GetFontFamily, getFontFamily } from './getFontFamily'

type TextProps = {
	preset?: TextVariants
} & RNTextProps &
	GetFontFamily

export const Text = (props: TextProps) => {
	const { preset = 'paragraphMedium', style: RNStyle, bold, italic, semiBold, ...rest } = props
	const fontFamily = getFontFamily({ preset, bold, italic, semiBold })
	const style = [$fontSizes[preset], RNStyle, { fontFamily: fontFamily }]
	return <TNText {...rest} style={style} />
}

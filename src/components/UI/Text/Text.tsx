import React from 'react'
import { TextVariants, $fontSizes } from './fontSizes'
import { GetFontFamily, getFontFamily } from './getFontFamily'
import { SRText } from './SRText'

type TextProps = {
	preset?: TextVariants
} & React.ComponentProps<typeof SRText> &
	GetFontFamily

export const Text = (props: TextProps) => {
	const { preset = 'paragraphMedium', style: RNStyle, bold, italic, semiBold, ...rest } = props
	const fontFamily = getFontFamily({ preset, bold, italic, semiBold })
	const style = [$fontSizes[preset], RNStyle, { fontFamily: fontFamily }]

	return <SRText color="backgroundContrast" {...rest} style={style} />
}

import { $fontFamily } from './fontFamily'
import { TextVariants } from './fontSizes'

export type GetFontFamily = {
	bold?: boolean
	italic?: boolean
	semiBold?: boolean
}

export function getFontFamily({ preset, bold, italic, semiBold }: GetFontFamily & { preset: TextVariants }) {
	if (['headingSmall', 'headingMedium', 'headingLarge'].includes(preset)) {
		return italic ? $fontFamily.boldItalic : $fontFamily.bold
	}

	switch (true) {
		case bold && italic:
			return $fontFamily.boldItalic
		case bold:
			return $fontFamily.bold
		case italic:
			return $fontFamily.italic
		case semiBold && italic:
			return $fontFamily.mediumItalic
		case semiBold:
			return $fontFamily.medium
		default:
			return $fontFamily.regular
	}
}

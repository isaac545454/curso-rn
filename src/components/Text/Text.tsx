import React from 'react'
import { Text as TNText, TextProps as RNTextProps, TextStyle } from 'react-native'
import { TextVariants } from './fontSizes'

type TextProps = RNTextProps & {
	preset?: TextVariants
}

export const Text = (props: TextProps) => {
	return <TNText {...props} />
}

import { TextInputProps as RNTextInputProps, TextInput as RNTextInput } from 'react-native'
import React from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { $TextInputContainer, $TextInputStyle } from './style'
import { useThemeRestyle } from '../../../hooks/useThemeRestyle'

type TextInputProps = RNTextInputProps & {
	label: string
}

export const TextInput = ({ label, ...rntextInputProps }: TextInputProps) => {
	const { colors } = useThemeRestyle()
	return (
		<Box>
			<Text mb="s4" preset="paragraphMedium">
				{label}
			</Text>
			<Box {...$TextInputContainer}>
				<RNTextInput {...rntextInputProps} placeholderTextColor={colors.gray2} style={$TextInputStyle} />
			</Box>
		</Box>
	)
}

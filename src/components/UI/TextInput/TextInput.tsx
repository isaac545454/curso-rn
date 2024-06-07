import { TextInputProps as RNTextInputProps, TextInput as RNTextInput, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { $TextInputContainer, $TextInputStyle } from './style'
import { useThemeRestyle } from '../../../hooks/useThemeRestyle'

type TextInputProps = RNTextInputProps & {
	label: string
}

export const TextInput = ({ label, ...rntextInputProps }: TextInputProps) => {
	const { colors } = useThemeRestyle()
	const InputRef = useRef<RNTextInput>(null)

	const FocusInput = () => InputRef.current?.focus()

	return (
		<Pressable onPress={FocusInput}>
			<Box>
				<Text mb="s4" preset="paragraphMedium">
					{label}
				</Text>
				<Box {...$TextInputContainer}>
					<RNTextInput
						{...rntextInputProps}
						ref={InputRef}
						placeholderTextColor={colors.gray2}
						style={$TextInputStyle}
					/>
				</Box>
			</Box>
		</Pressable>
	)
}

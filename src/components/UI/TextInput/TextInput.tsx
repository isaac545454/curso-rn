import { TextInputProps as RNTextInputProps, TextInput as RNTextInput, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { $TextInputContainer, $TextInputStyle } from './style'
import { useThemeRestyle } from '../../../hooks/useThemeRestyle'

type TextInputProps = RNTextInputProps & {
	label: string
	errorMessage?: string
	RightComponent?: () => React.ReactElement
}

export const TextInput = ({ label, errorMessage, RightComponent, ...rntextInputProps }: TextInputProps) => {
	const { colors } = useThemeRestyle()
	const InputRef = useRef<RNTextInput>(null)

	const FocusInput = () => InputRef.current?.focus()

	return (
		<Pressable onPress={FocusInput}>
			<Box>
				<Text mb="s4" preset="paragraphMedium">
					{label}
				</Text>
				<Box {...$TextInputContainer(errorMessage)}>
					<RNTextInput
						{...rntextInputProps}
						ref={InputRef}
						placeholderTextColor={colors.gray2}
						style={$TextInputStyle}
					/>
					{RightComponent && (
						<Box justifyContent="center" ml="s16">
							<RightComponent />
						</Box>
					)}
				</Box>
				{errorMessage && (
					<Text preset="paragraphSmall" bold color="error">
						{errorMessage}
					</Text>
				)}
			</Box>
		</Pressable>
	)
}

import { Text } from '../Text'
import { TouchableOpacityBox } from '../TouchableOpacityBox'
import { ButtonProps, buttonPresets } from '.'
import { ActivityIndicator } from '../ActivityIndicator'

export const Button = (props: ButtonProps) => {
	const { title, loading, preset = 'primary', disabled = false, ...touchableOpacityBoxProps } = props
	const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']

	return (
		<TouchableOpacityBox
			{...touchableOpacityBoxProps}
			{...buttonPreset.container}
			disabled={disabled || loading}
			paddingHorizontal="s20"
			alignItems="center"
			justifyContent="center"
			borderRadius="s8"
			height={50}
		>
			{loading && <ActivityIndicator color={buttonPreset.content} />}
			{!loading && (
				<Text bold color={buttonPreset.content}>
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	)
}

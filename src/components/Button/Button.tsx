import { Text } from '../Text'
import { TouchableOpacityBox } from '../TouchableOpacityBox'
import { ActivityIndicator } from 'react-native'
import { ButtonProps, buttonPresets } from '.'

export const Button = (props: ButtonProps) => {
	const { title, loading, preset = 'primary', ...touchableOpacityBoxProps } = props
	return (
		<TouchableOpacityBox
			{...touchableOpacityBoxProps}
			{...buttonPresets[preset].container}
			paddingHorizontal="s20"
			alignItems="center"
			justifyContent="center"
			borderRadius="s8"
			height={50}
		>
			{loading && <ActivityIndicator />}
			{!loading && (
				<Text bold color={buttonPresets[preset].content}>
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	)
}

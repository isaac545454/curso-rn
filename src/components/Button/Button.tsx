import { Text } from '../Text'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../TouchableOpacityBox'
import { ActivityIndicator } from 'react-native'

type ButtonProps = {
	title: string
	loading?: boolean
} & TouchableOpacityBoxProps

export const Button = ({ title, loading, ...touchableOpacityBoxProps }: ButtonProps) => {
	return (
		<TouchableOpacityBox
			{...touchableOpacityBoxProps}
			backgroundColor="buttonPrimary"
			paddingHorizontal="s20"
			alignItems="center"
			justifyContent="center"
			borderRadius="s8"
			height={50}
		>
			{loading && <ActivityIndicator />}
			{!loading && (
				<Text bold color="primaryContrast">
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	)
}

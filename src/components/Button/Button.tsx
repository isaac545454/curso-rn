import { Text } from '../Text'
import { Box } from '../Box'
import { ActivityIndicator } from 'react-native'

type ButtonProps = {
	title: string
	loading?: boolean
} & React.ComponentProps<typeof Box>

export const Button = ({ title, loading, ...rest }: ButtonProps) => {
	return (
		<Box
			{...rest}
			backgroundColor="buttonPrimary"
			paddingHorizontal="s20"
			alignItems="center"
			justifyContent="center"
			borderRadius="s8"
			height={50}
		>
			{loading && <ActivityIndicator />}
			{!loading && (
				<Text bold style={{ color: '#fff' }}>
					{title}
				</Text>
			)}
		</Box>
	)
}

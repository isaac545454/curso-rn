import { ThemeColors } from '../../theme'
import { TouchableOpacityBoxProps } from '../TouchableOpacityBox'

export type ButtonPreset = 'primary' | 'outline'

export type ButtonUI = {
	container: TouchableOpacityBoxProps
	content: ThemeColors
}

export type ButtonProps = {
	title: string
	loading?: boolean
	preset: ButtonPreset
} & TouchableOpacityBoxProps

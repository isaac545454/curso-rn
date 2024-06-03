import { useThemeRestyle } from '../../../hooks/useThemeRestyle'
import { ThemeColors } from '../../../theme'
import { IconName, IconRegistry } from './IconRegistry'

type IconProps = {
	name: IconName
	color?: ThemeColors
	size?: number
}

export const Icon = ({ name, color = 'backgroundContrast', size }: IconProps) => {
	const { colors } = useThemeRestyle()
	const SVGIcon = IconRegistry[name]

	return <SVGIcon size={size} color={colors[color]} />
}

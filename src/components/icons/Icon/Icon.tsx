import { useThemeRestyle } from '../../../hooks/useThemeRestyle'
import { ThemeColors } from '../../../theme'
import { IconName, IconRegistry } from './IconRegistry'

type IconProps = {
	name: IconName
	color: ThemeColors
}

export const Icon = ({ name, color, ...iconProps }: IconProps) => {
	const { colors } = useThemeRestyle()
	const SVGIcon = IconRegistry[name]

	return <SVGIcon {...iconProps} color={colors[color]} />
}

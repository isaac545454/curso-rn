import { IconProps as TIconProps } from '../EyeOffIcon'
import { IconName, IconRegistry } from './IconRegistry'

type IconProps = {
	name: IconName
} & TIconProps

export const Icon = ({ name, ...iconProps }: IconProps) => {
	const SVGIcon = IconRegistry[name]
	return <SVGIcon {...iconProps} />
}

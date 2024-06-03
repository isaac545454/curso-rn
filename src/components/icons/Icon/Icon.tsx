import { IconBase } from './'
import { IconName, IconRegistry } from './IconRegistry'

type IconProps = {
	name: IconName
} & IconBase

export const Icon = ({ name, ...iconProps }: IconProps) => {
	const SVGIcon = IconRegistry[name]
	return <SVGIcon {...iconProps} />
}

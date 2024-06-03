import { Path, Svg } from 'react-native-svg'
import { IconBase } from '../Icon'

export const ChevronRightIcon = ({ size = 20 }: IconBase) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
			<Path d="M7 4L14 10L7 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</Svg>
	)
}

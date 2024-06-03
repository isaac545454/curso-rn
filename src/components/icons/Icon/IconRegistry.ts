import { EyeOffIcon } from '../EyeOffIcon'
import { EyeOnIcon } from '../EyeOnIcon/EyeOnIcon'

export const IconRegistry = {
	eyeOn: EyeOnIcon,
	eyeOff: EyeOffIcon,
}

export type IconType = typeof IconRegistry
export type IconName = keyof IconType

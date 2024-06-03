import { ArrowLeftIcon } from '../ArrowLeftIcon'
import { EyeOffIcon } from '../EyeOffIcon'
import { EyeOnIcon } from '../EyeOnIcon/EyeOnIcon'
import { SettingsIcon } from '../SettingsIcon/SettingsIcon'
import { TrashIcon } from '../TrashIcon'

export const IconRegistry = {
	eyeOn: EyeOnIcon,
	eyeOff: EyeOffIcon,
	arrowLeft: ArrowLeftIcon,
	TrashIcon: TrashIcon,
	settings: SettingsIcon,
}

export type IconType = typeof IconRegistry
export type IconName = keyof IconType

import { ArrowLeftIcon } from '../ArrowLeftIcon'
import { ChatIcon } from '../ChatIcon'
import { EyeOffIcon } from '../EyeOffIcon'
import { EyeOnIcon } from '../EyeOnIcon/EyeOnIcon'
import { HomeIcon } from '../HomeIcon'
import { MoreIcon } from '../MoreIcon/MoreIcon'
import { ProfileIcon } from '../ProfileIcon'
import { SearchIcon } from '../SearchIcon/SearchIcon'
import { SendIcon } from '../SendIcon'
import { SettingsIcon } from '../SettingsIcon/SettingsIcon'
import { TrashIcon } from '../TrashIcon'

export const IconRegistry = {
	eyeOn: EyeOnIcon,
	eyeOff: EyeOffIcon,
	arrowLeft: ArrowLeftIcon,
	TrashIcon: TrashIcon,
	settings: SettingsIcon,
	send: SendIcon,
	search: SearchIcon,
	home: HomeIcon,
	profile: ProfileIcon,
	chat: ChatIcon,
	more: MoreIcon,
}

export type IconType = typeof IconRegistry
export type IconName = keyof IconType

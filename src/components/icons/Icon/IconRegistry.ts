import { ArrowLeftIcon } from '../ArrowLeftIcon'
import { BellIcon } from '../BellIcon'
import { CameraIcon } from '../CameraIcon'
import { ChatIcon } from '../ChatIcon'
import { CheckIcon } from '../CheckIcon'
import { EyeOffIcon } from '../EyeOffIcon'
import { EyeOnIcon } from '../EyeOnIcon/EyeOnIcon'
import { HeartIcon } from '../HeartIcon'
import { HomeIcon } from '../HomeIcon'
import { MessageIcon } from '../MessageIcon'
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
	heart: HeartIcon,
	bell: BellIcon,
	check: CheckIcon,
	message: MessageIcon,
	camera: CameraIcon,
}

export type IconType = typeof IconRegistry
export type IconName = keyof IconType

import { ArrowLeftIcon } from '../ArrowLeftIcon'
import { ArrowRightIcon } from '../ArrowRightIcon'
import { BellIcon } from '../BellIcon'
import { BellOnIcon } from '../BellOnIcon'
import { BookmarkFillIcon } from '../BookmarkFillIcon'
import { BookmarkIcon } from '../BookmarkIcon'
import { CameraIcon } from '../CameraIcon'
import { ChatIcon } from '../ChatIcon'
import { ChatOnIcon } from '../ChatOnIcon'
import { CheckIcon } from '../CheckIcon'
import { ChevronRightIcon } from '../ChevronRightIcon'
import { CommentIcon } from '../CommentIcon'
import { EyeOffIcon } from '../EyeOffIcon'
import { EyeOnIcon } from '../EyeOnIcon/EyeOnIcon'
import { FlashOffIcon } from '../FlashOffIcon'
import { FlashOnIcon } from '../FlashOnIcon'
import { HeartFillIcon } from '../HeartFillIcon'
import { HeartIcon } from '../HeartIcon'
import { HomeFillIcon } from '../HomeFillIcon'
import { HomeIcon } from '../HomeIcon'
import { MessageIcon } from '../MessageIcon'
import { MoreIcon } from '../MoreIcon/MoreIcon'
import { NewPostIcon } from '../NewPostIcon'
import { ProfileFillIcon } from '../ProfileFillIcon'
import { ProfileIcon } from '../ProfileIcon'
import { SearchIcon } from '../SearchIcon'
import { SendIcon } from '../SendIcon'
import { SettingsIcon } from '../SettingsIcon'
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
	comment: CommentIcon,
	bellOn: BellOnIcon,
	bookmark: BookmarkIcon,
	chatOn: ChatOnIcon,
	flashOff: FlashOffIcon,
	flashOn: FlashOnIcon,
	newPost: NewPostIcon,
	arrowRight: ArrowRightIcon,
	homeFill: HomeFillIcon,
	bookmarkFill: BookmarkFillIcon,
	profileFill: ProfileFillIcon,
	chevronRight: ChevronRightIcon,
	heartFill: HeartFillIcon,
}

export type IconType = typeof IconRegistry
export type IconName = keyof IconType

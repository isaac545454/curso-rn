import {
	createRestyleComponent,
	backgroundColor,
	border,
	layout,
	spacing,
	BackgroundColorProps,
	spacingShorthand,
	BorderProps,
	LayoutProps,
	SpacingProps,
	SpacingShorthandProps,
} from '@shopify/restyle'
import { Theme } from '../../theme/theme'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
	BorderProps<Theme> &
	LayoutProps<Theme> &
	SpacingProps<Theme> &
	SpacingShorthandProps<Theme> &
	TouchableOpacityProps

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
	[backgroundColor, border, layout, spacing, spacingShorthand],
	TouchableOpacity,
)

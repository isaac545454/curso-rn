import React from 'react'
import {
	ActivityIndicator as RNActivityIndicator,
	ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'
import { ThemeColors, useThemeRestyle } from '../../../theme'

type ActivityIndicatorProps = {
	color: ThemeColors
} & Omit<RNActivityIndicatorProps, 'color'>

export const ActivityIndicator = ({ color, ...activityIndicatorProps }: ActivityIndicatorProps) => {
	const { colors } = useThemeRestyle()
	return <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
}

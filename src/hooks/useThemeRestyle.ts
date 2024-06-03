import { useTheme } from '@shopify/restyle'
import { Theme } from '../theme'

export const useThemeRestyle = () => useTheme<Theme>()

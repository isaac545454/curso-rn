import React from 'react'

import { SafeAreaView } from 'react-native'

import { Text } from './src/components/UI/Text'
import { Box } from './src/components/UI/Box'
import { Button } from './src/components/UI/Button'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { EyeOffIcon } from './src/components/icons/EyeOffIcon'
import { EyeOnIcon } from './src/components/icons/EyeOnIcon/EyeOnIcon'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<Text> -Italic</Text>
			</SafeAreaView>
			<Box gap={'s20'}>
				<Button title="taste" />
				<Button title="taste" loading={true} />
				<Button title="taste" preset="outline" />
				<Button title="taste" />
				<Button title="taste" />
				<EyeOffIcon />
				<EyeOnIcon />
			</Box>
		</ThemeProvider>
	)
}

export default App

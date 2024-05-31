import React from 'react'

import { SafeAreaView } from 'react-native'

import { Text } from './src/components/Text'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'
import { Button } from './src/components/Button'
import { Box } from './src/components/Box'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<Text> -Italic</Text>
			</SafeAreaView>
			<Box gap={'s20'}>
				<Button title="taste" />
				<Button title="taste" loading={true} />
			</Box>
		</ThemeProvider>
	)
}

export default App

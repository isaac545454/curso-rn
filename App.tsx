import React from 'react'
import { Box } from './src/components/UI/Box'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { Icon } from './src/components/icons/Icon'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<Box gap={'s20'}>
				<Icon name="eyeOn" color="gray1" />
			</Box>
		</ThemeProvider>
	)
}

export default App

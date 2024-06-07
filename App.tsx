import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme'
import { SafeAreaView, View } from 'react-native'
import { Text } from './src/components/UI/Text'
import { Box } from './src/components/UI/Box'
import { Button } from './src/components/UI/Button'
import { TextInput } from './src/components/UI/TextInput'
import { Icon } from './src/components/icons/Icon'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{ paddingHorizontal: 24 }}>
					<Text mb="s8" preset="headingLarge">
						Olá!
					</Text>
					<Text preset="paragraphLarge" mb="s40">
						Digite seu e-mail e senha para entrar
					</Text>
					<Box mb="s20">
						<TextInput label="E-mail" placeholder="Digite seu e-mail" style={{ borderWidth: 1, height: 50 }} />
					</Box>
					<Box>
						<TextInput
							label="Senha"
							errorMessage="Test Error"
							placeholder="Digite sua senha"
							style={{ borderWidth: 1, height: 50 }}
							RightComponent={() => <Icon name="eyeOn" />}
						/>
						<TextInput
							label="Senha"
							errorMessage="Test Error"
							placeholder="Digite sua senha"
							style={{ borderWidth: 1, height: 50 }}
							RightComponent={() => {
								return <Icon name="eyeOn" />
							}}
						/>
					</Box>
					<Text mt="s10" color="primary" preset="paragraphSmall" bold>
						Esqueci minha senha
					</Text>

					<Button mt="s48" title="Entrar" />
					<Button mt="s12" title="Criar uma conta" preset="outline" />
				</View>
			</SafeAreaView>
		</ThemeProvider>
	)
}

export default App

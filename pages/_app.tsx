import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import WalletContextProvider from '../components/WalletContextProvider'

import { extendTheme } from "@chakra-ui/react"

const colors = {
  background: "#161616",
  accent: "#e0ff00",
  bodyText: "#ffffff",
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <WalletContextProvider>
		      <Component {...pageProps} />
	      </WalletContextProvider>
    </ChakraProvider>
  )
}

import "@fontsource/inter"
import "simplebar/dist/simplebar.min.css"
import "../styles/global.css"

import SimpleBar from "simplebar-react"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimpleBar className="h-screen">
      <Component {...pageProps} />
    </SimpleBar>
  )
}

export default MyApp

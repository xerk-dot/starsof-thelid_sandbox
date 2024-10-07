import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from 'next/Link'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script src="https://example.com/script.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
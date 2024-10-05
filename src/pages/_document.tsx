import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
        <Link href="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet"></Link>
        <Script src="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></Script>
    </Html>
  )
}
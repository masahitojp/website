import React from 'react'
import path from 'path'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
  ],
  Document: ({ Html, Head, Body, children }) => {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  },
  getRoutes: async ({ dev }) => [
    {
      path: 'about',
      template: 'src/pages/about',
    },
    {
      path: '/',
      template: 'src/pages/index',
    },
    // A 404 component
    {
      path: '404',
      template: 'src/pages/404',
    },
  ]
}

import React from 'react'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'

export default () => ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()

    return meta.muiSheets.collect(<ThemeProvider>{App}</ThemeProvider>)
  },
  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
})

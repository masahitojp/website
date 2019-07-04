import React from 'react'
import { Root, Routes } from 'react-static'
import { IntlProvider, addLocaleData } from 'react-intl'
import ja from 'react-intl/locale-data/ja'
import ja_JP from './locales/ja'

addLocaleData([...ja])

const App: React.SFC = () => {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <IntlProvider locale={'ja'} messages={ja_JP}>
          <Routes />
        </IntlProvider>
      </React.Suspense>
    </Root>
  )
}

export default App

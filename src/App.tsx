import React from 'react'
import { Root, Routes } from 'react-static'
import { MemoryRouter as Router } from 'react-router'

const App: React.SFC = () => {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App

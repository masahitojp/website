import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
    <Root>
      <GlobalStyle />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App

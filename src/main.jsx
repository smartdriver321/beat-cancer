import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { PrivyProvider } from '@privy-io/react-auth'

import './index.css'
import { StateContextProvider } from './context'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <PrivyProvider
    appId="cm1oei6a300jt12byvijvl1vn"
    config={{
      appearance: {
        theme: 'dark',
      },
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
)

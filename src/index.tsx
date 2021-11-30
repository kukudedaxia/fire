import '@reach/dialog/styles.css'

import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import App from './App'
import getLibrary from './utils/getLibrary'
import store from './state'
import { NetworkContextName } from './constants/misc'
import ThemeProvider, { ThemedGlobalStyle } from './theme'
import ApplicationUpdater from './state/application/updater'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function Updaters() {
  return (
    <>
      <ApplicationUpdater />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Updaters />
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

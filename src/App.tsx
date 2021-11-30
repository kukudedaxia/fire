import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'

import { BackTop } from '@douyinfe/semi-ui';
import Header from './components/Header'
import Web3ReactManager from './components/Web3ReactManager'
// import Footer from './components/Footer'

import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Join = lazy(() => import('./pages/Join'))

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  const backtopStyle = {
    right: window.innerWidth > 720 ? 50 : 20,
    background: '#333',
  };

  return (
    <Web3ReactManager>
      <>
        <Header />
        <Switch>
          <Suspense fallback={<ContainerWrapper />}>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/join" component={Join} />
          </Suspense>
        </Switch>
        {/* <Footer /> */}
        <BackTop  style={backtopStyle} />
      </>
    </Web3ReactManager>
  )
}

export default App

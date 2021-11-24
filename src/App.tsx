import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'


// import Header from './components/Header'
import StarshipHeader from './pages/Starship/Header'
import Web3ReactManager from './components/Web3ReactManager'
// import Footer from './components/Footer'
import Footer from './pages/Starship/Footer'
import WalletHeader from  './components/Header'


import './App.css'

// const Home = lazy(() => import('./pages/Home'))
const User = lazy(() => import('./pages/User'))
const Pool = lazy(() => import('./pages/Pool'))
const PoolDetail = lazy(() => import('./pages/Pool/Detail'))
const Vote = lazy(() => import('./pages/Vote'))

const Starship = lazy(() => import('./pages/Starship'))

const Wallet = lazy(() => import('./pages/Wallet'))

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Web3ReactManager>
      <>
        {/* <Header /> */}
        {location.pathname === '/' ? <StarshipHeader /> : <WalletHeader/>}
        <Switch>
          <Suspense fallback={<ContainerWrapper />}>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Starship} />
            <Route exact path="/user" component={User} />

            <Route exact path="/pool" component={Pool} />
            <Route exact path="/pool/:poolId" component={PoolDetail} />

            <Route exact path="/vote" component={Vote} />
            <Route exact path="/wallet" component={Wallet} />
          </Suspense>
        </Switch>
        <Footer />
      </>
    </Web3ReactManager>
  )
}

export default App

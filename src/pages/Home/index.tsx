import styled from 'styled-components/macro'
import { useDarkModeManager } from '../../state/user/hooks'

const HomeWrapper = styled.div`
  width: 1200px;
`

const Home = () => {
  const [darkMode] = useDarkModeManager()

  return (
    <HomeWrapper>
      <div>123</div>
    </HomeWrapper>
  )
}

export default Home

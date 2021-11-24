import { useLocation } from 'react-router'
import styled from 'styled-components/macro'

const VoteWrapper = styled.div`
  font-size: 40px;
  color: red;
`

const Vote = () => {
  const location = useLocation()

  return <VoteWrapper>{location.pathname}</VoteWrapper>
}

export default Vote

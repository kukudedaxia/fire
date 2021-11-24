import { useParams } from 'react-router'
import styled from 'styled-components/macro'

const VoteWrapper = styled.div`
  font-size: 40px;
  color: red;
`

const Detail = () => {
  const { poolId } = useParams<{ poolId: string }>()

  return <VoteWrapper>id is {poolId}</VoteWrapper>
}

export default Detail

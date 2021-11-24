import styled from 'styled-components/macro'
import img7 from '../../assets/starship/kh4.png'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  margin-top: 50px;
`

const ImgWrapper = styled.img`
  display: block;
  margin: 0 auto;
  width: 72%;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 90%;
  }
`

const Planet = () => {
  return (
    <PrologueWrapper>
      <ImgWrapper src={img7} />
    </PrologueWrapper>
  )
}

export default Planet

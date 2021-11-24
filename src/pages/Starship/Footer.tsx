import styled from 'styled-components/macro'
import galaxyDark from '../../assets/starship/galaxy-dark.png'
import lab from '../../assets/starship/starship.png'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  position: relative;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    padding: 0 16px;
    margin: 100px auto 0;
    width: 100%;
  }
`
const ImgWrapper = styled.img`
  display: block;
  margin: 0 auto;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100%;
  }
`
const ImgWrappers = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  margin-top: -60px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin-top: -30px;
  }
`

const Footer = () => {
  return (
    <PrologueWrapper>
      <ImgWrapper src={galaxyDark} />
      <ImgWrappers src={lab} />
    </PrologueWrapper>
  )
}

export default Footer

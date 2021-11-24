import Banner from "./Banner"
import Chapter1 from "./Chapter1"
import Chapter2 from "./Chapter2"
import Chapter3 from "./Chapter3"
import Partner from "./Partner"
import Planet from "./Planet"
import Prologue from "./Prologue"
import RoadMap from "./RoadMap"
import starshipBg from '../../assets/starship/starship-bg.png'
import styled from 'styled-components/macro'
import { MEDIA_WIDTHS } from "./constant"

const BgWrapper = styled.div`
  background: url(${starshipBg}) no-repeat center 0px;
  background-size: 100% 100%;
`

const ContainerWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100%;
    padding: 0 16px;
  } 
`


const Starship = () => {

  return (
    <>
      <Banner />
        <BgWrapper>
          <ContainerWrapper>
            <Prologue />
            <Chapter1 />
            <Chapter2 />
            <Planet />
          </ContainerWrapper>
        </BgWrapper>
      <Chapter3 />
      <RoadMap />
      <Partner />
    </>
  )
}

export default Starship

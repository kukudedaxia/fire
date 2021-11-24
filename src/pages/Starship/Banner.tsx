import styled from 'styled-components/macro'
import galaxy from '../../assets/starship/galaxy.png'
import launchApp from '../../assets/starship/launch-app.png'
import { MEDIA_WIDTHS } from './constant'

const BannerWrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  height: 510px;
  background: url(${galaxy}) no-repeat;
  background-position: 250px center;
  color: #7f6c5c;
  font-family: 'Butler-Black';
  font-size: 80px;
  font-weight: 900;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 80%;
    margin: 50px auto 0;
    background-size: 110%;
    background-position: center;
    font-size: 32px;
    text-align: center;
  }
`

const Text = styled.div`
  font-family: 'Butler-Medium';
  letter-spacing: 3px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: flex;
    div:last-child {
      margin-left: 10px;
    }
  }
`

const LaunchWrapper = styled.div`
  width: 210px;
  height: 50px;
  margin-top: 50px;
  line-height: 50px;
  background: url(${launchApp});
  background-size: 100% 100%;
  color: #7f6c5c;
  text-align: center;
  font-family: 'Butler-Bold';
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
  }
`

const Banner = () => {
  return (
    <BannerWrapper>
      <Text>
        <div>Interstellar</div>
        <div>Age</div>
      </Text>
      <LaunchWrapper>Launch App</LaunchWrapper>
    </BannerWrapper>
  )
}

export default Banner

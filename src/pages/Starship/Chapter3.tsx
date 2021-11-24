import styled from 'styled-components/macro'
import planS from '../../assets/starship/plane-1.jpg'
import planM from '../../assets/starship/plane-2.jpg'
import planL from '../../assets/starship/plane-3.jpg'
import planLg from '../../assets/starship/plane-4.jpg'
import { Space } from '@douyinfe/semi-ui'
import { isMobile, MEDIA_WIDTHS } from './constant'
import Carousel, { CarouselTransitionModeProp } from 'nuka-carousel'
import { useState } from 'react'

const PrologueWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100vw;
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  letter-spacing: 7.28px;
  color: #bfa38f;
  font-weight: 500;
  font-family: 'Butler-Medium';
  ::before {
    content: '-';
    margin-right: 20px;
  }
  ::after {
    content: '-';
    margin-left: 20px;
  }
`

const SubTitle = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  letter-spacing: 5px;
  font-family: 'Butler-Light-Stencil';
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    font-size: 28px;
  }
`

const Article = styled.div`
  margin: 50px 0;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  font-weight: 400;
  font-family: 'Montserrat-Regular';
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 50px auto 0;
    padding: 0 36px;
    font-size: 16px;
  }
`

const CarouselWrapper = styled.div`
  width: 940px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .slider-slide {
    outline: 0 none;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100%;
    overflow: hidden;
  }
`

const ImgWrapper = styled.img`
  display: block;
  margin: 0 auto;
  width: 309px;
  height: 204px;
  border-radius: 10px;
  -webkit-box-reflect: below 2px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.3));
`

const Chapter3 = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const carouselOption = {
    transitionMode: 'scroll3d' as CarouselTransitionModeProp,
    slidesToShow: isMobile ? 1.25 : 3,
    wrapAround: true,
    opacityScale: 0.98,
    defaultControlsConfig: {
      pagingDotsStyle: { display: 'none' },
      prevButtonStyle: { display: 'none' },
      nextButtonStyle: { display: 'none' }
    }
  }

  const onClick = (index: number) => {
    console.log(index)
    setSlideIndex(index)
  }

  return (
    <PrologueWrapper>
      <Title>CHAPTER III</Title>
      <SubTitle>THE AGE OF GOLD</SubTitle>
      <Article>
        <Space vertical spacing={30}>
          <span>
            By the year 2590, the cost of starships had dropped to a fraction of a point thanks to the massive support
            for interstellar exploration.
          </span>
          <span>
            In this era, everyone is eager to make a fortune overnight by exploring and discovering new planets of
            resources and life. The age of interstellar gold mining for mankind has arrived.
          </span>
        </Space>
      </Article>
      <CarouselWrapper>
        <Carousel slideIndex={slideIndex} {...carouselOption} style={{ marginTop: '50px' }}>
          {[planS, planM, planL, planLg, planL].map((src, index) => (
            <ImgWrapper onClick={() => onClick(index)} key={index} src={src} alt="" />
          ))}
        </Carousel>
      </CarouselWrapper>
    </PrologueWrapper>
  )
}

export default Chapter3

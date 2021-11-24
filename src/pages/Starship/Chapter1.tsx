import { Space } from '@douyinfe/semi-ui'
import styled from 'styled-components/macro'
import img3 from '../../assets/starship/kh0.png'
import img4 from '../../assets/starship/kh1.png'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  margin-top: 50px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin-top: 100px;
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #bfa38f;
  font-weight: 500;
  letter-spacing: 7.28px;
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

const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: block;
  }
`

const SectionWrapper1 = styled.div`
  position: relative;
  img {
    width: 500px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 0;
    img {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
  }
`

const SectionWrapper2 = styled(SectionWrapper1)`
  left: -80px;
  margin-top: 150px;
  img {
    position: relative;
    width: 580px;
    z-index: 10;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    left: 0;
    margin-top: 0;
    img {
      width: 100%;
    }
  }
`

const Article1 = styled.div`
  /* max-width: 400px; */
  width: 420px;
  margin-top: 80px;
  padding-left: 20px;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  font-weight: 400;
  font-family: 'Montserrat-Regular';
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 0 auto;
    padding: 20px;
    font-size: 16px;
    width: 100%;
  }
`

const Article2 = styled(Article1)`
  width: 520px;
  margin-top: 30px;
  padding-left: 110px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 0 auto;
    padding: 20px;
    font-size: 16px;
    width: 100%;
  }
`

const Chapter1 = () => {
  return (
    <PrologueWrapper>
      <Title>CHAPTER I</Title>
      <SubTitle>THE AGE OF THE STARS</SubTitle>
      <ContainerWrapper>
        <SectionWrapper1>
          <img src={img3} alt="" />
          <Article1>
            <Space vertical spacing={30}>
              <span>
                In 2210, as the resource crisis becomes more and more serious, mankind jointly develops the first
                starship, named "Fire Stealer", which means to obtain resources from other planets. Humans entered the
                interstellar age and briefly formed an alliance.
              </span>
              <span>
                After realizing that there are no other intelligent beings in the universe, humans start to fight over
                different resource planets and life planets. To this end, each country has created a representative of
                their own large star ships.
              </span>
            </Space>
          </Article1>
        </SectionWrapper1>
        <SectionWrapper2>
          <img src={img4} alt="" />
          <Article2>
            Among them, the most famous starships include Christ, which is powerful with energy weapons, Pangu, which
            can carry a large number of ships, and Swarog, which can launch a large number of powerful nuclear weapons
            in a short period of time.
          </Article2>
        </SectionWrapper2>
      </ContainerWrapper>
    </PrologueWrapper>
  )
}

export default Chapter1

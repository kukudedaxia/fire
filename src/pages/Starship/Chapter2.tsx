import styled from 'styled-components/macro'
import img5 from '../../assets/starship/kh2.png'
import img6 from '../../assets/starship/kh3.png'
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

const ContainerWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: block;
  }
`

const SectionWrapper1 = styled.div`
  position: relative;
  margin-top: 70px;
  img {
    width: 500px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    left: 0;
    margin: 0;
    img {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
  }
`

const SectionWrapper2 = styled(SectionWrapper1)`
  left: -70px;
  margin-top: 0;
  img {
    width: 580px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    left: 0;
    margin: 0;
    img {
      width: 90%;
    }
  }
`

const Article1 = styled.div`
  max-width: 420px;
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
  max-width: 510px;
  margin-top: 30px;
  padding-left: 110px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 0 auto;
    padding: 20px;
    font-size: 16px;
    width: 100%;
  }
`

const Chapter2 = () => {
  return (
    <PrologueWrapper>
      <Title>CHAPTER II</Title>
      <SubTitle>DEVELOPMENT</SubTitle>
      <ContainerWrapper>
        <SectionWrapper1>
          <img src={img5} alt="" />
          <Article1>
            In order to achieve greater resource matching, each nation opened up the use of civilian starships under the
            "Star Law", while recognizing the ownership of resource planets by civilian explorers. Civilian exploration
            ships such as the Kunpeng, The Golden Beauty, and the Cowboy followed.
          </Article1>
        </SectionWrapper1>
        <SectionWrapper2>
          <img src={img6} alt="" />
          <Article2>
            In 2330, as the field of exploration expanded, starships became more numerous, and the space around them
            became crowded. In the next 100 years, a number of technological breakthroughs have taken place, such as
            gravity adaptation, curvature navigation, and starshield technology.
          </Article2>
        </SectionWrapper2>
      </ContainerWrapper>
    </PrologueWrapper>
  )
}

export default Chapter2

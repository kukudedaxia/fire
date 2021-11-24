import styled from 'styled-components/macro'
import img1 from '../../assets/starship/kh7.png'
import img2 from '../../assets/starship/kh6.png'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  margin-top: 50px;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #bfa38f;
  font-family: 'Butler-Medium';
  letter-spacing: 7.28px;
  font-weight: 500;
  ::before {
    content: '-';
    margin-right: 20px;
  }
  ::after {
    content: '-';
    margin-left: 20px;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  img {
    width: 580px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 90%;
    }
  }
`

const SectionWrapper2 = styled(SectionWrapper)`
  margin-top: 0;
  img {
    width: 500px;
    position: relative;
    top: -130px;
    z-index: 10;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    flex-direction: column-reverse;
    justify-content: center;
    img {
      width: 100%;
      margin: 0 auto;
      top: auto;
      left: auto;
    }
  }
`

const Article1 = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  font-weight: 400;
  font-family: 'Montserrat-Regular';
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    font-size: 16px;
    padding: 20px;
  }
`

const Article2 = styled(Article1)`
  padding-top: 50px;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    padding-top: 0;
  }
`

const Prologue = () => {
  return (
    <PrologueWrapper>
      <Title>PROLOGUE</Title>
      <SectionWrapper>
        <img src={img1} alt="" />
        <Article1>
          In 2022, the large-scale manned spacecraft developed by Musk, the starship, began to board the starry sky, and
          the "colonization plan" of the "Alpha Base" project began.
        </Article1>
      </SectionWrapper>
      <SectionWrapper2>
        <Article2>
          In 2030, spaceX built 1,000 interstellar spacecraft, more than one million people began to immigrate to Mars,
          the "colonization plan" was completed, and Musk's vision of human beings becoming a multi-planetary species
          was realized!
        </Article2>
        <img src={img2} alt="" />
      </SectionWrapper2>
    </PrologueWrapper>
  )
}

export default Prologue

import styled from 'styled-components/macro'
import {IconArrowRight } from '@douyinfe/semi-icons'
// import { useDarkModeManager } from '../../state/user/hooks'
import useTheme from '../../hooks/useTheme'
import Flags from './flag'
import Cards from './cards'

const HomeWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const  Section = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`
const Banner = styled.div<{ active: boolean }>`
  width: 100%;
  height: 0;
  padding-bottom: 35%;
  background: #ccc;
  :focus {
    border: 1px solid blue;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding-bottom: 100%;
`};
`

const Banner1 = styled.div<{ active: boolean }>`
  width: 100%;
  height: 300px;
  background: #ccc;
  :focus {
    border: 1px solid blue;
  }
`

const  TitleWrap = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20%;
  max-width: 860px;
  left: 50%;
  transform: translateX(-50%);
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
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 24px;
  letter-spacing: 2px;
`}; 
`
const SubTitle = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  letter-spacing: 5px;
  font-family: 'Butler-Light-Stencil';
  ${({ theme }) => theme.mediaWidth.upToSmall`
    letter-spacing: 1px;
    font-size: 16px;
    padding: 0 18px;
  `};
`
const StyledTab = styled.span`
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 2px solid #00ffa8;
    opacity: 0.6;
`

const StyledDesc = styled.div<{ lg: number, bold?: boolean }>`
  font-size: ${({ lg }) => ( lg ? `${lg}px `: '16px')};
  margin: 30px 0;
  font-weight: ${({ bold }) => ( bold ? `bold `: 'normal')};
`
const StyledToken = styled.div`
  font-size: 16px;
  max-width: 1000px;
  text-align: left;
  margin: 50px auto 0;
  >p {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
    ::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background: #ccc;
      border-radius: 50%;
      left: 0;
      top: 4px;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 0 18px;
`};
`

const StyledTask = styled.div`
  max-width: 900px;
  text-align: left;
  margin: 0 auto;
  li {
    margin: 10px 0;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 0 18px;
`};
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 2.5em 1em 0.5em;
  padding: 0.25em 1em;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05)
  }
  .semi-icon {
    margin-left: 10px;
  }
`;

const StyledJoin = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    overflow: scroll;
    justify-content: flex-start;
    padding: 0 18px;
  `};
  >div {
    position: relative;
    margin: 0 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0 20px;
  `};
  }
  .con {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    border-radius: 16px;
    background-color: #9e9e9e;
    cursor: pointer;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: box-shadow 400ms ease;
    position: relative;
    z-index:2;
    ${({ theme }) => theme.mediaWidth.upToSmall`
      width: 120px;
      min-height: 140px;
    `};
    :hover {
      box-shadow: 0 0 200px 20px rgba(236,64,121,30%);
      transform: translate3d(4px, 4px, 4px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }
  .tag {
    position: absolute;
    z-index:1;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    border-radius: 16px;
    background-color: #121118;
    transform: translate(4px, 4px);
  }
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px
    ${({ theme }) => theme.mediaWidth.upToSmall`
      width: 40px;
      height: 40px;
      margin-bottom: 10px
    `};
  }
  .desc {
    font-size: 13px;
    padding: 4px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
  `};
  }
`
const joins = [{
  imgSrc: 'https://shibatoken.com/images/ico-uni.svg',
  desc: 'Change Twitter avatar',
},{
  imgSrc: 'https://shibatoken.com/images/ico-uni.svg',
  desc: 'Change DC avatar',
},{
  imgSrc: 'https://shibatoken.com/images/ico-uni.svg',
  desc: 'Ask how Musk HUMAN is not as good as Dogecoin?',
},{
  imgSrc: 'https://shibatoken.com/images/ico-uni.svg',
  desc: 'Ask when cz will be on HUMAN',
}]

const Home = () => {
  const { white, black } = useTheme()
  return (
    <HomeWrapper>
      <Section>
        <Banner active={false} ></Banner>
        <TitleWrap>
          <Title>What is HumanDAO</Title>
          <SubTitle>We are a decentralized community autonomy, preparing to let the world know about us</SubTitle>
          <Button>
            <span>Be one of us</span>
            <IconArrowRight />
          </Button>
        </TitleWrap>
      </Section>
      <Section>
          <StyledTab>Flags</StyledTab>
          <StyledDesc lg={14}>This is the flag of HumanDAO that everyone knows</StyledDesc>
          <Flags />
      </Section>
      <Section>
          <StyledTab>Daily Task</StyledTab>
          <StyledTask>
          <StyledDesc lg={14}>We will be in the discord discussion area, there will be new tasks every day, complete the designated tasks, will get some rewards</StyledDesc>
           <div>
             <ul>
                <li>1.Ask how Musk HUMAN is not as good as Dogecoin?</li>
                <li>2.Ask SpaceX how much does it cost to print the LOGO on the Starship</li>
                <li>3.Ask when cz will be on HUMAN</li>
                <li>4.Ask when SFB will be on HUMAN</li>
                <li>...</li>
              </ul>
           </div>
           </StyledTask>
      </Section>
      <Section>
          <StyledTab>Joining ceremony</StyledTab>
          <StyledDesc lg={20} bold={false}>We will select a group of like-minded people through the joining ceremony</StyledDesc>
          <Banner1 active={false}>
            <StyledJoin>
            {joins.map((item, index) => (
                <div key={index}>
                  <div className="con">
                    <img src={item.imgSrc}/>
                    <div className="desc">{item.desc}</div>
                  </div>
                  <div className="tag" />
                </div>
            ))}
             </StyledJoin>
          </Banner1>

      </Section>
      <Section>
          <StyledTab>CONTRIBUTE</StyledTab>
          <StyledDesc lg={30} bold={true}>Join the Human</StyledDesc>
          <Cards />
      </Section>
      <Section>
          <StyledTab>Tokenomices</StyledTab>
          <StyledToken>
            <p>Fair distribution, if HumanDAO fails, 80% ETH will be refunded</p>
            <p>Total supply: 1,000 billion</p>
            <p>Donate 1000ETH</p>
            <p>price: 1ETH=1 billion HUMAN</p>
          </StyledToken>
          <Button>
            <span>Be one of us</span>
            <IconArrowRight />
          </Button>
      </Section>
    </HomeWrapper>
  )
}

export default Home

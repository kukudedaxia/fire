import { Space } from '@douyinfe/semi-ui'
import styled from 'styled-components/macro'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 80%;
    margin: 0 auto;
  }
`

const SubTitle = styled.div`
  font-size: 40px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 10px;
  font-weight: 500;
  font-family: 'Butler-Medium';
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
    padding: 0;
    font-size: 16px;
  }
`

const RoadMap = () => {
  return (
    <PrologueWrapper>
      <SubTitle>ROADMAP</SubTitle>
      <Article>
        <Space vertical spacing={30}>
          <span>
            1. On December 12, 2021, the new Starship Resource Pack will be launched on the Interstellar Age platform.
            Users with NFT starships can enjoy the mysterious airdrops and various future privileges to their own
            platforms.
          </span>
          <span>
            2.From December 22 to December 2021, the resource planet and the life planet will be launched one after
            another, and you can get mysterious rewards
          </span>
        </Space>
      </Article>
    </PrologueWrapper>
  )
}

export default RoadMap

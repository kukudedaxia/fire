import { Space } from '@douyinfe/semi-ui'
import styled from 'styled-components/macro'
import lab from '../../assets/starship/lab.png'
import { MEDIA_WIDTHS } from './constant'

const PrologueWrapper = styled.div`
  width: 1200px;
  margin: 50px auto 0;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin: 0 auto;
    width: 80%;
  }
`

const SubTitle = styled.div`
  margin-bottom: 50px;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 10px;
  font-weight: 500;
  font-family: 'Butler-Medium';
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    font-size: 28px;
  }
`

const LogoWrapper = styled.img`
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100px;
  }
`

const Partner = () => {
  return (
    <PrologueWrapper>
      <SubTitle>PARTNER</SubTitle>
      <Space spacing={50}>
        {[lab].map((logo, index) => (
          <LogoWrapper key={index} src={logo} />
        ))}
      </Space>
    </PrologueWrapper>
  )
}

export default Partner

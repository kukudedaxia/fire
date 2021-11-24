import { BackTop } from '@douyinfe/semi-ui'
import styled from 'styled-components/macro'

const FooterWrapper = styled.div`
  margin: 56px auto;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Scroll down to see the bottom-right gray button.</span>
      <BackTop />
    </FooterWrapper>
  )
}

export default Footer

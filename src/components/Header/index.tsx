// import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import starship from '../../assets/starship/starship.png'
import { MEDIA_WIDTHS } from '../../pages/Starship/constant'

import { useActiveWeb3React } from '../../hooks/web3'
import Web3Status from '../../components/Web3Status/Web3Status'

import { useState } from 'react'
import { Text } from 'rebass'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    width: 100vw;
    padding:20px;
  }
`

const LogoWrapper = styled.img`
  width: 250px;
  // height: 40px;
  cursor: pointer;
  margin-left:-20px;
  
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5em;
  }

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg1)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Header = () => {
  const { account } = useActiveWeb3React()

  return (
    <HeaderWrapper>
      <LogoWrapper src={starship} alt="starship" />
      <HeaderControls>
        <HeaderElement>
          <AccountElement active={!!account}>
            {/* Web3Status 钱包调用能力 */}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderWrapper>
  )
}

export default Header

// import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import starship from '../../assets/starship/starship.png'
import { useETHBalances } from '../../state/wallet/hooks'
import { useActiveWeb3React } from '../../hooks/web3'

import { useState } from 'react'
import useTheme from '../../hooks/useTheme'
import Web3Status from '../Web3Status'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 100vw;
    padding:20px;
 `};
 
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const LogoWrapper = styled.img`
  width: 250px;
  // height: 40px;
  cursor: pointer;
  margin-left:-20px;
  
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

const Header = () => {
  const { account } = useActiveWeb3React()

  const { white, black } = useTheme()
  return (
    <HeaderWrapper>
      <LogoWrapper src={starship} alt="starship" />
      <HeaderControls>
        <HeaderElement>
          <AccountElement active={!!account}>
                {/* {account && userEthBalance ? (
                  <BalanceText style={{ flexShrink: 0, userSelect: 'none' }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                    <Trans>{userEthBalance?.toSignificant(3)} ETH</Trans>
                  </BalanceText>
                ) : null} */}
                <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderWrapper>
  )
}

export default Header;

import { Currency, CurrencyAmount, Ether, Token } from '@uniswap/sdk-core'
import JSBI from 'jsbi'
import { useMemo } from 'react'
import { Interface } from '@ethersproject/abi'

import { useErc20Contract } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../hooks/web3'
import { isAddress } from '../../utils/util'
import { useMultipleContractSingleData, useSingleContractMultipleData } from '../multicall/hooks'
import { Erc20Interface } from '../../abis/types/Erc20'
import ERC20ABI from '../../abis/erc20.json'
import { SupportedChainId } from '../../constants/chains'
/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */
export function useETHBalances(
  uncheckedAddresses?: (string | undefined)[]
): {
  [address: string]: CurrencyAmount<Currency> | undefined
} {
  const { chainId } = useActiveWeb3React()
  const erc20Contract = useErc20Contract()

  const addresses: string[] = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a): a is string => a !== false)
            .sort()
        : [],
    [uncheckedAddresses]
  )
  
  // 获取账户的
  const results = useSingleContractMultipleData(
    erc20Contract,
    'getEthBalance',
    addresses.map(address => [address])
  )

  return useMemo(
    () =>
      addresses.reduce<{ [address: string]: CurrencyAmount<Currency> }>((memo, address, i) => {
        const value = results?.[i]?.result?.[0]
        if (value && chainId)
          //@ts-ignore
          memo[address] = CurrencyAmount.fromRawAmount(Ether.onChain(chainId), JSBI.BigInt(value.toString() as string))
        return memo
      }, {}),
    [addresses, chainId, results]
  )
}

// 不同链路的gas不一样
// const TOKEN_BALANCE_GAS_OVERRIDE: { [chainId: number]: number } = {
//   [SupportedChainId.OPTIMISM]: 250_000,
//   [SupportedChainId.OPTIMISTIC_KOVAN]: 250_000
// }

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalancesWithLoadingIndicator(
  address?: string,
  tokens?: (Token | undefined)[]
): [{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }, boolean] {
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens]
  )

  const { chainId } = useActiveWeb3React()

  const validatedTokenAddresses = useMemo(() => validatedTokens.map(vt => vt.address), [validatedTokens])
  const ERC20Interface = new Interface(ERC20ABI) as Erc20Interface
  const balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20Interface, 'balanceOf', [address], {
    // gasRequired: (chainId && TOKEN_BALANCE_GAS_OVERRIDE[chainId]) ?? 100_000
     gasRequired:  chainId ?? 100_000
  })

  const anyLoading: boolean = useMemo(() => balances.some(callState => callState.loading), [balances])

  return [
    useMemo(
      () =>
        address && validatedTokens.length > 0
          ? validatedTokens.reduce<{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }>((memo, token, i) => {
              const value = balances?.[i]?.result?.[0]
              const amount = value ? JSBI.BigInt(value.toString()) : undefined
              if (amount) {
                //@ts-ignore
                memo[token.address] = CurrencyAmount.fromRawAmount(token, amount)
              }
              return memo
            }, {})
          : {},
      [address, validatedTokens, balances]
    ),
    anyLoading
  ]
}

export function useTokenBalances(
  address?: string,
  tokens?: (Token | undefined)[]
): { [tokenAddress: string]: CurrencyAmount<Token> | undefined } {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0]
}

// get the balance for a single token/account combo
export function useTokenBalance(account?: string, token?: Token): CurrencyAmount<Token> | undefined {
  const tokenBalances = useTokenBalances(account, [token])
  if (!token) return undefined
  return tokenBalances[token.address]
}

import { Contract } from '@ethersproject/contracts'
import ENS_PUBLIC_RESOLVER_ABI from '../abis/ens-public-resolver.json'
import { abi as MERKLE_DISTRIBUTOR_ABI } from '../abis/MerkleDistributor.json'
import ENS_ABI from '../abis/ens-register.json'
import { ENS_REGISTRAR_ADDRESSES, MERKLE_DISTRIBUTOR_ADDRESS } from '../constants/address'
// import { abi as MulticallABI } from '../abis/UniswapInterfaceMulticall.json'
import { useMemo } from 'react'
import { getContract } from '../utils/util'

import { EnsPublicResolver, EnsRegistrar } from '../abis/types'
import { useActiveWeb3React } from './web3'
import { UniswapInterfaceMulticall } from '../types/v3/UniswapInterfaceMulticall'

// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean) {
  return useContract<EnsRegistrar>(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean) {
  return useContract<EnsPublicResolver>(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

// export function useMulticall2Contract() {
//   return useContract<UniswapInterfaceMulticall>(MULTICALL_ADDRESS, MulticallABI, false) as UniswapInterfaceMulticall
// }

export function useMerkleDistributorContract() {
  return useContract(MERKLE_DISTRIBUTOR_ADDRESS, MERKLE_DISTRIBUTOR_ABI, true)
}

// 测试demo 这里类似于用通用合约方法 生成的不同合约对象
export function useErc20Contract() {
  return useContract(MERKLE_DISTRIBUTOR_ADDRESS, MERKLE_DISTRIBUTOR_ABI, true)
}

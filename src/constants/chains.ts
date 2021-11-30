import ms from 'ms.macro'
import ethereumLogoUrl from '../assets/ethereum-logo.png'
// import arbitrumLogoUrl from '../assets/arbitrum_logo.svg'
// import optimismLogoUrl from '../assets/optimistic_ethereum.svg'

// 枚举支持的网络chainId
export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  BSC = 56,

  // ARBITRUM_ONE = 42161,
  // ARBITRUM_RINKEBY = 421611, 
  // OPTIMISM = 10,
  // OPTIMISTIC_KOVAN = 69
}

// 枚举支持的网络节点数组 （）
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,
  SupportedChainId.BSC,

  // SupportedChainId.ARBITRUM_ONE,
  // SupportedChainId.ARBITRUM_RINKEBY,
  // SupportedChainId.OPTIMISM,
  // SupportedChainId.OPTIMISTIC_KOVAN
]

export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.ROPSTEN,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.KOVAN,
  SupportedChainId.BSC
] as const

// 在 TypeScript 中，typeof 操作符可以用来获取一个变量或对象的类型。 
export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

// export const L2_CHAIN_IDS = [
//   SupportedChainId.ARBITRUM_ONE,
//   SupportedChainId.ARBITRUM_RINKEBY,
//   SupportedChainId.OPTIMISM,
//   SupportedChainId.OPTIMISTIC_KOVAN
// ] as const

// export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

export interface L1ChainInfo {
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
  readonly logoUrl?: string
  readonly rpcUrls?: string[]
  readonly nativeCurrency: {
    name: string // 'Goerli ETH',
    symbol: string // 'gorETH',
    decimals: number //18,
  }
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string
  readonly logoUrl: string
  readonly statusPage?: string
}

//通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。，定义网络信息包含L1ChainInfo，L2ChainInfo
export type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } 
// & {
//   readonly [chainId in SupportedL2ChainId]: L2ChainInfo
// } &
//   { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }


// 能支持的网络节点配置
export const CHAIN_INFO: ChainInfo = {
  //出Arbitrum One
  // [SupportedChainId.ARBITRUM_ONE]: {
  //   blockWaitMsBeforeWarning: ms`10m`,
  //   bridge: 'https://bridge.arbitrum.io/',
  //   docs: 'https://offchainlabs.com/',
  //   explorer: 'https://arbiscan.io/',
  //   infoLink: 'https://info.uniswap.org/#/arbitrum',
  //   label: 'Arbitrum',
  //   logoUrl: arbitrumLogoUrl,
  //   nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: ['https://arb1.arbitrum.io/rpc']
  // },
  // //Rinkeby测试网
  // [SupportedChainId.ARBITRUM_RINKEBY]: {
  //   blockWaitMsBeforeWarning: ms`10m`,
  //   bridge: 'https://bridge.arbitrum.io/',
  //   docs: 'https://offchainlabs.com/',
  //   explorer: 'https://rinkeby-explorer.arbitrum.io/',
  //   infoLink: 'https://info.uniswap.org/#/arbitrum/',
  //   label: 'Arbitrum Rinkeby',
  //   logoUrl: arbitrumLogoUrl,
  //   nativeCurrency: { name: 'Rinkeby ArbETH', symbol: 'rinkArbETH', decimals: 18 },
  //   rpcUrls: ['https://rinkeby.arbitrum.io/rpc']
  // },
  [SupportedChainId.MAINNET]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Ethereum',
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 }
  },
  
}


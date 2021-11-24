import { createReducer } from '@reduxjs/toolkit'
import { DEFAULT_DEADLINE_FROM_NOW } from '../../constants/misc'
import { updateUserDarkMode } from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  arbitrumAlphaAcknowledged: boolean

  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number

  matchesDarkMode: boolean // whether the dark mode media query matches
  optimismAlphaAcknowledged: boolean

  userDarkMode: boolean | null // the user's choice for dark mode or light mode
  userLocale: any

  userExpertMode: boolean

  userClientSideRouter: boolean // whether routes should be calculated with the client side router only

  // hides closed (inactive) positions across the app
  userHideClosedPositions: boolean

  // user defined slippage tolerance in bips, used in all txns
  userSlippageTolerance: number | 'auto'
  userSlippageToleranceHasBeenMigratedToAuto: boolean // temporary flag for migration status

  // deadline set by user in minutes, used in all txns
  userDeadline: number

  tokens: {
    [chainId: number]: {
      [address: string]: any
    }
  }

  pairs: {
    [chainId: number]: {
      // keyed by token0Address:token1Address
      [key: string]: any
    }
  }

  timestamp: number
  URLWarningVisible: boolean
}

function pairKey(token0Address: string, token1Address: string) {
  return `${token0Address};${token1Address}`
}

export const initialState: UserState = {
  arbitrumAlphaAcknowledged: false,
  matchesDarkMode: false,
  optimismAlphaAcknowledged: false,
  userDarkMode: null,
  userExpertMode: false,
  userLocale: null,
  userClientSideRouter: false,
  userHideClosedPositions: false,
  userSlippageTolerance: 'auto',
  userSlippageToleranceHasBeenMigratedToAuto: true,
  userDeadline: DEFAULT_DEADLINE_FROM_NOW,
  tokens: {},
  pairs: {},
  timestamp: currentTimestamp(),
  URLWarningVisible: true
}

export default createReducer(initialState, builder => {
  builder.addCase(updateUserDarkMode, (state, action) => {
    state.userDarkMode = action.payload.userDarkMode
    state.timestamp = currentTimestamp()
  })
})

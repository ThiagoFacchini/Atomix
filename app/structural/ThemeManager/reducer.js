// @flow
/*
 *
 * HomePage reducer
 *
 */

import Immutable from 'seamless-immutable'
import { BrowserInfo } from '../../utils/browser-dux'

import { REHYDRATE } from 'redux-persist'

import {
  DEFAULT_ACTION,
	SET_THEME,
} from './constants'

const initialState = Immutable({
	theme: 'default',
	device: BrowserInfo
})

function themeManagerReducer (state: Object = initialState, action: { type: string, payload: any }) {
	switch (action.type) {
	case DEFAULT_ACTION:
		return state

	case SET_THEME:
		return state.set('theme', action.payload.theme)

	case REHYDRATE:
		// const incoming = action.payload.themeManagerReducer
		// if (incoming) return { ...state, ...incoming }
		return state

	default:
		return state
	}
}

export default themeManagerReducer

// @flow
/*
 *
 * HomePage reducer
 *
 */

import Immutable from 'seamless-immutable'
import { REHYDRATE } from 'redux-persist'

import {
  DEFAULT_ACTION,
	SET_FAVOURITE_COLOUR,
} from './constants'

const initialState = Immutable({
	favouriteColour: 'salmonico'
})

function homePageReducer (state: Object = initialState, action: { type: string, payload: any }) {
	switch (action.type) {
	case DEFAULT_ACTION:
		return state

	case REHYDRATE:
		// const incoming = action.payload.homePage
		// if (incoming) return { ...state, ...incoming }
		return state

	case SET_FAVOURITE_COLOUR:
		return state.setIn(['favouriteColour'], action.payload)

	default:
		return state
	}
}

export default homePageReducer

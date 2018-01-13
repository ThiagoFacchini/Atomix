// @flow

import Immutable from 'seamless-immutable'

import {
  DEFAULT_ACTION,
} from './constants'

const initialState = Immutable({})

function appReducer (state: Object = initialState, action: { type: string, payload: any }) {
	switch (action.type) {
	case DEFAULT_ACTION:
		return state
	default:
		return state
	}
}

export default appReducer

// @flow
//
//
// HomePage actions
//
//

import {
	DEFAULT_ACTION,
	SET_THEME,
} from './constants'

export function defaultAction () {
	return {
		type: DEFAULT_ACTION,
	}
}

export function setTheme (theme: string) {
	return {
		type: SET_THEME,
		payload: {
			theme: theme
		}
	}
}

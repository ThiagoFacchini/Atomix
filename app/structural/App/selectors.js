// @flow
//
// import { createSelector } from 'reselect'

// selectLocation expects a plain JS object for the routing state
export const selectLocation = () => {
	let prevRoutingState
	let prevRoutingStateJS

	return (state: Object) => {
		const routingState = state.route

		if (routingState !== prevRoutingState) {
			prevRoutingState = routingState
			prevRoutingStateJS = routingState
		}

		return prevRoutingStateJS
	}
}

export const selectRootDomain = (state: Object) => state.appRoot

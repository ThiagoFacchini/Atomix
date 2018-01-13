// @flow
import { createSelector } from 'reselect'

/**
 * Direct selector to the homePage state domain
 */
export const selectHomePageDomain = (state: Object) => state.homePage

export const selectFavouriteColour = createSelector(selectHomePageDomain, (state: Object) => state.favouriteColour)

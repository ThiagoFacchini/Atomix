// @flow
import { createSelector } from 'reselect'

/**
 * Direct selector to the homePage state domain
 */
export const selecThemeManagerDomain = (state: Object) => state.themeManager

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

export const selectRootDomain = createSelector(selecThemeManagerDomain, (state: Object) => state)


export const selectTheme = createSelector(selectRootDomain,	(state: Object) => state.theme)

export const selectDevice = createSelector(selectRootDomain, (state: Object) => state.device)

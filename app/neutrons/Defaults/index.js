// @flow

import type {
  ComponentSize,
  ComponentAlignment
} from '../Types/'

import type {
  DeviceType
} from './../../utils/browser-dux'

/* -----------------------------------------------------------------
  Affect every Atom / Molecule from MAYA UIKIT
----------------------------------------------------------------- */
export const DEFAULT_THEME: string = 'default'
export const DEFAULT_DEVICE: DeviceType = 'computer'
export const DEFAULT_SIZE: ComponentSize = 'md'
export const DEFAULT_ALIGNMENT: ComponentAlignment = 'left'
export const DEFAULT_IS_USER_SELECTABLE: boolean = true
export const DEFAULT_NOT_USER_SELECTABLE_CLASS: string = 'notUserSelectable'
export const DEFAULT_IS_DISABLED_CLASS: string = 'disabled'
export const DEFAULT_IS_COMPONENT_ENABLE: boolean = true

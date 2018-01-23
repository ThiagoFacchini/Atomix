// @flow

import type {
  ComponentSize,
  ComponentAlignment,
  ComponentStatus,
  ComponentCapitalization
} from '../Types/'

import type {
  DeviceType
} from './../../utils/browser-dux'

import type {
  AnimationBehaviour,
  AnimationDuration
} from './../../protons/Animator'

/* -----------------------------------------------------------------
  Affect every Atom / Molecule from MAYA UIKIT
----------------------------------------------------------------- */
export const DEFAULT_THEME: string = 'default'
export const DEFAULT_DEVICE: DeviceType = 'computer'
export const DEFAULT_COMPONENT_SIZE: ComponentSize = 'md'
export const DEFAULT_COMPONENT_ALIGNMENT: ComponentAlignment = 'left'
export const DEFAULT_COMPONENT_IS_SELECTABLE: boolean = true
export const DEFAULT_COMPONENT_IS_SELECTABLE_CLASS: string = 'selectable'
export const DEFAULT_COMPONENT_IS_NOT_SELECTABLE_CLASS: string = 'unselectable'
export const DEFAULT_COMPONENT_STATUS: ComponentStatus = 'enabled'
export const DEFAULT_ANIMATION_BEHAVIOUR: AnimationBehaviour = 'animateOnce'
export const DEFAULT_ANIMATION_DURATION: AnimationDuration = 'short'
export const DEFAULT_COMPONENT_CAPITALIZATION: ComponentCapitalization = 'none'

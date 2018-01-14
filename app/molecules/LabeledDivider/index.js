// @flow

// --------------------------------------------------------
// MOLECULE - Molecules are groups of atoms bonded together
// and are the smallest fundamental units of a compound.
// It takes on their own properties and serve as the
// backbone of the design system. They are like 'subscribe
// to the newsletter' or 'search the site' widgets.
// --------------------------------------------------------

// LabeledDivider


// --------------------------------------------------------
// REACT IMPORTS
// --------------------------------------------------------
import React from 'react'
import Animator from '../../protons/Animator'
import Glyph from '../../atoms/Glyph'

import type {
	GlyphFamily
} from '../../atoms/Glyph'

import type {
	AnimationType,
	AnimationBehaviour,
	AnimationDuration
} from '../../protons/Animator'

import type {
	ComponentSize,
	ComponentAlignment
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
	DEFAULT_SIZE,
	DEFAULT_IS_COMPONENT_ENABLE,
	DEFAULT_IS_DISABLED_CLASS,
	DEFAULT_ANIMATION_BEHAVIOUR,
	DEFAULT_ANIMATION_DURATION
} from '../../neutrons/Defaults'
// --------------------------------------------------------

// --------------------------------------------------------
// ATOM IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'
// --------------------------------------------------------

// --------------------------------------------------------
// MOLECULE PROPERTY DEFINITIONS
// --------------------------------------------------------
type PropTypes = {
	theme: ?string,
	device: ?string,
	size: ComponentSize,
	paddingTop: ?number,
	paddingBottom: ?number,
	paddingLeft: ?number,
	paddingRight: ?number,
	animationType?: AnimationType,
	animationName?: string,
	animationBehaviour?: AnimationBehaviour,
	animationDuration?: AnimationDuration,
	isUserSelectable?: boolean,
	isEnabled?: boolean,
	glyphFamily?: GlyphFamily,
	glyphName?: string,
	label: string,
	labelAlignment: ?ComponentAlignment
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES MOLECULE DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {}
// --------------------------------------------------------

function LabeledDivider (props: PropTypes) {
	// --------------------------------------------------------
	// PRIVATE FUNCTIONS & VARIABLES
	// --------------------------------------------------------
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.labeleddivider)}>
		</div>
	)
	// --------------------------------------------------------
}

LabeledDivider.defaultProps = _defaultProps
export default LabeledDivider

// @flow

//
//
// Glyph
//
//

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
import Animator from '../../protons/Animator'

import type {
	AnimationType,
	AnimationBehaviour,
	AnimationDuration
} from '../../protons/Animator'

import type {
	ComponentSize,
	ComponentAlignment,
	ComponentStatus
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
	DEFAULT_COMPONENT_SIZE,
	DEFAULT_COMPONENT_ALIGNMENT,
	DEFAULT_COMPONENT_STATUS,
	DEFAULT_ANIMATION_BEHAVIOUR,
	DEFAULT_ANIMATION_DURATION
} from '../../neutrons/Defaults'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'

import fontawesome from './libs/fontAwesome/font-awesome.css'
import ionicons from './libs/ionicons/ionicons.css'
import justvectorsocial from './libs/justVectorSocial/just-vector-social.css'

// --------------------------------------------------------

// --------------------------------------------------------
// ATOM PROPERTIES DEFINITION
// --------------------------------------------------------
export type GlyphFamily = 'fontawesome' | 'ionicons' | 'justvectorsocial'

export type PropTypes = {
	theme: ?string,
	device: ?string,
	class?: Object,
	family: GlyphFamily,
	name: string,
	size?: ComponentSize,
	status?: ComponentStatus,
	alignment?: ComponentAlignment,
	animationType?: AnimationType,
	animationName?: string,
	animationBehaviour?: AnimationBehaviour,
	animationDuration?: AnimationDuration
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES ATOM DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
}
// --------------------------------------------------------

function Glyph (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Glyph component properties
	 * @return      {ReactComponent} Containing the child, or null
	 */
	function _getRenderElement (props: Object): Object {
		if (props.animationType && props.animationName && props.animationBehaviour) {
			return (
				<Animator
					type={props.animationType}
					name={props.animationName}
					behaviour={_getAnimationBehaviour(props.animationBehaviour)}
					duration={_getAnimationDuration(props.animationDuration)}
				>
					{ _getGlyphComponent(props) }
				</Animator>
			)
		} else {
			return _getGlyphComponent(props)
		}
	}

	/**
	 * Define what the animation behaviour will be
	 * @param       {AnimationBehaviour} behaviour Behaviour from component properties or null
	 * @return      {AnimationBehaviour} Behaviour passed in the component properties or the default
	 */
	function _getAnimationBehaviour (behaviour: AnimationBehaviour | null): AnimationBehaviour {
		if (behaviour) {
			return behaviour
		} else {
			return DEFAULT_ANIMATION_BEHAVIOUR
		}
	}

	/**
	 * Define what the animation duration will be
	 * @param       {AnimationDuration} duration Duration from component properties or null
	 * @return      {AnimationDuration} Duration passed in the component properties or the default
	 */
	function _getAnimationDuration (duration: AnimationDuration | null): AnimationDuration {
		if (duration) {
			return duration
		} else {
			return DEFAULT_ANIMATION_DURATION
		}
	}

	/**
	 * Build the Glyph component
	 * @param       {Object} props Glyph component properties
	 * @return      {ReactComponent} Containing the Glyph component
	 */
	function _getGlyphComponent (props: Object): Object {
		return (
			<div className={classNames(
				styles.glyph,
				styles[_getComponentSize(props.size)],
				styles[_getComponentStatus(props.status)],
				styles[_getComponentAlignment(props.alignment)],
				_getGlyphClass(props.family, props.name),
				_getUserCustomClass(props.class)
			)}>
			</div>
		)
	}

	/**
	 * Define component size
	 * @param       {ComponentSize | null} size Component property
	 * @constructor
	 * @return      {ComponentSize} Component Size class or default class
	 */
	function _getComponentSize (size: ComponentSize | null): ComponentSize {
		if (size) {
			return size
		} else {
			return DEFAULT_COMPONENT_SIZE
		}
	}

	/**
	 * Define component status
	 * @param       {ComponentStatus | null} status Component property
	 * @constructor
	 * @return      {ComponentStatus} Component Status class or default class
	 */
	function _getComponentStatus (status: ComponentStatus | null): ComponentStatus {
		if (status) {
			return status
		} else {
			return DEFAULT_COMPONENT_STATUS
		}
	}

	/**
	 * Define component alignment
	 * @param       {ComponentAlignment | null} alignment Component property
	 * @constructor
	 * @return      {ComponentAlignment } Component Alignment class or default class
	 */
	function _getComponentAlignment (alignment: ComponentAlignment | null): ComponentAlignment {
		if (alignment) {
			return alignment
		} else {
			return DEFAULT_COMPONENT_ALIGNMENT
		}
	}

	/**
	 * Define the Glyph Family & Type
	 * @param       {GlyphFamily} family The Glyph Family
	 * @param       {string} name The Glyph name
	 * @return      {any | null} The class containing the Glyph definition or null
	 */
	function _getGlyphClass (family: GlyphFamily, name: string): any | null {
		switch (family) {
		case 'fontawesome':
			return fontawesome[`fontawesome-${name}`]
		case 'ionicons':
			return ionicons[`ionicons-${name}`]
		case 'justvectorsocial':
			return justvectorsocial[`justvectorsocial-${name}`]
		default:
			// @TODO - Hook into the log
			break
		}
	}

	/**
	 * Define if a user-custom css class will override defaults
	 * @param       {Object} userCustomClass User custom CSS class
	 * @return      {Object | null} The user-custom css class
	 */
	function _getUserCustomClass (userCustomClass: Object | null): Object | null {
		if (userCustomClass) {
			return userCustomClass
		}
		return null
	}

	const renderElement: Object | null = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.glyphContainer, styles[props.theme], styles[props.device])}>
			{renderElement}
		</div>
	)
	// --------------------------------------------------------
}

Glyph.defaultProps = _defaultProps
export default Glyph

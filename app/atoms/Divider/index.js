// @flow

// --------------------------------------------------------
// ATOM - Atoms are the smallest application build block,
// they are like HTML tags, such as a form label, an input
// or a button.
// --------------------------------------------------------


// Divider
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
	ComponentStatus
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
	DEFAULT_COMPONENT_SIZE,
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
// --------------------------------------------------------

// --------------------------------------------------------
// ATOM PROPERTIES DEFINITION
// --------------------------------------------------------
export type DividerTypes = 'solid' | 'dotted' | 'dashed'| 'ridge'

const DEFAULT_TYPE: DividerTypes = 'solid'
const DEFAULT_PADDING_TOP: number = 5
const DEFAULT_PADDING_BOTTOM: number = 5
const DEFAULT_PADDING_LEFT: number = 5
const DEFAULT_PADDING_RIGHT: number = 5

type PropTypes = {
	theme: ?string,
	device: ?string,
	type: ?DividerTypes,
	paddingTop?: number,
	paddingBottom?: number,
	paddingLeft?: number,
	paddingRight?: number,
	size?: ComponentSize,
	animationType?: AnimationType,
	animationName?: string,
	animationBehaviour?: AnimationBehaviour,
	animationDuration?: AnimationDuration,
	status?: ComponentStatus
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES ATOM DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
	type: DEFAULT_TYPE,
}
// --------------------------------------------------------

function Divider (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Title component properties
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
					{ _getDividerComponent(props) }
				</Animator>
			)
		} else {
			return _getDividerComponent(props)
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
	 * Build the Divider component
	 * @param       {Object} props Component properties
	 * @return      {ReactComponent} Divider component
	 */
	function _getDividerComponent (props: Object): Object {
		const dividerStyle = {
			borderStyle: props.type
		}
		return (
			<div style={ dividerStyle } className={classNames(
				styles.content,
				styles[_getComponentSize(props.size)],
				styles[_getComponentStatus(props.status)],
			)} />
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
	 * Create the custom style object
	 * @param       {Object} props Component properties
	 * @return      {Object} Custom style object
	 */
	function _getCustomStyles (props: Object): Object {
		let paddingTop: number, paddingBottom: number, paddingLeft: number, paddingRight: number

		if (props.paddingTop) {
			paddingTop = props.paddingTop
		} else {
			paddingTop = DEFAULT_PADDING_TOP
		}

		if (props.paddingBottom) {
			paddingBottom = props.paddingBottom
		} else {
			paddingBottom = DEFAULT_PADDING_BOTTOM
		}

		if (props.paddingLeft) {
			paddingLeft = props.paddingLeft
		} else {
			paddingLeft = DEFAULT_PADDING_LEFT
		}

		if (props.paddingRight) {
			paddingRight = props.paddingRight
		} else {
			paddingRight = DEFAULT_PADDING_RIGHT
		}

		const customStyle = {
			paddingTop: paddingTop,
			paddingBottom: paddingBottom,
			paddingLeft: paddingLeft,
			paddingRight: paddingRight
		}

		return customStyle
	}

	const renderElement: Object | null = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div style={_getCustomStyles(props)} className={classNames(styles.divider, styles[props.theme], styles[props.device])}>
			{renderElement}
		</div>
	)
	// --------------------------------------------------------
}

Divider.defaultProps = _defaultProps
export default Divider

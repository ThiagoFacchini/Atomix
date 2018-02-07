// @flow

// --------------------------------------------------------
// ATOM - Atoms are the smallest application build block,
// they are like HTML tags, such as a form label, an input
// or a button.
// --------------------------------------------------------


// Title
//
//

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
import _ from 'lodash'

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
	DEFAULT_COMPONENT_IS_SELECTABLE,
	DEFAULT_COMPONENT_IS_SELECTABLE_CLASS,
	DEFAULT_COMPONENT_IS_NOT_SELECTABLE_CLASS,
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
export type PropTypes = {
	children: ?any,
	theme: ?string,
	device: ?string,
	class?: Object,
	size?: ComponentSize,
	isSelectable?: boolean,
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
	children: null,
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
}
// --------------------------------------------------------

function Title (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Title component properties
	 * @return      {ReactComponent} Containing the child, or null
	 */
	function _getRenderElement (props: Object): Object | null {
		if (_.isString(props.children)) {
			if (props.animationType && props.animationName) {
				return (
					<Animator
						type={props.animationType}
						name={props.animationName}
						behaviour={_getAnimationBehaviour(props.animationBehaviour)}
						duration={_getAnimationDuration(props.animationDuration)}
					>
						{ _getTitleComponent(props) }
					</Animator>
				)
			} else {
				return _getTitleComponent(props)
			}
		} else {
			// @TODO Hook into a log system
			return null
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
	 * Build the title component
	 * @param       {Object} children Text to be rendered as title
	 * @return      {ReactComponent} Title component
	 */
	function _getTitleComponent (props: Object): Object {
		return (
			<div className={classNames(
				styles.title,
				styles[_getComponentSize(props.size)],
				styles[_getComponentStatus(props.status)],
				styles[_getComponentAlignment(props.alignment)],
				styles[_isComponentSelectable(props.isSelectable)],
				_getUserCustomClass(props.class),
			)}>
				{ props.children }
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
	 * Check if the title can be selected
	 * @param       {boolean | null}  isComponentSelectable component property
	 * @return      {string }  String containing user-select class or default class
	 */
	function _isComponentSelectable (isComponentSelectable: boolean | null): string {
		let isSelectable

		if (isComponentSelectable === null) {
			isSelectable = DEFAULT_COMPONENT_IS_SELECTABLE
		} else {
			isSelectable = isComponentSelectable
		}

		if (isSelectable) {
			return DEFAULT_COMPONENT_IS_SELECTABLE_CLASS
		} else {
			return DEFAULT_COMPONENT_IS_NOT_SELECTABLE_CLASS
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
		<div className={classNames(styles.titleContainer, styles[props.theme], styles[props.device])}>
			{renderElement}
		</div>
	)
	// --------------------------------------------------------
}

Title.defaultProps = _defaultProps
export default Title

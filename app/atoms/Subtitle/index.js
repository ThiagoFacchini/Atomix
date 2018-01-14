// @flow

// --------------------------------------------------------
// ATOM - Atoms are the smallest application build block,
// they are like HTML tags, such as a form label, an input
// or a button.
// --------------------------------------------------------


// Subtitle
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
	AnimationBehaviour
} from '../../protons/Animator'

import type {
	ComponentSize,
	ComponentAlignment
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
	DEFAULT_SIZE,
	DEFAULT_ALIGNMENT,
	DEFAULT_IS_USER_SELECTABLE,
	DEFAULT_NOT_USER_SELECTABLE_CLASS,
	DEFAULT_IS_COMPONENT_ENABLE,
	DEFAULT_IS_DISABLED_CLASS,
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
type PropTypes = {
	children: ?any,
	theme: ?string,
	device: ?string,
	size?: ComponentSize,
	isUserSelectable?: boolean,
	isEnabled?: boolean,
	alignment?: ComponentAlignment,
	animationType?: AnimationType,
	animationName?: string,
	animationBehaviour?: AnimationBehaviour
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES ATOM DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	children: null,
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
	size: DEFAULT_SIZE,
	isUserSelectable: DEFAULT_IS_USER_SELECTABLE,
	isEnabled: DEFAULT_IS_COMPONENT_ENABLE,
	alignment: DEFAULT_ALIGNMENT,
	animation: 'none'
}
// --------------------------------------------------------


function Subtitle (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Subtitle component properties
	 * @return      {ReactComponent} A ReactComponent or Null
	 */
	function _getRenderElement (props: Object): Object | null {
		if (_.isString(props.children)) {
			if (props.animationType && props.animationName && props.animationBehaviour) {
				return (
					<Animator
						type={props.animationType}
						name={props.animationName}
						behaviour={props.animationBehaviour}
					>
						{ _getSubtitleComponent(props.children) }
					</Animator>
				)
			} else {
				return _getSubtitleComponent(props.children)
			}
		} else {
			// @TODO Hook into a log system
			return null
		}
	}

	/**
	 * Build the subtitle component
	 * @param       {string} children Text to be rendered as subtitle
	 * @return      {ReactComponent} Subtitle Component
	 */
	function _getSubtitleComponent (children: string): Object {
		return (
			<div className={classNames(
				styles.content,
				styles[props.size],
				styles[_isUserSelectable(props.isUserSelectable)],
				styles[_isEnabled(props.isEnabled)],
				styles[props.alignment],
			)}>
				{children}
			</div>
		)
	}

	/**
	 * Check if the subtitle can be selected
	 * @param       {?boolean}  isUserSelectable component property
	 * @return      {string | null}  String containing user-select class or null
	 */
	function _isUserSelectable (isUserSelectable: ?boolean): string | null {
		if (isUserSelectable) {
			return null
		} else {
			return DEFAULT_NOT_USER_SELECTABLE_CLASS
		}
	}

	/**
	 * Check if the subtitle is enabled
	 * @param       {Boolean} isEnabled Boolean containing the component definition
	 * @return      {string | null} String containing a css class that defines if the component is enabled or null
	 */
	function _isEnabled (isEnabled: ?boolean): string | null {
		if (isEnabled) {
			return null
		} else {
			return DEFAULT_IS_DISABLED_CLASS
		}
	}

	const renderElement: Object | null = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.subtitle, styles[props.theme], styles[props.device])}>
			{renderElement}
		</div>
	)
	// --------------------------------------------------------
}

Subtitle.defaultProps = _defaultProps
export default Subtitle

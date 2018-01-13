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
import type { AnimationType, AnimationBehaviour } from '../../protons/Animator'
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
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Alignment = 'left' | 'center' | 'right' | 'justify'
export type Animation = 'none' | 'fadeIn' | 'fadeOut' | 'slideIn' | 'slideOut' | 'dropIn' | 'dropOut' | 'elasticSlideIn' | 'elasticSlideOut' | 'shake'

type PropTypes = {
	children: ?any,
	theme: ?string,
	device: ?string,
	size?: ComponentSize,
	isUserSelectable?: boolean,
	isEnabled?: boolean,
	alignment?: Alignment,
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
	theme: 'default',
	device: 'computer',
	size: 'md',
	isUserSelectable: true,
	isEnabled: true,
	alignment: 'left',
	animation: 'none'
}
// --------------------------------------------------------


function Subtitle (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------
	const NOT_USER_SELECTABLE_CLASS = 'notUserSelectable'
	const IS_DISABLED_CLASS = 'disabled'

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
			return NOT_USER_SELECTABLE_CLASS
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
			return IS_DISABLED_CLASS
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

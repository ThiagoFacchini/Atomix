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
	AnimationBehaviour
} from '../../protons/Animator'

import type {
	ComponentSize,
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
	DEFAULT_SIZE,
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
export type DividerTypes = 'solid' | 'dotted' | 'dashed'| 'ridge'

type PropTypes = {
	theme: ?string,
	device: ?string,
	size: ComponentSize,
	type: ?DividerTypes,
	paddingTop: ?number,
	paddingBottom: ?number,
	paddingLeft: ?number,
	paddingRight: ?number,
	animationType?: AnimationType,
	animationName?: string,
	animationBehaviour?: AnimationBehaviour,
	isEnabled?: boolean
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES ATOM DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
	size: DEFAULT_SIZE,
	type: 'solid',
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	isEnabled: DEFAULT_IS_COMPONENT_ENABLE
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
					behaviour={props.animationBehaviour}
				>
					{ _getDividerComponent(props) }
				</Animator>
			)
		} else {
			return _getDividerComponent(props)
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
				styles[props.size],
				styles[_isEnabled(props.isEnabled)]
			)} />
		)
	}

	/**
	 * Check if the Divider is enabled
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

	/**
	 * Create the custom style object
	 * @param       {Object} props Component properties
	 * @return      {Object} Custom style object
	 */
	function _getCustomStyles (props: Object): Object {
		const customStyle = {
			paddingTop: props.paddingTop,
			paddingBottom: props.paddingBottom,
			paddingLeft: props.paddingLeft,
			paddingRight: props.paddingRight
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

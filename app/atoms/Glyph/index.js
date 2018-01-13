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
import type { AnimationType, AnimationBehaviour } from '../../protons/Animator'
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
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Alignment = 'left' | 'center' | 'right' | 'justify'
export type Animation = 'none' | 'fadeIn' | 'fadeOut' | 'slideIn' | 'slideOut' | 'dropIn' | 'dropOut' | 'elasticSlideIn' | 'elasticSlideOut' | 'shake'
export type IconFamily = 'fontawesome' | 'ionicons' | 'justvectorsocial'

type PropTypes = {
	theme: ?string,
	device: ?string,
	size?: ComponentSize,
	family?: IconFamily,
	name: string,
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
	theme: 'default',
	device: 'computer',
	size: 'md',
	family: 'fontawesome',
	isEnabled: true,
	alignment: 'left',
	animationType: null,
	animationName: null,
	animationBehaviour: null,
}
// --------------------------------------------------------

function Glyph (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------
	const IS_DISABLED_CLASS = 'disabled'

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
					behaviour={props.animationBehaviour}
				>
					{ _getGlyphComponent(props) }
				</Animator>
			)
		} else {
			return _getGlyphComponent(props)
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
				styles.content,
				styles[props.size],
				styles[_isEnabled(props.isEnabled)],
				styles[props.alignment],
				_getGlyphClass(props.family, props.name)
			)}>
			</div>
		)
	}

	/**
	 * Define the Glyph Family & Type
	 * @param       {IconFamily} family The Glyph Family
	 * @param       {string} name The Glyph name
	 * @return      {any | null} The class containing the Glyph definition or null
	 */
	function _getGlyphClass (family: ?IconFamily, name: string): any | null {
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
	 * Check if the glyph is enabled
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
		<div className={classNames(styles.glyph, styles[props.theme], styles[props.device])}>
			{renderElement}
		</div>
	)
	// --------------------------------------------------------
}

Glyph.defaultProps = _defaultProps
export default Glyph

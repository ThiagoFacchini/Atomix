// @flow

// --------------------------------------------------------
// MOLECULE - Molecules are groups of atoms bonded together
// and are the smallest fundamental units of a compound.
// It takes on their own properties and serve as the
// backbone of the design system. They are like 'subscribe
// to the newsletter' or 'search the site' widgets.
// --------------------------------------------------------

// Header


// --------------------------------------------------------
// REACT IMPORTS
// --------------------------------------------------------
import React from 'react'
// --------------------------------------------------------

// --------------------------------------------------------
// ATOM IMPORTS
// --------------------------------------------------------
import Title from '../../atoms/Title'
import Subtitle from '../../atoms/Subtitle'
import Glyph from '../../atoms/Glyph'

import type {
	ComponentSize,
	Animation
} from '../../atoms/Title/index'
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
type Alignment = 'left' | 'center' | 'right'

type PropTypes = {
	children: ?any,
	theme: ?string,
	device: ?string,
	size?: ComponentSize,
	isUserSelectable?: boolean,
	isEnabled?: boolean,
	alignment?: Alignment,
	animation?: Animation
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES MOLECULE DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	children: null,
	theme: 'default',
	device: null,
	size: 'md',
	isUserSelectable: true,
	isEnabled: true,
	alignment: 'left',
	animation: 'none'
}
// --------------------------------------------------------

function Header (props: PropTypes) {
	// --------------------------------------------------------
	// PRIVATE FUNCTIONS & VARIABLES
	// --------------------------------------------------------
	let titleComponent, subtitleComponent, glyphComponent

	function _assignInternalComponents (children: any) {
		children.map((child, index) => {
			switch (child.type) {
			case Title:
				titleComponent = child
				break
			case Subtitle:
				subtitleComponent = child
				break
			case Glyph:
				glyphComponent = child
				break
			default:
				// TODO - Hook up with log system components other than the allowed will be ignored
				break
			}
		})
	}

	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.header)}>
			{ _assignInternalComponents(props.children) }
		</div>
	)
	// --------------------------------------------------------
}

Header.defaultProps = _defaultProps
export default Header

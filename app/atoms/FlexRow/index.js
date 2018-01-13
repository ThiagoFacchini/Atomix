// @flow

//
//
// FlexRow
//
//

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'
// --------------------------------------------------------

// --------------------------------------------------------
// COMPONENT PROPERTIES DEFINITION
// --------------------------------------------------------
type PropTypes = {
	xs?: 'hidden',
	sm?: 'hidden',
	md?: 'hidden',
	lg?: 'hidden',
	xl?: 'hidden',
	offset?: number,
	inset?: number,
	class?: Object,
	children?: any
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES COMPONENT DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	offset: 0,
	inset: 0,
	class: {},
	children: null
}
// --------------------------------------------------------

function FlexRow (props: PropTypes) {
	function _getRowClasses (): Array<*> {
		const cssClasses = []

		if (props.xs) {
			cssClasses.push(styles.xs)
		}
		if (props.sm) {
			cssClasses.push(styles.sm)
		}
		if (props.md) {
			cssClasses.push(styles.md)
		}
		if (props.lg) {
			cssClasses.push(styles.lg)
		}
		if (props.xl) {
			cssClasses.push(styles.xl)
		}
		if (props.class) {
			cssClasses.push(props.class)
		}
		return cssClasses
	}

	function _getRowStyles () {
		const cssStyles = {}
		if (props.offset) {
			cssStyles.marginLeft = (props.offset * -1)
			cssStyles.marginRight = (props.offset * -1)
		}
		if (props.inset) {
			cssStyles.paddingLeft = props.inset
			cssStyles.paddingRight = props.inset
		}
		return cssStyles
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.flexrow, _getRowClasses())} style={_getRowStyles()}>
			{React.Children.toArray(props.children)}
		</div>
	)
	// --------------------------------------------------------
}

FlexRow.defaultProps = _defaultProps
export default FlexRow

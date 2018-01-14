// @flow

//
//
// FlexCol
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
type ColumnType = 'hidden' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

type PropTypes = {
	xs?: ColumnType,
	sm?: ColumnType,
	md?: ColumnType,
	lg?: ColumnType,
	xl?: ColumnType,
	offset?: number,
	inset?: number,
	class?: Object,
	contentAlignment?: 'left' | 'center' | 'right',
	children?: any
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES COMPONENT DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	xs: '12',
	sm: '12',
	md: '12',
	lg: '12',
	xl: '12',
	offset: 0,
	inset: 0,
	class: {},
	contentAlignment: 'left',
	children: null
}
// --------------------------------------------------------

function FlexCol (props: PropTypes) {
	// --------------------------------------------------------
	// HELPER FUNCTIONS & VARIABLES
	// --------------------------------------------------------
	function _getColClasses (): Array<*> {
		const cssClasses = []
		if (props.xs) {
			cssClasses.push(styles.xs)
			if (props.xs === 'hidden') {
				cssClasses.push(styles['xshidden'])
			} else if (props.xs !== undefined) {
				cssClasses.push(styles[`colxs${props.xs}`])
			}
		}
		if (props.sm) {
			cssClasses.push(styles.sm)
			if (props.sm === 'hidden') {
				cssClasses.push(styles['smhidden'])
			} else if (props.sm !== undefined) {
				cssClasses.push(styles[`colsm${props.sm}`])
			}
		}
		if (props.md) {
			cssClasses.push(styles.md)
			if (props.md === 'hidden') {
				cssClasses.push(styles['mdhidden'])
			} else if (props.md !== undefined) {
				cssClasses.push(styles[`colmd${props.md}`])
			}
		}
		if (props.lg) {
			cssClasses.push(styles.lg)
			if (props.lg === 'hidden') {
				cssClasses.push(styles['lghidden'])
			} else if (props.lg !== undefined) {
				cssClasses.push(styles[`collg${props.lg}`])
			}
		}
		if (props.xl) {
			cssClasses.push(styles.xl)
			if (props.xl === 'hidden') {
				cssClasses.push(styles['xlhidden'])
			} else if (props.xl !== undefined) {
				cssClasses.push(styles[`colxl${props.xl}`])
			}
		}
		if (props.class) {
			cssClasses.push(props.class)
		}
		return cssClasses
	}

	function _getColStyles (): Object {
		const cssStyles = {}
		if (props.offset) {
			cssStyles.marginLeft = (props.offset * -1)
			cssStyles.marginRight = (props.offset * -1)
		}
		if (props.inset) {
			cssStyles.paddingLeft = props.inset
			cssStyles.paddingRight = props.inset
		}
		if (props.contentAlignment) {
			if (props.contentAlignment === 'left') {
				cssStyles.justifyContent = 'flex-start'
			} else if (props.contentAlignment === 'right') {
				cssStyles.justifyContent = 'flex-end'
			} else if (props.contentAlignment === 'center') {
				cssStyles.justifyContent = 'center'
			}
		}
		return cssStyles
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.flexcol, _getColClasses())} style={_getColStyles()}>
			{React.Children.toArray(props.children)}
		</div>
	)
	// --------------------------------------------------------
}

FlexCol.defaultProps = _defaultProps
export default FlexCol

// @flow

// --------------------------------------------------------
// MOLECULE - Molecules are groups of atoms bonded together
// and are the smallest fundamental units of a compound.
// It takes on their own properties and serve as the
// backbone of the design system. They are like 'subscribe
// to the newsletter' or 'search the site' widgets.
// --------------------------------------------------------

// LabeledDivider


// --------------------------------------------------------
// REACT IMPORTS
// --------------------------------------------------------
import React from 'react'
import _ from 'lodash'
import Divider from '../../atoms/Divider'
import Label from '../../atoms/Label'

import type {
	DividerTypes
} from '../../atoms/Divider'

import type {
	AnimationType,
	AnimationBehaviour,
	AnimationDuration
} from '../../protons/Animator'

import type {
	ComponentSize,
	ComponentAlignment,
	ComponentStatus,
	ComponentCapitalization
} from '../../neutrons/Types'

import {
	DEFAULT_THEME,
	DEFAULT_DEVICE,
} from '../../neutrons/Defaults'
// --------------------------------------------------------

// --------------------------------------------------------
// ATOM IMPORTS
// --------------------------------------------------------
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
type PropTypes = {
	theme?: string,
	device?: string,
	class?: Object,
	size?: ComponentSize,
	animationType?: Array<AnimationType> | AnimationType,
	animationName?: Array<string> | string,
	animationBehaviour?: Array<AnimationBehaviour> | AnimationBehaviour,
	animationDuration?: Array<AnimationDuration> | AnimationDuration,
	isSelectable?: boolean,
	status?: ComponentStatus,
	label: string,
	labelAlignment?: ComponentAlignment,
	labelCapitalization?: ComponentCapitalization,
	dividerType?: DividerTypes
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES MOLECULE DEFAULT PROPERTIES
// --------------------------------------------------------
// @NOTE - All the other properties will be automatically
// supplied by the atom defaults used in this molecule.
const _defaultProps = {
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
}
// --------------------------------------------------------

function LabeledDivider (props: PropTypes) {
	// --------------------------------------------------------
	// PRIVATE FUNCTIONS & VARIABLES
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Glyph component properties
	 * @return      {ReactComponent} Containing the child, or null
	 */
	function _getRenderElement (props: Object): Object {
		let leftDivider: Object | null = null
		let rightDivider: Object | null = null
		let label: Object = {}

		const filteredProps = _.omit(props, ['children'])

		switch (props.labelAlignment) {
		case 'left':
			label = _getLabelElement(filteredProps)
			rightDivider = _getDividerElement(filteredProps, 'right')
			break
		case 'right':
			leftDivider = _getDividerElement(filteredProps, 'left')
			label = _getLabelElement(filteredProps)
			break
		case 'center':
			leftDivider = _getDividerElement(filteredProps, 'left')
			label = _getLabelElement(filteredProps)
			rightDivider = _getDividerElement(filteredProps, 'right')
			break
		default:
			leftDivider = _getDividerElement(filteredProps, 'left')
			label = _getLabelElement(filteredProps)
			rightDivider = _getDividerElement(filteredProps, 'right')
			break
		}

		return (
			<div className={ classNames(styles.labeleddividerContainer)}>
				{leftDivider}
				<div className={ classNames(styles.centralWrapper)}>
					{label}
				</div>
				{rightDivider}
			</div>
		)
	}

	/**
	 * Get the label component
	 * @param       {Object} props Component properties
	 * @return      {ReactComponent} Label component
	 */
	function _getLabelElement (props: Object): Object {
		const labelElementProps = {
			theme: props.theme,
			device: props.device,
			class: undefined,
			size: undefined,
			isSelectable: undefined,
			status: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined,
			capitalization: undefined
		}

		// Append a possible class property to the label element
		if (props.class) labelElementProps.class = props.class

		// Append a possible size property to the label element
		if (props.size) labelElementProps.size = props.size

		// Append a possible isSelectable property to the label element
		if (props.isSelectable) labelElementProps.isSelectable = props.isSelectable

		// Append a possible status property to the label element
		if (props.status) labelElementProps.status = props.status

    // Append a possible animationType property to the label element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				labelElementProps.animationType = props.animationType[0]
			} else {
				labelElementProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the label element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				labelElementProps.animationName = props.animationName[0]
			} else {
				labelElementProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the label element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				labelElementProps.animationBehaviour = props.animationBehaviour[0]
			} else {
				labelElementProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the label element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				labelElementProps.animationDuration = props.animationDuration[0]
			} else {
				labelElementProps.animationDuration = props.animationDuration
			}
		}

		// Append a possible capitalization property to the label element
		if (props.capitalization) labelElementProps.capitalization = props.capitalization

		return (
			<Label {...labelElementProps} >
				{ props.label}
			</Label>
		)
	}

	/**
	 * Get the divider(s) component(s)
	 * @param       {Object} props Component properties
	 * @param       {Enum} dividerSide Divider side
	 * @return      {ReactComponent} Divider component
	 */
	function _getDividerElement (props: Object, dividerSide: 'left' | 'right'): Object {
		let animationArrPos: number = 0
		let dividerCssClass: Object = {}

		if (dividerSide === 'left') {
			animationArrPos = 1
			dividerCssClass = styles.leftWrapper
		} else {
			animationArrPos = 2
			dividerCssClass = styles.rightWrapper
		}
		const dividerProps = {
			theme: props.theme,
			device: props.device,
			class: undefined,
			type: props.dividerType,
			size: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined,
			status: undefined
		}

		// Append a possible class property to the label element
		if (props.class) dividerProps.class = props.class

		// Append a possible size property to the label element
		if (props.size) dividerProps.size = props.size

    // Append a possible animationType property to the label element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				if (props.animationType.length === 3) {
					dividerProps.animationType = props.animationType[animationArrPos]
				} else {
					dividerProps.animationType = props.animationType[0]
				}
			} else {
				dividerProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the label element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				if (props.animationName.length === 3) {
					dividerProps.animationName = props.animationName[animationArrPos]
				} else {
					dividerProps.animationName = props.animationName[0]
				}
			} else {
				dividerProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the label element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				if (props.animationBehaviour.length === 3) {
					dividerProps.animationBehaviour = props.animationBehaviour[animationArrPos]
				} else {
					dividerProps.animationBehaviour = props.animationBehaviour[0]
				}
			} else {
				dividerProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the label element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				if (props.animationDuration.length === 3) {
					dividerProps.animationDuration = props.animationDuration[animationArrPos]
				} else {
					dividerProps.animationDuration = props.animationDuration[0]
				}
			} else {
				dividerProps.animationDuration = props.animationDuration
			}
		}

		// Append a possible status property to the label element
		if (props.status) dividerProps.status = props.status

		return (
			<div className={ classNames(dividerCssClass)}>
				<Divider {...dividerProps} />
			</div>
		)
	}

	const renderElement: Object | null = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return renderElement
	// --------------------------------------------------------
}

LabeledDivider.defaultProps = _defaultProps
export default LabeledDivider

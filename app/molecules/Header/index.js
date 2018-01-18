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
import _ from 'lodash'
// --------------------------------------------------------

// --------------------------------------------------------
// MOLECULE IMPORTS
// --------------------------------------------------------
import Title from '../../atoms/Title'
import Subtitle from '../../atoms/Subtitle'
import Glyph from '../../atoms/Glyph'
import Divider from '../../atoms/Divider'

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
} from '../../neutrons/Defaults'
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
	children: ?any,
	theme: ?string,
	device: ?string,
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
// DEFINES MOLECULE DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	children: null,
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
}
// --------------------------------------------------------

function Header (props: PropTypes) {
	// --------------------------------------------------------
	// PRIVATE FUNCTIONS & VARIABLES
	// --------------------------------------------------------

	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Title component properties
	 * @return      {ReactComponent} Containing the child, or null
	 */
	function _getRenderElement (props: Object): any {
		let titleComponent: Object | null = null
		let subtitleComponent: Object | null = null
		let glyphComponent: Object | null = null
		let dividerComponent: Object | null = null

		props.children.map((child, index) => {
			const filteredProps = _.omit(props, ['children'])
			switch (child.type) {
			case Title:
				titleComponent = _getTitleElement(child, filteredProps)
				break
			case Subtitle:
				subtitleComponent = _getSubtitleComponent(child, filteredProps)
				break
			case Glyph:
				glyphComponent = _getGlyphElement(child, filteredProps)
				break
			case Divider:
				dividerComponent = _getDividerElement(child, filteredProps)
				break
			default:
				// @TODO Hook it into the console tool
				break
			}
		})

		let componentAlignment: ComponentAlignment = DEFAULT_COMPONENT_ALIGNMENT
		if (props.alignment) componentAlignment = props.alignment

		let componentSize: ComponentSize = DEFAULT_COMPONENT_SIZE
		if (props.size) componentSize = props.size

		if (!titleComponent) {
			// @TODO Hook it into the console tool
			return null
		}

		return _populateLayout(componentAlignment, componentSize, titleComponent, subtitleComponent, glyphComponent, dividerComponent)
	}

	/**
	 * Build the Title Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The title component
	 * @param       {Object} parentProps Sanitized parent properties
	 * @return      {Object} Containing the title element with merged properties
	 */
	function _getTitleElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Title { ...mergedProps } key='titleElement'>
				{ element.props.children }
			</Title>
		)
	}

	/**
	 * Build the Subtitle Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Subtitle component
	 * @param       {Object} parentProps Sanitized parent properties
	 * @return      {Object} Containing the Subtitle element with merged properties
	 */
	function _getSubtitleComponent (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Subtitle { ...mergedProps } key='subTitleElement'>
				{ element.props.children }
			</Subtitle>
		)
	}

	/**
	 * Build the Glyph Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Glyph component
	 * @param       {Object} parentProps Sanitized parent properties
	 * @return      {Object} Containing the Glyph element with merged properties
	 */
	function _getGlyphElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Glyph { ...mergedProps } key='glyphElement'>
				{ element.props.children }
			</Glyph>
		)
	}

	/**
	 * Build the Divider Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Divider component
	 * @param       {Object} parentProps Sanitized parent properties
	 * @return      {Object} Containing the Divider element with merged properties
	 */
	function _getDividerElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Divider { ...mergedProps } key='dividerElement'>
				{ element.props.children }
			</Divider>
		)
	}

	/**
	 * [_populateLayout description]
	 * @param       {ComponentAlignment} alignment Alignment of the Molecule
	 * @param       {ComponentSize} size Size of the Molecule
	 * @param       {Object | null} titleComponent The Title component
	 * @param       {Object | null} subtitleComponent The Subtitle component
	 * @param       {Object | null} glyphComponent The Glyph component
	 * @param       {Object | null} dividerComponent The Divider component
	 * @return      {Object} The molecule with the selected properties
	 */
	function _populateLayout (alignment: ComponentAlignment, size: ComponentSize, titleComponent: Object, subtitleComponent: Object | null, glyphComponent: Object | null, dividerComponent: Object | null): Object {
		let subtitleContainer: Object | null = null
		let glyphContainer: Object | null = null
		let dividerContainer: Object | null = null


		const titleContainer = (
			<div className={classNames(styles.titleContainer)}>
				{ titleComponent }
			</div>
		)

		if (subtitleComponent) {
			subtitleContainer = (
				<div className={classNames(styles.subtitleContainer)}>
					{ subtitleComponent }
				</div>
			)
		}

		if (glyphComponent) {
			glyphContainer = (
				<div className={classNames(styles.glyphContainer)}>
					{ glyphComponent }
				</div>
			)
		}

		if (dividerComponent) {
			dividerContainer = (
				<div className={classNames(styles.dividerContainer)}>
					{ dividerComponent }
				</div>
			)
		}

		const _leftAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.leftFlexWrapper)}>
						{ glyphContainer }
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleContainer }
							{ subtitleContainer }
						</div>
					</div>
					{ dividerContainer }
				</div>
			)
		}

		const _rightAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.rightFlexWrapper)}>
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleContainer }
							{ subtitleContainer }
						</div>
						{ glyphContainer }
					</div>
					{ dividerContainer }
				</div>
			)
		}

		const _centerAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.centerFlexWrapper)}>
						{ glyphContainer }
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleContainer }
							{ subtitleContainer }
						</div>
						{ dividerContainer }
					</div>
				</div>
			)
		}

		switch (alignment) {
		case 'left':
			return _leftAlignedLayout()
		case 'right':
			return _rightAlignedLayout()
		case 'center':
			return _centerAlignedLayout()
		case 'justify':
			return _centerAlignedLayout()
		default:
			return _leftAlignedLayout()
		}
	}

	const renderElement: any = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.header, styles[props.theme], styles[props.device])}>
			{ renderElement }
		</div>
	)
	// --------------------------------------------------------
}

Header.defaultProps = _defaultProps
export default Header

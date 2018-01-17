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
		let titleComponent, subtitleComponent, glyphComponent, dividerComponent

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

		return _populateLayout(props.alignment, props.size, titleComponent, subtitleComponent, glyphComponent, dividerComponent)
	}

	function _populateLayout (alignment?: ComponentAlignment, size?: ComponentSize, titleComponent?: React$Component<*>, subtitleComponent?: React$Component<*>, glyphComponent?: React$Component<*>, dividerComponent?: React$Component<*>): any {
		let layoutAlignment = DEFAULT_COMPONENT_ALIGNMENT
		let moleculeSize = DEFAULT_COMPONENT_SIZE

		if (alignment) {
			layoutAlignment = alignment
		}

		if (props.size) {
			moleculeSize = props.size
		}

		const _leftAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.flexWrapper)}>
						<div className={classNames(styles.iconContainer)}>
							{ glyphComponent }
						</div>
						<div className={classNames(styles.contentContainer, styles[moleculeSize])}>
							<div className={classNames(styles.titleContainer)}>
								{ titleComponent }
							</div>
							<div className={classNames(styles.subtitleContainer)}>
								{ subtitleComponent }
							</div>
						</div>
					</div>
					<div className={classNames(styles.dividerContainer)}>
						{ dividerComponent }
					</div>
				</div>
			)
		}

		switch (layoutAlignment) {
		case 'left':
			return _leftAlignedLayout()
		case 'right':
		case 'center':
		case 'justify':
		}
	}

	function _getTitleElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Title { ...mergedProps } key='titleElement'>
				{ element.props.children }
			</Title>
		)
	}

	function _getSubtitleComponent (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Subtitle { ...mergedProps } key='subTitleElement'>
				{ element.props.children }
			</Subtitle>
		)
	}

	function _getGlyphElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		console.info('parent', parentProps)
		console.info('element', element.props)
		return (
			<Glyph { ...mergedProps } key='glyphElement'>
				{ element.props.children }
			</Glyph>
		)
	}

	function _getDividerElement (element: React$Component<*>, parentProps: Object): Object {
		const mergedProps = { ...parentProps, ...element.props }
		return (
			<Divider { ...mergedProps } key='dividerElement'>
				{ element.props.children }
			</Divider>
		)
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

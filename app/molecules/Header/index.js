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

import type {
	PropTypes as TitleType
} from '../../atoms/Title'

import type {
	PropTypes as SubtitleType
} from '../../atoms/Subtitle'

import type {
	GlyphFamily,
	PropTypes as GlyphType
} from '../../atoms/Glyph'

import type {
	PropTypes as DividerType,
	DividerTypes as DividerStyles
} from '../../atoms/Divider'

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
const DEFAULT_HEADER_DIVIDER: boolean = true

type PropTypes = {
	theme?: string,
	device?: string,
	class?: Object,
	size?: ComponentSize,
	isSelectable?: boolean,
	status?: ComponentStatus,
	alignment?: ComponentAlignment,
	animationType?: Array<AnimationType> | AnimationType,
	animationName?: Array<string> | string,
	animationBehaviour?: Array<AnimationBehaviour> | AnimationBehaviour,
	animationDuration?: Array<AnimationDuration> | AnimationDuration,
	headerTitle: string,
	headerSubtitle?: string,
	glyphFamily?: GlyphFamily,
	glyphName?: string,
	headerDivider?: boolean,
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES MOLECULE DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	theme: DEFAULT_THEME,
	device: DEFAULT_DEVICE,
	headerDivider: DEFAULT_HEADER_DIVIDER
}

const DEFAULT_DIVIDER_STYLE: DividerStyles = 'solid'
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

		const filteredProps = _.omit(props, ['children'])

		titleComponent = _getTitleElement(filteredProps)

		if (filteredProps.headerSubtitle) subtitleComponent = _getSubtitleComponent(filteredProps)
		if (filteredProps.glyphFamily && filteredProps.glyphName) glyphComponent = _getGlyphElement(filteredProps)
		if (filteredProps.headerDivider) dividerComponent = _getDividerElement(filteredProps)

		let componentAlignment: ComponentAlignment = DEFAULT_COMPONENT_ALIGNMENT
		if (props.alignment) componentAlignment = props.alignment

		let componentSize: ComponentSize = DEFAULT_COMPONENT_SIZE
		if (props.size) componentSize = props.size

		return _populateLayout(componentAlignment, componentSize, titleComponent, subtitleComponent, glyphComponent, dividerComponent)
	}

	/**
	 * Build the Title Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The title component
	 * @param       {Object} props Sanitized parent properties
	 * @return      {Object} Containing the title element with merged properties
	 */
	function _getTitleElement (props: Object): Object {
		const titleProps: TitleType = {
			children: undefined,
			theme: props.theme,
			device: props.device,
			class: undefined,
			size: undefined,
			isSelectable: undefined,
			status: undefined,
			alignment: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined
		}

		// Append a possible class property to the title element
		if (props.class) titleProps.class = props.class

		// Append a possible size property to the title element
		if (props.size) titleProps.size = props.size

		// Append a possible isSelectable property to the title element
		if (props.isSelectable) titleProps.isSelectable = props.isSelectable

		// Append a possible status property to the title element
		if (props.status) titleProps.status = props.status

		// Append a possible alignment property to the title element
		if (props.alignment) titleProps.alignment = props.alignment

		// Append a possible animationType property to the title element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				titleProps.animationType = props.animationType[0]
			} else {
				titleProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the title element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				titleProps.animationName = props.animationName[0]
			} else {
				titleProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the title element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				titleProps.animationBehaviour = props.animationBehaviour[0]
			} else {
				titleProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the title element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				titleProps.animationDuration = props.animationDuration[0]
			} else {
				titleProps.animationDuration = props.animationDuration
			}
		}

		return (
			<Title { ...titleProps }>
				{ props.headerTitle }
			</Title>
		)
	}

	/**
	 * Build the Subtitle Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Subtitle component
	 * @param       {Object} props Sanitized parent properties
	 * @return      {Object} Containing the Subtitle element with merged properties
	 */
	function _getSubtitleComponent (props: Object): Object {
		const subtitleProps: SubtitleType = {
			children: undefined,
			theme: props.theme,
			device: props.device,
			class: undefined,
			size: undefined,
			isSelectable: undefined,
			status: undefined,
			alignment: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined
		}

		// Append a possible class property to the subtitle element
		if (props.class) subtitleProps.class = props.class

		// Append a possible size property to the subtitle element
		if (props.size) subtitleProps.size = props.size

		// Append a possible isSelectable property to the subtitle element
		if (props.isSelectable) subtitleProps.isSelectable = props.isSelectable

		// Append a possible status property to the subtitle element
		if (props.status) subtitleProps.status = props.status

		// Append a possible alignment property to the subtitle element
		if (props.alignment) subtitleProps.alignment = props.alignment

		// Append a possible animationType property to the subtitle element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				if (props.animationType.length >= 2) {
					subtitleProps.animationType = props.animationType[1]
				} else {
					subtitleProps.animationType = props.animationType[0]
				}
			} else {
				subtitleProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the subtitle element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				if (props.animationName.length >= 2) {
					subtitleProps.animationName = props.animationName[1]
				} else {
					subtitleProps.animationName = props.animationName[0]
				}
			} else {
				subtitleProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the subtitle element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				if (props.animationBehaviour.length >= 2) {
					subtitleProps.animationBehaviour = props.animationBehaviour[1]
				} else {
					subtitleProps.animationBehaviour = props.animationBehaviour[0]
				}
			} else {
				subtitleProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the subtitle element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				if (props.animationDuration.length >= 2) {
					subtitleProps.animationDuration = props.animationDuration[1]
				} else {
					subtitleProps.animationDuration = props.animationDuration[0]
				}
			} else {
				subtitleProps.animationDuration = props.animationDuration
			}
		}

		return (
			<Subtitle { ...subtitleProps }>
				{ props.headerSubtitle }
			</Subtitle>
		)
	}

	/**
	 * Build the Glyph Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Glyph component
	 * @param       {Object} props Sanitized parent properties
	 * @return      {Object} Containing the Glyph element with merged properties
	 */
	function _getGlyphElement (props: Object): Object {
		const glyphProps: GlyphType = {
			theme: props.theme,
			device: props.device,
			class: undefined,
			family: props.glyphFamily,
			name: props.glyphName,
			size: undefined,
			status: undefined,
			alignment: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined
		}

		// Append a possible class property to the glyph element
		if (props.class) glyphProps.class = props.class

		// Append a possible size property to the glyph element
		if (props.size) glyphProps.size = props.size

		// Append a possible status property to the glyph element
		if (props.status) glyphProps.status = props.status

		// Append a possible alignment property to the glyph element
		if (props.alignment) glyphProps.alignment = props.alignment

		// Append a possible animationType property to the glyph element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				if (props.animationType.length >= 2) {
					glyphProps.animationType = props.animationType[1]
				} else {
					glyphProps.animationType = props.animationType[0]
				}
			} else {
				glyphProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the glyph element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				if (props.animationName.length >= 2) {
					glyphProps.animationName = props.animationName[1]
				} else {
					glyphProps.animationName = props.animationName[0]
				}
			} else {
				glyphProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the glyph element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				if (props.animationBehaviour.length >= 2) {
					glyphProps.animationBehaviour = props.animationBehaviour[1]
				} else {
					glyphProps.animationBehaviour = props.animationBehaviour[0]
				}
			} else {
				glyphProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the glyph element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				if (props.animationDuration.length >= 2) {
					glyphProps.animationDuration = props.animationDuration[1]
				} else {
					glyphProps.animationDuration = props.animationDuration[0]
				}
			} else {
				glyphProps.animationDuration = props.animationDuration
			}
		}

		return (
			<Glyph { ...glyphProps } />
		)
	}

	/**
	 * Build the Divider Element merging the Element Component properties with the Molecule properties
	 * @param       {React$Component<*>} element The Divider component
	 * @param       {Object} props Sanitized parent properties
	 * @return      {Object} Containing the Divider element with merged properties
	 */
	function _getDividerElement (props: Object): Object {
		const dividerProps: DividerType = {
			theme: props.theme,
			device: props.device,
			class: undefined,
			type: DEFAULT_DIVIDER_STYLE,
			size: undefined,
			status: undefined,
			animationType: undefined,
			animationName: undefined,
			animationBehaviour: undefined,
			animationDuration: undefined
		}

		// Append a possible class property to the subtitle element
		if (props.class) dividerProps.class = props.class

		// Append a possible size property to the subtitle element
		if (props.size) dividerProps.size = props.size

		// Append a possible status property to the subtitle element
		if (props.status) dividerProps.status = props.status

		// Append a possible animationType property to the subtitle element
		if (props.animationType) {
			if (_.isArray(props.animationType)) {
				if (props.animationType.length >= 4) {
					dividerProps.animationType = props.animationType[3]
				} else {
					dividerProps.animationType = props.animationType[0]
				}
			} else {
				dividerProps.animationType = props.animationType
			}
		}

		// Append a possible animationName property to the subtitle element
		if (props.animationName) {
			if (_.isArray(props.animationName)) {
				if (props.animationName.length >= 4) {
					dividerProps.animationName = props.animationName[3]
				} else {
					dividerProps.animationName = props.animationName[0]
				}
			} else {
				dividerProps.animationName = props.animationName
			}
		}

		// Append a possible animationBehaviour property to the subtitle element
		if (props.animationBehaviour) {
			if (_.isArray(props.animationBehaviour)) {
				if (props.animationBehaviour.length >= 4) {
					dividerProps.animationBehaviour = props.animationBehaviour[3]
				} else {
					dividerProps.animationBehaviour = props.animationBehaviour[0]
				}
			} else {
				dividerProps.animationBehaviour = props.animationBehaviour
			}
		}

		// Append a possible animationDuration property to the subtitle element
		if (props.animationDuration) {
			if (_.isArray(props.animationDuration)) {
				if (props.animationDuration.length >= 4) {
					dividerProps.animationDuration = props.animationDuration[3]
				} else {
					dividerProps.animationDuration = props.animationDuration[0]
				}
			} else {
				dividerProps.animationDuration = props.animationDuration
			}
		}

		return (
			<Divider { ...dividerProps } />
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
		const _leftAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.leftFlexWrapper)}>
						{ glyphComponent }
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleComponent }
							{ subtitleComponent }
						</div>
					</div>
					{ dividerComponent }
				</div>
			)
		}

		const _rightAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.rightFlexWrapper)}>
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleComponent }
							{ subtitleComponent }
						</div>
						{ glyphComponent }
					</div>
					{ dividerComponent }
				</div>
			)
		}

		const _centerAlignedLayout: Function = function (): Object {
			return (
				<div>
					<div className={classNames(styles.centerFlexWrapper)}>
						{ glyphComponent }
						<div className={classNames(styles.contentContainer, styles[size])}>
							{ titleComponent }
							{ subtitleComponent }
						</div>
						{ dividerComponent }
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

	const renderElement: Object | null = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return renderElement
	// --------------------------------------------------------
}

Header.defaultProps = _defaultProps
export default Header

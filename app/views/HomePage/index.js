// @flow
/*
 *
 * HomePage
 *
 */

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { createStructuredSelector } from 'reselect'
import {
	selectFavouriteColour,
} from './selectors'

import {
	setFavouriteColour
} from './actions'

import themeManager from './../../structural/ThemeManager'

import FlexRow from './../../atoms/FlexRow'
import FlexCol from './../../atoms/FlexCol'
import Glyph from './../../atoms/Glyph'
import Title from './../../atoms/Title'
import Subtitle from './../../atoms/Subtitle'
import Animator from './../../protons/Animator'
import Header from './../../molecules/Header'


// --------------------------------------------------------

// --------------------------------------------------------
// INTERNATIONALISATION SUPPORT
// --------------------------------------------------------
import { injectIntl } from 'react-intl'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'

import { images } from './../../styles/assets'
// --------------------------------------------------------

// --------------------------------------------------------
// COMPONENT / CONTAINER IMPORTS
// --------------------------------------------------------
import Helmet from 'react-helmet'
// --------------------------------------------------------

// --------------------------------------------------------
// COMPONENT PROPERTIES DEFINITION
// --------------------------------------------------------
type PropTypes = {
	themeManager: Object,
	selectFavouriteColour: any,
	actions: Object
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES COMPONENT DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {
	themeManager: {},
	selectFavouriteColour: null,
	actions: {}
}
// --------------------------------------------------------

export class HomePage extends React.Component<PropTypes> {

	static defaultProps: PropTypes

	// --------------------------------------------------------
	// DECLARATION FOR HELPER FUNCTIONS
	// --------------------------------------------------------
	_getBrowsingDevice: Function
	_setFavouriteColour: Function
	_setTheme: Function
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT CONSTRUCTOR
	// --------------------------------------------------------
	constructor (props: Object) {
		super(props)

		this._getBrowsingDevice = this._getBrowsingDevice.bind(this)
		this._setFavouriteColour = this._setFavouriteColour.bind(this)
		this._setTheme = this._setTheme.bind(this)
	}
	// --------------------------------------------------------

	// --------------------------------------------------------
	// HELPER FUNCTIONS
	// --------------------------------------------------------
	_getBrowsingDevice () {
		switch (this.props.themeManager.device.get()) {
		case 'tablet':
			return images.tabletScreen
		case 'mobile':
			return images.mobileScreen
		default:
			return images.computerScreen
		}
	}

	_setFavouriteColour () {
		this.props.actions.setFavouriteColour('blue')
	}

	_setTheme () {
		this.props.themeManager.theme.set('default')
	}
	// --------------------------------------------------------


	// --------------------------------------------------------
	// REACT LIFE CYCLES
	// --------------------------------------------------------
	componentWillMount () {}
	render () {
		return (
      <div className={classNames(styles.homepage, styles[this.props.themeManager.theme.get()], styles[this.props.themeManager.device.get()])}>
        <Helmet
          title="HomePage"
          meta={[ { name: 'description', content: 'Description of HomePage' } ]}
        />

				<FlexRow class={classNames(styles.stage)}>
					<FlexCol>
						<div>
							<Title
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								isUserSelectable={false}
								animationType="attention_seekers"
								animationName="bounce"
								animationBehaviour="animateOnce"
							>
								Button
							</Title>
							<Subtitle
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								isUserSelectable={false}
								animationType="fading_entrances"
								animationName="fadeInLeft"
								animationBehaviour="animateOnce"
							>
								Buttons should be used
							</Subtitle>
						</div>
					</FlexCol>

					<Header>
						<Title> oi </Title>
						<Subtitle> sub </Subtitle>
					</Header>

					<br/>
					<br/>
					<br/>
					testing
					<Glyph
						family="ionicons"
						name="ios-flower-outline"
						size="xl"
						alignment="center"
						animationType="attention_seekers"
						animationName="bounce"
						animationBehaviour="animateOnce"
					/>
					<Animator
						type="attention_seekers"
						name="bounce"
						behaviour="animateOnce"
					>
						Simple test
					</Animator>
				</FlexRow>
      </div>
		)
	}

	componentDidMount () {}
	// --------------------------------------------------------
}

// --------------------------------------------------------
// ACTIONS MAP
// --------------------------------------------------------
function mapDispatchToProps (dispatch) {
	return {
		actions: {
			setFavouriteColour: (args) => dispatch(setFavouriteColour(args)),
			dispatch,
		}
	}
}

// --------------------------------------------------------
// SELECTORS MAP
// ------------------------------------------ --------------
const mapStateToProps = createStructuredSelector({
	selectFavouriteColour: selectFavouriteColour
})

// --------------------------------------------------------
// SETTING CONTAINER.DEFAULTPROPS
// --------------------------------------------------------
HomePage.defaultProps = _defaultProps
// --------------------------------------------------------

const enhance = compose(
	injectIntl,
	themeManager,
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
)

export default enhance(HomePage)

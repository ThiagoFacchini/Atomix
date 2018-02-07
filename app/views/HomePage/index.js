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

import FlexRow from './../../protons/FlexRow'
import FlexCol from './../../protons/FlexCol'
import Animator from './../../protons/Animator'
import Glyph from './../../atoms/Glyph'
import Title from './../../atoms/Title'
import Subtitle from './../../atoms/Subtitle'
import Divider from './../../atoms/Divider'
import Label from './../../atoms/Label'
import Header from './../../molecules/Header'
import LabeledDivider from './../../molecules/LabeledDivider'


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
						<div style={{width: '100%'}}>
							<Title
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								isSelectable={false}
								status='error'
								alignment='right'
								animationType="attention_seekers"
								animationName="bounce"
								animationBehaviour="animateOnce"
								class={styles.customTitle}
							>
								Button
							</Title>
							<Subtitle
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								isSelectable={false}
								status='success'
								alignment='right'
								animationType="fading_entrances"
								animationName="fadeInLeft"
								animationBehaviour="animateOnce"
								class={styles.customSubtitle}
							>
								Buttons should be used
							</Subtitle>
							<Divider
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								size='xs'
								animationType="sliding_entrances"
								animationName="slideInLeft"
								animationBehaviour="animateOnce"
								animationDuration="verylong"
								status="warning"
								class={styles.customDivider}
							/>
						</div>
					</FlexCol>

					<br/>
					<br/>
					<br/>


					{/* <Header
						size='md'
						alignment='center'
						animationType="bouncing_entrances"
						animationName="bounceIn"
						animationBehaviour="animateOnce"
						animationDuration="short"
						class={styles.customHeader}
					> */}
						<Title>
							Homepage
						</Title>
						<Subtitle>
							Lorem impsum dollor sit amet consectutor lorem impsum
						</Subtitle>
						<Glyph
							family='fontawesome'
							name='mars-stroke'
						/>
						<Divider
							animationType="sliding_entrances"
							animationName="slideInLeft"
							animationBehaviour="animateOnce"
							animationDuration="verylong"
							paddingLeft={0}
							size='xs'
						/>
					{/* </Header> */}


					<br/>
					<br/>
					<br/>

					<FlexCol xs="3" sm="3" md="3" lg="3" xl="3">
						<div>
							<Label
								theme={this.props.themeManager.theme.get()}
								device={this.props.themeManager.device.get()}
								alignment='center'
								isSelectable={false}
								animationType="sliding_entrances"
								animationName="slideInLeft"
								animationBehaviour="animateOnce"
								animationDuration="veryshort"
								status="enabled"
								capitalization="uppercase"
								class={styles.customLabel}
							>
								Testing label
							</Label>
						</div>
					</FlexCol>
					<br/><br/>
					<LabeledDivider
						theme={this.props.themeManager.theme.get()}
						device={this.props.themeManager.device.get()}
						class={styles.customLabelDivider}
						size='md'
						animationType='bouncing_entrances'
						animationName={['bounceInUp', 'bounceInLeft', 'bounceInRight']}
						animationBehaviour='animateOnce'
						animationDuration={['medium', 'medium', 'medium']}
						isSelectable={false}
						status='success'
						label='Labeled Divider'
						labelAlignment='center'
						labelCapitalization='capitalize'
						dividerType='solid'
					/>
					<Header
						headerTitle="Header"
						headerSubtitle="Subtitle and pans"
						glyphFamily='fontawesome'
						glyphName='mars-stroke'
						animationType='bouncing_entrances'
						animationName={['bounceInUp', 'bounceInLeft', 'bounceInRight', 'bounceInLeft']}
						animationBehaviour='animateOnce'
						animationDuration={['medium', 'medium', 'medium', 'veryshort']}
					/>
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

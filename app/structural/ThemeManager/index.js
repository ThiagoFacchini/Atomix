// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
	selectTheme,
	selectDevice
} from './selectors.js'
import { setTheme } from './actions'

export default function themeManager (WrappedComponent: any) {
	const mapStateToProps = createStructuredSelector({
		theme: selectTheme,
		device: selectDevice
	})

	const mapDispatchToProps = (dispatch: (arg?: any) => void) => ({
		setTheme: (theme: string) => dispatch(setTheme(theme))
	})

	type PropTypes = {
		theme: string,
		device: Object,
		setTheme: Function
	}

	return connect(mapStateToProps, mapDispatchToProps)(class ThemeManagerComponent extends React.Component<*> {
		props: PropTypes

		render () {
			const browserDetails = {
				name: this.props.device.browserName,
				version: this.props.device.browserVersion
			}

			const attachProps = {
				themeManager: {
					theme: {
						get: () => this.props.theme,
						set: (theme) => this.props.setTheme(theme)
					},
					device: {
						get: () => this.props.device.device,
						getBrowser: () => browserDetails,
						getCapabilityGrade: () => this.props.device.capabilityGrade,
						getOperationalSystem: () => this.props.device.operationalSystem,
						getRenderingEngine: () => this.props.device.renderingEngine
					}
				}
			}

			const mergedProps = { ...this.props, ...attachProps }

			return (
				<WrappedComponent { ...mergedProps } />
			)
		}
	})
}

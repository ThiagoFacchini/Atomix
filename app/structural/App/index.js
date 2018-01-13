// @flow
//
// App.react.js
// This component is the skeleton around the actual pages, and should only
// contain assets that will be globally accessed.

import React from 'react'

import classNames from 'classnames'
import styles from './styles.css'

// All imported fonts became available globally
import '../../styles/fonts/roboto/roboto.css'


type PropTypes = {
	children: any
}

const _defaultProps = {
	children: null
}

export class App extends React.PureComponent<*> {
	propTypes: PropTypes

	static defaultProps: PropTypes

	render () {
		return (
			<div className={classNames(styles.app)}>
				{React.Children.toArray(this.props.children)}
			</div>
		)
	}

}

App.defaultProps = _defaultProps

export default App

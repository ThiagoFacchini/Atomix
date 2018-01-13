// @noflow
/**
 * Atom Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../utils/componentExists')

module.exports = {
	description: 'The smallest application building block.',
	prompts: [{
		type: 'list',
		name: 'type',
		message: 'Select the type of Atom',
		default: 'Stateless',
		choices: () => ['Stateless', 'Stateful (Pure)', 'Stateful'],
	}, {
		type: 'input',
		name: 'name',
		message: 'How should this atom be called?',
		default: 'Button',
		validate: (value) => {
			if ((/.+/).test(value)) {
				return componentExists(value) ? 'This name is already in use by an atom, molecule, organism or view.' : true
			}

			return 'The name is required'
		},
	}],
	actions: (data) => {
    // Generate index.js and index.test.js
		let componentTemplate

		switch (data.type) {
		case 'Stateful': {
			componentTemplate = './atom/es6.js.hbs'
			break
		}
		case 'Stateful (Pure)': {
			componentTemplate = './atom/es6.pure.js.hbs'
			break
		}
		case 'Stateless': {
			componentTemplate = './atom/stateless.js.hbs'
			break
		}
		default: {
			componentTemplate = './atom/es6.js.hbs'
		}
		}

		const actions = [{
			type: 'add',
			path: '../../app/atoms/{{properCase name}}/index.js',
			templateFile: componentTemplate,
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/atoms/{{properCase name}}/styles.css',
			templateFile: './atom/styles.css.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/atoms/{{properCase name}}/tests/index.test.js',
			templateFile: './atom/test.js.hbs',
			abortOnFail: true,
		}]

		return actions
	},
}

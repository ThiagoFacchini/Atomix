// @noflow
/**
 * Atom Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../utils/componentExists')

module.exports = {
	description: 'A relatively complex group of molecules.',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'How should this molecule be called?',
		default: 'TopMenu',
		validate: (value) => {
			if ((/.+/).test(value)) {
				return componentExists(value) ? 'This name is already in use by an atom, molecule, organism or view.' : true
			}

			return 'The name is required'
		},
	}],

	actions: (data) => {
    // Generate index.js and index.test.js
		const actions = [{
			type: 'add',
			path: '../../app/organisms/{{properCase name}}/index.js',
			templateFile: './organism/es6.pure.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/organisms/{{properCase name}}/styles.css',
			templateFile: './organism/styles.css.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/organisms/{{properCase name}}/tests/index.test.js',
			templateFile: './organism/test.js.hbs',
			abortOnFail: true,
		}]

		return actions
	},
}

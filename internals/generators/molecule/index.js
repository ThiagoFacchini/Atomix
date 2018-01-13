// @noflow
/**
 * Molecule Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../utils/componentExists')

module.exports = {
	description: 'A group of atoms bonded together.',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'How should this molecule be called?',
		default: 'Form',
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
			path: '../../app/molecules/{{properCase name}}/index.js',
			templateFile: './molecule/index.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/molecules/{{properCase name}}/styles.css',
			templateFile: './molecule/styles.css.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/molecules/{{properCase name}}/tests/index.test.js',
			templateFile: './molecule/test.js.hbs',
			abortOnFail: true,
		}]

		return actions
	},
}

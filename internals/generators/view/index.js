// @noflow
/**
 * View Generator
 */

/* eslint strict: ["off"] */

const componentExists = require('../utils/componentExists')

module.exports = {
	description: 'A group of organisms stitched together to form pages.',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'How should this molecule be called?',
		default: 'HomePage',
		validate: (value) => {
			if ((/.+/).test(value)) {
				return componentExists(value) ? 'This name is already in use by an atom, molecule, organism or view.' : true
			}
			return 'The name is required'
		},
	}],
	actions: (data) => {
		const actions = [{
			type: 'add',
			path: '../../app/views/{{properCase name}}/index.js',
			templateFile: './view/index.js.hbs',
			abortOnFail: true,
		}, {
			type: 'add',
			path: '../../app/views/{{properCase name}}/tests/index.test.js',
			templateFile: './view/test.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/styles.css',
			templateFile: './view/styles.css.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/intl/messages.js',
			templateFile: './view/messages.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/redux/actions.js',
			templateFile: './view/actions.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/tests/actions.test.js',
			templateFile: './view/actions.test.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/redux/constants.js',
			templateFile: './view/constants.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/redux/selectors.js',
			templateFile: './view/selectors.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/tests/selectors.test.js',
			templateFile: './view/selectors.test.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/redux/reducer.js',
			templateFile: './view/reducer.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/tests/reducer.test.js',
			templateFile: './view/reducer.test.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/redux/sagas.js',
			templateFile: './view/sagas.js.hbs',
			abortOnFail: true,
		},
		{
			type: 'add',
			path: '../../app/views/{{properCase name}}/tests/sagas.test.js',
			templateFile: './view/sagas.test.js.hbs',
			abortOnFail: true,
		}]
		return actions
	},
}

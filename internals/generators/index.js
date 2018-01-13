// @noflow
/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs')
const path = require('path')

const atomGenerator = require('./atom/index.js') // component
const moleculeGenerator = require('./molecule/index.js') // container
const organismGenerator = require('./organism/index.js') // new

const viewGenerator = require('./view/index.js')
const routeGenerator = require('./route/index.js')
const languageGenerator = require('./language/index.js')

module.exports = (plop) => {
	plop.setGenerator('Atom', atomGenerator)
	plop.setGenerator('Molecule', moleculeGenerator)
	plop.setGenerator('Organism', organismGenerator)
	plop.setGenerator('View', viewGenerator)
	plop.setGenerator('Route', routeGenerator)
	plop.setGenerator('Language', languageGenerator)
	plop.addHelper('directory', (comp) => {
		try {
			fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK)
			return `containers/${comp}`
		} catch (e) {
			return `components/${comp}`
		}
	})
	plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
}

// @noflow
/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs')
const path = require('path')
const atoms = fs.readdirSync(path.join(__dirname, '../../../app/atoms'))
const molecules = fs.readdirSync(path.join(__dirname, '../../../app/molecules'))
const organisms = fs.readdirSync(path.join(__dirname, '../../../app/organisms'))
const views = fs.readdirSync(path.join(__dirname, '../../../app/views'))
const components = atoms.concat(molecules).concat(organisms).concat(views)

function componentExists (comp) {
	return components.indexOf(comp) >= 0
}

module.exports = componentExists



// Require keystone
import keystone from "keystone"


export function start() {
	keystone.start()
}


// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'gangsteryoga',
	'brand': 'gangsteryoga',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

})

// Cloudinary media

keystone.set('cloudinary config', "cloudinary://151379816567168:rUQuVS_xnsJ7H-NBtKZ7sBPbFsk@dobqboa1a")
// optional, will prefix all built-in tags with 'solyd_'
keystone.set('cloudinary prefix', 'gangsteryoga')
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true)
// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true)

// Load your project's Models

keystone.import('models')

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
})

// Load your project's Routes

keystone.set('routes', require('./routes'))

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'users': 'users'
})

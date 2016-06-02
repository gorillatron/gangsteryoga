/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

import keystone from 'keystone'
import {reduce, flow} from 'lodash'
import {initLocals, flashMessages} from './middleware'


// The keystone importer does not support es6 modules
// so unpack the default export per imported route
const importRoutes = flow(
	keystone.importer(__dirname),
	routes => reduce(routes, (routes, {default: handler}, name) =>
		Object.assign(routes, {[name]: handler})
	, {})
)


// Common Middleware
keystone.pre('routes', initLocals)
keystone.pre('render', flashMessages)


// Import Route Controllers
var views = importRoutes('./views')
var routes = {views}


// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.get('/', routes.views.index)
	app.get('/yoga', routes.views.yoga)
	app.all('/contact', routes.views.contact)
	app.all('/gallery/:key', routes.views.gallery)

	app.get('/admin', (req, res) => res.redirect('/keystone'));

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

}

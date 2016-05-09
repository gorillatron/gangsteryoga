
import keystone from 'keystone'


export default function yoga(req, res) {

	const view = new keystone.View(req, res)
	const locals = res.locals

	// Set locals
	locals.section = 'yoga'

	view.render('yoga')

}

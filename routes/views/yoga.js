
import keystone from 'keystone'


export default function yoga(req, res) {

	var view = new keystone.View(req, res)
	var locals = res.locals

	// Set locals
	locals.section = 'yoga'

	view.render('yoga')

}

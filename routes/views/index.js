
import keystone from 'keystone'


export default function index(req, res) {
	
	var view = new keystone.View(req, res)
	var locals = res.locals
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'index'
	
	// Render the view
	view.render('index')
	
}


import keystone from 'keystone'


export default function vaartarbeid(req, res) {
	
	const view = new keystone.View(req, res)
	const locals = res.locals
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'vaartarbeid'

	view.query('prisons', keystone.list('Prison').model.find().populate('instructors'))
	view.query('instructors', keystone.list('Instructor').model.find())
	
	// Render the view
	view.render('vaartarbeid')
	
}
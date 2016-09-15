
import keystone from 'keystone'


export default function instruktoerer(req, res) {
	
	const view = new keystone.View(req, res)
	const locals = res.locals
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'instruktoerer'

	view.query('instructors', keystone.list('Instructor').model.find())
	
	// Render the view
	view.render('instruktoerer')
	
}

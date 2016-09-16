
import keystone from 'keystone'


export default function instruktoerer(req, res) {
	
	const view = new keystone.View(req, res)
	const locals = res.locals
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'instruktoerer'

	view.query('prisons', keystone.list('Prison').model.find().populate('instructors'))
	view.query('instructors', keystone.list('Instructor').model.find())

	if(req.params.key) {
		view.query('instructor', keystone.list('Instructor').model.findOne().where({key: req.params.key }))
		view.render('instruktoer')
	}
	else {
		view.render('instruktoerer')
	}
	
}

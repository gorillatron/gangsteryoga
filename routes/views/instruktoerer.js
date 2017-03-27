
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
		view.on('init', (next) => {

			keystone.list('Instructor').model
				.findOne()
				.where({key: req.params.key })
				.exec((err, instructor) => {

					if(!instructor) {
						res.status = 404
						return res.send("not found")
					}

					keystone.list('Prison').model
						.find()
						.where('instructors')
						.in([instructor.id])
						.exec((err, instructorPrisons) => {
							
							locals.instructor = instructor
							locals.instructorPrisons = instructorPrisons
							
							next()
						})
				})

		})
		view.render('instruktoer')
	}
	else {
		view.render('instruktoerer')
	}
	
}

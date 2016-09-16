
import keystone from 'keystone'
const Enquiry = keystone.list('Enquiry')


export default function kontakt(req, res) {
	
	const view = new keystone.View(req, res)
	const locals = res.locals
	
	// Set locals
	locals.section = 'kontakt'
	locals.formData = req.body || {}
	locals.validationErrors = {}
	locals.enquirySubmitted = false
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'kontakt' }, (next) => {
		
		const newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req)
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, message',
			errorMessage: 'Kunne ikke sende forespørsel.'
		}, (err) => {
			if (err) {
				locals.validationErrors = err.errors
			} else {
				locals.enquirySubmitted = true
			}
			next()
		})
		
	})
	
	view.render('kontakt')
	
}

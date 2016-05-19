
import keystone from 'keystone'

const Types = keystone.Field.Types



/**
 * Enquiry Model
 * =============
 */

const Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
})


Enquiry.add({
	name: { type: Types.Name, required: [true, "Navn mangler"] },
	email: { type: Types.Email, required: [true, "Epost mangler"] },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Legge igjen en beskjed' }
	] },
	message: { type: Types.Markdown, required: [true, "Beskjed mangler"] },
	createdAt: { type: Date, default: Date.now }
})


Enquiry.defaultSort = '-createdAt'
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt'
Enquiry.register()

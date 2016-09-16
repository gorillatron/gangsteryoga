
import keystone from 'keystone'

const Types = keystone.Field.Types



/**
 * Enquiry Model
 * =============
 */

const Enquiry = new keystone.List('Enquiry', {
	label: "Kontaktforespørsel",
	plural: "Kontaktforespørseler",
	nocreate: true,
	noedit: true
})


Enquiry.add({
	name: { type: Types.Name, required: [true, "Navn mangler"], label: "Navn" },
	email: { type: Types.Email, required: [true, "Epost mangler"], label: "Epost" },
	message: { type: Types.Markdown, required: [true, "Beskjed mangler"], label: "Beskjed" },
	createdAt: { type: Date, default: Date.now, label: "Opprettet dato" }
})


Enquiry.defaultSort = '-createdAt'
Enquiry.defaultColumns = 'name, email, createdAt'
Enquiry.register()

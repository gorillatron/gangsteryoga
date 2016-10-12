
import keystone from 'keystone'
import emailservice from '../services/email'

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

Enquiry.schema.post('save', function(doc) {

	emailservice.send({
		to:       'post@nosenyoga.no',
		from:     doc.email,
		subject:  'Gangsteryoga - Kontaktskjema',
		html:`
			<b>Fra:</b> ${doc.name.first} ${doc.name.last} <br>
			<b>Telefon:</b> ${doc.phone ||  "<i>ikke oppgitt</i>"}
			<br>
			<h3>Melding:</h3>
			<br>
			${doc.message.html}
		`
		},
		(err, json) => {
			if(err) {
				console.error(err)
			}
		}
	)

})

Enquiry.defaultSort = '-createdAt'
Enquiry.defaultColumns = 'name, email, createdAt'
Enquiry.register()

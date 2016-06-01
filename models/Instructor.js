
import keystone from 'keystone'

const Types = keystone.Field.Types



/**
 * Instructor Model
 * =============
 */

const Instructor = new keystone.List('Instructor', {
	label: "Instruktør",
	plural: "Instruktører"
})


Instructor.add({
	name: { type: Types.Name, required: [true, "Navn mangler"], label: "Navn" },
	email: { type: Types.Email, required: [true, "Epost mangler"], initial: true, label: "Epost" },
	phone: { type: String, label: "Telefon" },
	bio: { type: Types.Markdown },
	photo: { type: Types.CloudinaryImage },
	createdAt: { type: Date, default: Date.now, label: "Opprettet dato" }
})


Instructor.defaultSort = 'name'
Instructor.defaultColumns = 'name, email'
Instructor.register()

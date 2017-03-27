
import keystone from 'keystone'

const Types = keystone.Field.Types



/**
 * Prison Model
 * =============
 */

const Prison = new keystone.List('Prison', {
	label: "Fengsel",
	plural: "Fengsler"
})


Prison.add(
  {
	  name: { type: String, required: [true, "Navn mangler"], label: "Fengselsnavn" },
    url: { type: Types.Url, initial: true, required: [true, "Hjemmeside mangler"], label: "Hjemmeside" },
    location: { type: Types.Location, label: "Addresse", defaults: { country: 'Norge' }},
    state: { type: Types.Select, options: 'draft, published', default: 'draft', index: true, label: "Status" },
	  createdAt: { type: Date, default: Date.now, label: "Opprettet dato" }
  },
  { heading: "Kontaktperson" },
  {
    contactName: { type: Types.Name, label: "Navn" },
    contactEmail: { type: Types.Email, label: "Epost" },
    contactPhone: { type: String }   
  },
  { heading: "Instruktører" },
  {
    instructors: { type: Types.Relationship, ref: 'Instructor', many: true }
  }
)


Prison.defaultSort = 'name'
Prison.defaultColumns = 'name, createdAt'
Prison.register()

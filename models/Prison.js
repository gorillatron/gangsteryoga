
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
	  createdAt: { type: Date, default: Date.now, label: "Opprettet dato" }
  },
  { heading: "Kontaktperson" },
  {
    name: { type: Types.Name, label: "Navn" },
    email: { type: Types.Email, label: "Epost" },
    phone: { type: String }   
  }
)


Prison.defaultSort = 'name'
Prison.defaultColumns = 'name, createdAt'
Prison.register()

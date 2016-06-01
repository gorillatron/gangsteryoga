
import keystone from 'keystone'
import emailservice from '../services/email'

const Types = keystone.Field.Types


/**
 * User Model
 * ==========
 */

const User = new keystone.List('User', {
	label: "Bruker",
	plural: "Brukere",
})


User.add({
	name: { type: Types.Name, required: true, index: true, label: "Navn" },
	email: { type: Types.Email, initial: true, required: true, index: true, label: "Epost" },
	password: { type: Types.Password, initial: true, required: true, label: "Passord" }
}, 
'Permissions', {
	isAdmin: { type: Boolean, label: 'Admin', index: true }
})


User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin
})


User.defaultColumns = 'name, email, isAdmin'
User.register()


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
	email: { type: Types.Email, initial: true, required: true, index: true, label: "epost" },
	password: { type: Types.Password, initial: true, required: true, label: "passord" }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Admin', index: true }
})

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin
})


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' })


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin'
User.register()

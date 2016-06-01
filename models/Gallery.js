
import keystone from 'keystone'
import split from 'split-array'

const Types = keystone.Field.Types


/**
 * Gallery Model
 * =============
 */

const Gallery = new keystone.List('Gallery', {
	label: "Galleri",
	plural: "Gallerier",
	autokey: { from: 'name', path: 'key', unique: true },
})


Gallery.add({
	name: { type: String, required: true, label: "Navn" },
	publishedDate: { type: Date, default: Date.now, label: "Publisert dato" },
	heroImage: { type: Types.CloudinaryImage, label: "Hovedbilde" },
	images: { type: Types.CloudinaryImages, label: "Bilder" }
})


Gallery.schema.methods.chunkedImages = function(chunks) {
  return split(this.images, chunks)
}

Gallery.register()
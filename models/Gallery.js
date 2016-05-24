
import keystone from 'keystone'
import split from 'split-array'

const Types = keystone.Field.Types


/**
 * Gallery Model
 * =============
 */

const Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
})


Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
})


Gallery.schema.methods.chunkedImages = function(chunks) {
  return split(this.images, chunks)
}

Gallery.register()
import mongoose from 'mongoose';
import defaultColumns from './default-columns';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  shortDescription: String,
  ...defaultColumns,
});

// Remove _v & replace _id props with id...
// productSchema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret, options) {
//     ret.id = ret._id;
//     delete ret._id;
//     delete ret.__v;
//   },
// });

export default mongoose.model('Product', productSchema);
